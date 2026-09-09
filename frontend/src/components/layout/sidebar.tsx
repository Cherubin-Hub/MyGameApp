'use client' // Required if we use React hooks (like useState) for collapsing later
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col">
            <nav className="flex flex-col gap-4">
                <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
                    Home
                </Link>
                <Link href="/dashboard/settings" className="hover:bg-gray-700 p-2 rounded">
                    Settings
                </Link>
            </nav>
        </aside>
    );
};