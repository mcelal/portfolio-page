"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"

interface ModalContextType {
  isMounted: boolean
}

const ModalContext = createContext<ModalContextType>({ isMounted: false })

export const useModal = () => useContext(ModalContext)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return <ModalContext.Provider value={{ isMounted }}>{children}</ModalContext.Provider>
}
