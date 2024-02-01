import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <header>
                <title>Page not found</title>
            </header>
            <div className="w-full min-h-screen flex items-center justify-center text-center">
                <div className="w-[80%] lg:w-[30%] flex flex-col">
                    <h1 className="text-[100px]">404</h1>
                    <span>
                        The page you are looking for may have been deleted or temporarily archived for the development process <Link href={"/"} className="underline hover:text-neutral-400 duration-200">Go to homepage</Link>
                    </span>
                </div>
            </div>
        </>
    )
}