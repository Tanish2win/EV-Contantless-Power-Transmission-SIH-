import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
title: 'Line Following Car Lab',
description: 'Draw tracks, tune PID, and test your line follower in the browser.'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen">
<div className="mx-auto max-w-6xl p-4 md:p-8">
<header className="flex items-center gap-3 mb-6">
<img src="/icon.svg" alt="icon" className="w-8 h-8" />
<h1 className="text-2xl md:text-3xl font-semibold">Line Following Car Lab</h1>
</header>
{children}
<footer className="text-xs text-gray-500 mt-10">Built with Next.js & Tailwind. Deploy on Vercel.</footer>
</div>
</body>
</html>
);
}
