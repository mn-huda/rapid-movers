import type { ReactNode } from 'react'
import './Button.Style.css'

export default function Button({
  children
}: {
  children: ReactNode
}) {
  return <button>{children}</button>
}
