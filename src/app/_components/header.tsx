import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-end w-full bg-blue-200 text-text-dark sticky top-0">
            <p>Placeholder</p>
            <div className="flex flex-row">
                <Link href="#hero">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#resume">Resume</Link>
            </div>
        </div>
    );
}