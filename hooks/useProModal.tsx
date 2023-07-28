// name imports
import { create } from 'zustand'

interface useProMOdalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
export const useProModal = create<useProMOdalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))