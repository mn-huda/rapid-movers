// local imports
import { Button } from '@/components/ui/button'
import Logo from './Logo'
import WhatsAppCall from './WhatsAppCall'

// Front Website Header
export default function FrontWebHeader({ lang }: { lang: 'en' | 'bn' }) {
  return (
    <header className='border-b-2 p-2'>
      <div className='flex gap-16 items-center justify-between max-w-screen-2xl me-auto ms-auto'>
        <a href='/'>
          <div className='flex items-center gap-2'>
            <Logo side={5} />
            <p
              className={`${
                lang === 'en' ? 'font-display ' : ''
              }text-primary text-3xl`}
            >
              Rapid Movers
            </p>
          </div>
        </a>
        <section className='flex gap-4 items-center'>
          <nav className='flex gap-4 items-center'>
            <a href='/about'>About</a>
            <a href='/services'>Services</a>
          </nav>
          <Button>Request Service</Button>
          <WhatsAppCall side={2} />
        </section>
      </div>
    </header>
  )
}
