import Link from "next/link";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { githubUrl, websiteUrl  } from '@/data/dataLink'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Links(props) {

    return (
        <div className='space-y-3 flex flex-col'>
          <Link href={websiteUrl} target='_blank'>
            <div className='w-full rounded-xl bg-[#181818] dark:bg-slate-200 border-2 border-[#181818] hover:bg-transparent hover:text-[#181818] dark:hover:text-neutral-200 dark:hover:bg-transparent dark:hover:border-neutral-200 px-5 py-4 text-white dark:text-[#232323] space-x-3 flex items-center duration-200'>
                <FontAwesomeIcon icon={faGlobe} className='text-xl'/>
                <span>
                    Website
                </span>
            </div>
          </Link>
          <Link href={githubUrl} target='_blank'>
            <div className='w-full rounded-xl bg-[#313237] dark:bg-slate-400 border-2 border-[#313237] hover:bg-transparent hover:text-[#16171B] dark:hover:text-neutral-200 dark:hover:bg-transparent dark:hover:border-neutral-200 px-5 py-4 text-white dark:text-[#232323] space-x-3 flex items-center duration-200'>
                <FontAwesomeIcon icon={faGithub} className='text-xl'/>
                <span>
                    Github
                </span>
            </div>
          </Link>
        </div>
    )
}