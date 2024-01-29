import Image from "next/image";
import { Inter } from "next/font/google";
import Switch from "@/components/Switch";
import Profile from "@/components/Profile";
import Links from "@/components/Links";
import LetsConnect from "@/components/LetsConnect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={`w-full min-h-screen grid place-content-center bg-white dark:bg-[#101010] duration-100 ${inter.className}`}
  >
    <Switch/>
    <div className='py-20 md:py-0 w-[50vh] md:w-[43vh] lg:w-[40vh] p-5 flex flex-col justify-center item-center'>
      <Profile/>
      <Links/>
      <LetsConnect/>
    </div>
  </main>
  );
}
