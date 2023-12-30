import { notesMock } from '@/store/mocks'
import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (selectedNoteIndex == null) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from Note${selectedNoteIndex}`
  }
})
