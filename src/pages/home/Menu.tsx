import {
  Bars3Icon,
  BookOpenIcon,
  CommandLineIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { useWindowSize } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { trackAnalyticsEvent } from '@/analytics/trackAnalyticsEvent'
import { IconButton } from '@/components/iconButton/IconButton'
import { MagicMenu } from '@/components/magicMenu/MagicMenu'
import { Constants } from '@/constants'
import { Routes } from '@/Router'
import { useKeyPress } from '@/utils/useKeyPress/useKeyPress'
import { useLink } from '@/utils/useLink/useLink'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const { width } = useWindowSize()
  const isSmallScreen = width && width < 640

  const link = useLink()
  const navigate = useNavigate()

  useKeyPress('Escape', () => {
    if (open) {
      setOpen(false)
    }
  })

  return (
    <MagicMenu
      open={open}
      trigger={
        <IconButton className="relative z-10" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </IconButton>
      }
      fanAngle={180}
      startAtAngle={180}
      radius={isSmallScreen ? 120 : 160}
    >
      <IconButton title="About" aria-label="About" onClick={() => navigate(Routes.about)}>
        <BookOpenIcon />
      </IconButton>

      <IconButton title="Projects" aria-label="Projects" onClick={() => navigate(Routes.projects)}>
        <CommandLineIcon />
      </IconButton>

      <IconButton
        className="text-5xl"
        title="Github"
        aria-label="Github"
        onClick={() => {
          trackAnalyticsEvent('Menu Item Click', { menuItemId: 'Github' })
          link(Constants.github, '_blank')
        }}
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      </IconButton>

      <IconButton
        className="text-3xl"
        title="LinkedIn"
        aria-label="LinkedIn"
        onClick={() => {
          trackAnalyticsEvent('Menu Item Click', { menuItemId: 'LinkedIn' })
          link(Constants.linkedIn, '_blank')
        }}
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </IconButton>

      <IconButton
        title="Resume"
        aria-label="Resume"
        onClick={() => {
          trackAnalyticsEvent('Menu Item Click', { menuItemId: 'Resume' })
          link(Constants.resume, '_blank')
        }}
      >
        <DocumentTextIcon />
      </IconButton>

      <IconButton
        title="Email"
        aria-label="Email"
        onClick={() => {
          trackAnalyticsEvent('Menu Item Click', { menuItemId: 'Email' })
          link(`mailto:${Constants.email}`, '_blank')
        }}
      >
        <EnvelopeIcon />
      </IconButton>
    </MagicMenu>
  )
}
