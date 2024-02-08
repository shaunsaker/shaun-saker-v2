import React, { ReactElement, ReactNode } from 'react'

const degressToRadians = (degress: number) => (2 * Math.PI * degress) / 360

const getRadialTransform = ({
  index,
  totalItems,
  radius,
  startAtAngle,
  fanAngle,
}: {
  index: number
  totalItems: number
  radius: number
  startAtAngle: number
  fanAngle: number
}) => {
  const anglePerItem = fanAngle / (totalItems - 1)
  const angle = startAtAngle + index * anglePerItem
  const x = radius * Math.cos(degressToRadians(angle))
  const y = radius * Math.sin(degressToRadians(angle))

  return {
    x,
    y,
  }
}

type Props = {
  open?: boolean
  trigger: ReactNode
  children: ReactNode[]
  fanAngle?: number // how big of a fan should the items occupy
  startAtAngle?: number // e.g. start placing items at 270 degress
  radius?: number // radius of the circle that the items will be placed
}

export const MagicMenu = ({
  open = false,
  trigger,
  children,
  fanAngle = 90,
  startAtAngle = 180,
  radius = 100,
}: Props): ReactElement => {
  return (
    <div className="relative">
      {trigger}

      {children.map((element, index) => {
        const coords = getRadialTransform({
          index,
          totalItems: children.length,
          radius,
          startAtAngle,
          fanAngle,
        })

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 translate(0px, 0px)  ${
              open ? 'opacity-100' : 'opacity-0'
            } transition-all`}
            style={{
              transform: `translate(${open ? coords.x : 0}px, ${open ? coords.y : 0}px)`,
              transitionDelay: `${index * 36}ms`,
            }}
          >
            {element}
          </div>
        )
      })}
    </div>
  )
}
