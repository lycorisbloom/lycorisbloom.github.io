import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between select-none items-end w-full bg-foreground text-text-light text-text-dark sticky top-0 p-2">
            <p>Placeholder</p>
            <div className="flex flex-row font-kumar gap-8">
                <Link href="#hero">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#resume">Resume</Link>
                {/* to implement */}
                <div className="hamburg hidden">
                    <svg className="hj" height="75" width="75" viewBox="0 0 75 75">
                            <rect className="top" x="15" y="21.75" width="45" height="5"></rect>
                            <rect className="middle" x="15" y="34.1809" width="45" height="5"></rect> 
                            <rect className="bottom" x="15" y="46.6117" width="45" height="5"></rect> 
                        </svg>
                </div>
            </div>
        </div>
    );
}