import type { ReactNode } from 'react'
import type { Lang } from '@/definitions.ts'

import FrontFooter from '@/components/react/FrontFooter.tsx'
import FrontHeader from '@/components/react/FrontHeader.tsx'

export default function FrontLayout({
  children,
  lang
}: {
  children: ReactNode
  lang: Lang
}) {
  return (
    <>
      <FrontHeader lang={lang} />
      <main>{children}</main>
      <FrontFooter lang={lang} />
    </>
  )
}
