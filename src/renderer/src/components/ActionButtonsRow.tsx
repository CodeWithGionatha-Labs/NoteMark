import { ComponentProps } from 'react'
import { NewNoteButton } from './Button'
import DeleteNoteButton from './Button/DeleteNoteButton'

export const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
