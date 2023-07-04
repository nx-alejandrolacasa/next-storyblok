import { Button } from '@/components/Button/Button'
import { ButtonStoryblok } from '@/types/sb-types'
import { ColorGroup } from '@/components/Config/ColorGroup'

export function Config() {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 pb-20 pt-10 sm:px-6">
      <h2 className="mb-10">Colors</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <ColorGroup
          colors={[
            { name: 'Primary 1', color: 'bg-primary-1' },
            { name: 'Primary 2', color: 'bg-primary-2' },
            { name: 'Primary 3', color: 'bg-primary-3' },
          ]}
        />
        <ColorGroup
          colors={[
            { name: 'Secondary 1', color: 'bg-secondary-1' },
            { name: 'Secondary 2', color: 'bg-secondary-2' },
            { name: 'Secondary 3', color: 'bg-secondary-3' },
          ]}
        />
        <ColorGroup
          colors={[
            { name: 'Tertiary 1', color: 'bg-tertiary-1' },
            { name: 'Tertiary 2', color: 'bg-tertiary-2' },
            { name: 'Tertiary 3', color: 'bg-tertiary-3' },
          ]}
        />
        <ColorGroup
          colors={[
            { name: 'Dark', color: 'bg-dark' },
            { name: 'Light', color: 'bg-light' },
            { name: 'Accent', color: 'bg-accent' },
          ]}
        />
      </div>
      <h2 className="my-10">Buttons</h2>
      <div className="flex w-full gap-8">
        <Button
          blok={
            {
              _uid: '123',
              label: 'Primary button',
              type: 'primary',
              component: 'button',
            } as ButtonStoryblok
          }
        />
        <Button
          blok={
            {
              _uid: '123',
              label: 'Secondary button',
              type: 'secondary',
              component: 'button',
            } as ButtonStoryblok
          }
        />
        <Button
          blok={
            {
              _uid: '123',
              label: 'Tertiary button',
              type: 'tertiary',
              component: 'button',
            } as ButtonStoryblok
          }
        />
      </div>
    </div>
  )
}
