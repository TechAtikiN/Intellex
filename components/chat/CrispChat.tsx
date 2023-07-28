'use client'
// name imports
import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('725d79e6-cf62-489d-81e0-26609fe30aaa')
  }, [])
  return null
}

