import type { Lang } from '@/definitions.ts'

import FrontLayout from '@/layouts/react/FrontLayout.tsx'

export default function Home({ lang }: { lang: Lang }) {
  return (
    <FrontLayout lang={lang}>
      <h1>Rapid Movers Body</h1>
    </FrontLayout>
  )
}
