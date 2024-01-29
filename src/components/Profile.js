import { faMicrochip, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Profile() {
    return (
        <div className='w-full flex flex-col items-center space-y-5 text-center mb-10'>
          <div className='w-24 h-24 rounded-full cursor-pointer relative overflow-hidden bg-[#16171B] dark:bg-white duration-200'>
            <Image src={"/img/logo-0.jpg"} width={200} height={200} alt="eskul coding sma perguruan buddhi" layout="responsive"/>
          </div>
          <div className='grid dark:text-neutral-200 duration-200'>
            <div className='flex space-x-2 items-center justify-center'>
              <span className='text-2xl font-bold'>Eskul Coding SMA Buddhi</span>
              <FontAwesomeIcon icon={faMicrochip} className='text-orange-400 text-2xl cursor-pointer'/>
            </div>
            <span>Coding extracurricular at Buddhi College High School</span>
          </div>
        </div>
    )
}