import Image from "next/image"
import { useEffect, useRef } from "react"

function LoadingScreen() {
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        function handler () {
            setTimeout(() => {
                loadingScreenRef.current.style.opacity = 0;
                setTimeout(() => {
                    loadingScreenRef.current.style.display = 'none';
                }, 200)
            }, 1000)
        };

        window.addEventListener("load", handler());

        return () => {
            window.removeEventListener("load", handler());
        }
    }, [loadingScreenRef.current])

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white top-0 left-0 fixed z-[90] duration-200" ref={loadingScreenRef}>
            <div className="space-y-2 w-[20%] flex flex-col items-center">
                <div className="w-16">
                    <Image src={"/assets/loader.gif"} width={200} height={200} layout="responsive" alt="loader"/>
                </div>
                <p className="text-center">
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default LoadingScreen