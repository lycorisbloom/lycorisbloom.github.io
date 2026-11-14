import Link from "next/link";

// TODO: might need to move to page.tsx bc it needs a state of selected or not for an overlay

export default function Header() {
    return (
        <div className="flex flex-row justify-between select-none items-end w-full bg-foreground text-text-light fixed top-0 p-2">
            <p>Placeholder</p>
            <div className="font-kumar">
                <div className="hidden md:block">
                    <div className="flex flex-row gap-8">
                        <Link href="#hero">About</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#resume">Resume</Link>
                    </div>
                </div>
                <div className="hamburg">
                    <svg className="hj fill-text-light md:hidden" height="40" width="40" viewBox="0 0 60 60">
                        <rect className="top" x="15" y="21.75" width="30" height="5"></rect>
                        <rect className="middle" x="15" y="34.1809" width="30" height="5"></rect>
                        <rect className="bottom" x="15" y="46.6117" width="30" height="5"></rect>
                    </svg>
                </div>
            </div>
        </div>
    );
}