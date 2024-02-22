// local imports
import Logo from './Logo'

// Front Website Header
export default function FrontWebFooter({ lang }: { lang: 'en' | 'bn' }) {
  return (
    <footer className='bg-foreground pe-2 ps-2 py-8'>
      <div className='max-w-screen-2xl me-auto ms-auto'>
        <a
          className='flex flex-col gap-4 items-center sm:w-min'
          href='/'
        >
          <Logo side={10} />
          <p
            className={`${
              lang === 'en' ? 'font-display ' : ''
            }text-background text-center text-4xl`}
          >
            Rapid Movers
          </p>
        </a>
      </div>
    </footer>
  )
}
