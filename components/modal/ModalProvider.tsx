'use client'
// named imports
import { useEffect, useState } from 'react'
// default imports
import ProModal from './ProModal'

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <ProModal />
    </>
  )
}

export default ModalProvider
