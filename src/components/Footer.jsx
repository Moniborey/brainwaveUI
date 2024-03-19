import Section from './Section'
import {socials} from '../constants'

export default function Footer() {
  return (
    <Section
    crosses
    className={'!px-0 !py-10'}
    >
    <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='caption text-n-4'>{new Date().getFullYear()}. moniboreyc, All rights reserved.</p>
        <ul className='flex gap-5 flex-wrap'>
            {socials.map((icon,index)=>(
                <a href={icon.url} key={index} target='_blank' className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'>
                    <img src={icon.iconUrl} width={16} height={16} alt='icon'/>
                </a>
            ))}
        </ul>
    </div>
    </Section>
  )
}
