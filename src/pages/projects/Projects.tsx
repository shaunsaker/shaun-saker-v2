import React, { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Dialog } from '@/components/dialog/Dialog'
import { Routes } from '@/Router'

import { PROJECTS } from './data'
import { Project } from './Project'

export const Projects = (): ReactElement => {
  const navigate = useNavigate()

  const onDialogClose = useCallback(() => {
    navigate(Routes.home)
  }, [navigate])

  return (
    <Dialog title="Projects" open onClose={onDialogClose}>
      {PROJECTS.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </Dialog>
  )
}
