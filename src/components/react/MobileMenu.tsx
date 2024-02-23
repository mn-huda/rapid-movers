// npm imports
import { useState } from 'react'
import { ChevronUp, ChevronDown, Menu, X } from 'lucide-react'

// local imports
import { Button } from '@/components/ui/button'

// Mobile Menu
export default function MobileMenu({
  className,
  lang
}: {
  className?: string
  lang: 'en' | 'bn'
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Button
        variant='outline'
        className='lg:hidden p-2 z-50'
        onClick={() => {
          console.log('clicked')
          setMobileMenuOpen(cur => !cur)
        }}
      >
        {mobileMenuOpen ? (
          <X
            className='h-5 w-5'
            height={20}
            width={20}
          />
        ) : (
          <Menu
            className='h-5 w-5'
            height={20}
            width={20}
          />
        )}
      </Button>
      <div
        className={`duration-200 fixed lg:hidden h-screen pt-20 ${
          mobileMenuOpen ? 'right-0' : '-right-64'
        } top-0 z-10`}
      >
        <nav className='bg-background flex flex-col gap-4 h-full p-4 w-64'>
          <a href='/about'>
            <div className='border dark:hover:text-foreground hover:text-background pe-2 ps-2 py-1 rounded-md'>
              About
            </div>
          </a>
          <ServiceMenu lang={lang} />
          <a href='/contact'>
            <div className='border dark:hover:text-foreground hover:text-background pe-2 ps-2 py-1 rounded-md'>
              Contact
            </div>
          </a>
        </nav>
      </div>
    </>
  )
}

function ServiceMenu({ lang }: { lang: 'en' | 'bn' }) {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false)

  return (
    <div
      className={`border dark:hover:text-foreground flex flex-col gap-2 hover:text-background ${
        serviceMenuOpen ? 'pb-2' : 'pb-1'
      } pe-2 ps-2 pt-1 rounded-md`}
    >
      <div className='flex items-center justify-between'>
        <p>Services</p>
        <div
          className='cursor-pointer flex h-full items-center pe-2 ps-2'
          onClick={() => setServiceMenuOpen(cur => !cur)}
        >
          {serviceMenuOpen ? (
            <ChevronUp
              className='h-5 w-5'
              height={20}
              width={20}
            />
          ) : (
            <ChevronDown
              className='h-5 w-5'
              height={20}
              width={20}
            />
          )}
        </div>
      </div>
      {serviceMenuOpen ? (
        <div
          className={`bg-background dark:bg-muted border flex flex-col gap-2 ${
            serviceMenuOpen ? 'h-min' : 'h-0'
          } overflow-hidden p-4 rounded-md w-full`}
        >
          <a href='/shifting'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/sofa-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/sofa-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Shifting</p>
              </div>
            </div>
          </a>
          <a href='/transport'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/truck-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/truck-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Transport</p>
              </div>
            </div>
          </a>
          <a href='/cleaning'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/sponge-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/sponge-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Cleaning</p>
              </div>
            </div>
          </a>
          <a href='/pest-control'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/window-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/window-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Pest Control</p>
              </div>
            </div>
          </a>
          <a href='/electrical'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/chandelier-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/chandelier-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Electrical</p>
              </div>
            </div>
          </a>
          <a href='plumbing'>
            <div className='dark:hover:bg-accent flex hover:bg-primary-foreground items-center gap-3 p-2 rounded-md'>
              <img
                className='dark:hidden h-8 w-8'
                width={48}
                height={48}
                src='/sink-light.gif'
                alt='home shifting symbol'
              />
              <img
                className='dark:block h-8 hidden w-8'
                width={48}
                height={48}
                src='/sink-dark.gif'
                alt='home shifting symbol'
              />
              <div>
                <p className='font-bold text-xl'>Plumbing</p>
              </div>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  )
}
