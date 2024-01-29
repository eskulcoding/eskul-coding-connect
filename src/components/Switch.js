import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Switch () {
    const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if(theme === "dark") {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])

    useEffect(() => {
        if(isDark !== null) {
            if(isDark) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark")
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light")
            }
        }
    }, [isDark])

    return (
        <div className="absolute right-6 md:right-28 top-6 md:top-10 text-xl">
            <button className="w-12 h-12 grid place-content-center border border-[#181818] bg-transparent hover:bg-[#181818] dark:border-neutral-200 dark:hover:bg-neutral-200 rounded-lg group duration-200" onClick={() => setIsDark(!isDark)}>
                <FontAwesomeIcon icon={faMoon} className="text-[#181818] group-hover:text-neutral-100 hover:-rotate-[30deg] duration-200 dark:hidden"/>
                <FontAwesomeIcon icon={faSun} className="text-neutral-200 group-hover:text-orange-500 duration-200 hover:rotate-[30deg] hidden dark:inline-block"/>
            </button>
        </div>
    )
}