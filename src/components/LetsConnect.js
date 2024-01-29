import { emailUrl, instagramUrl } from '@/data/dataLink'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function LetsConnect() {
    return (
        <div className='flex flex-col items-center my-10 text-lg space-y-3'>
          <span className='dark:text-neutral-200 duration-200'>Let's get connected</span>
          <div className='flex space-x-4 text-3xl'>
            <Link href={instagramUrl}>
                <FontAwesomeIcon icon={faInstagram} className='text-[#24292F] hover:text-neutral-400 dark:text-neutral-200 dark:hover:text-neutral-500 duration-200'/>
            </Link>
            <Link href={emailUrl}>
                <FontAwesomeIcon icon={faEnvelope} className='text-[#181818] dark:text-neutral-200 dark:hover:text-neutral-500 hover:text-neutral-500 duration-200'/>
            </Link>
          </div>
        </div>
    )
}