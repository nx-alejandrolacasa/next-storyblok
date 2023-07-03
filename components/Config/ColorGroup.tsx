import { Fragment } from 'react'
import clsx from 'clsx'

type ColorGroupProps = {
  colors: { name: string; color: string }[]
}

export const ColorGroup = ({ colors }: ColorGroupProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {colors.map(({ color, name }) => (
        <Fragment key={color}>
          <span className="text-lg">{name}:</span>
          <span className={clsx('block h-10 w-20 rounded', color)}></span>
        </Fragment>
      ))}
    </div>
  )
}
