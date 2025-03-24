import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 bg-[var(--bg-primary)]">
            <p className="text-sm">
                © 2025 by <Link href="https://github.com/br-iscool/" target="_blank">Brian Deng.</Link> All rights reserved.
            </p>
        </footer>
    );
}