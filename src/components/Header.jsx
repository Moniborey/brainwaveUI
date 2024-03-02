import {useLocation} from 'react-router-dom'

import {brainwave} from '../assets'
import {navigation} from '../constants'

export default function Header() {

    const pathname = useLocation()

  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className='block w-[12rem] xl:mr-8' href='#hero'>
                <img src={brainwave} width={190} height={40}
                    alt="Brainwave"
                />
            </a>
            <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                    {navigation.map(nav=>(
                        <a className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${nav.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${pathname.hash === nav.url ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`} key={nav.id} href={nav.url}>
                            {nav.title}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    </div>
  )
}
