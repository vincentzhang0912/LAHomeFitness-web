'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Item = { href: string; label: string };
export function SiteNav({ items, className = '' }: { items: Item[]; className?: string }) {
  const pathname = usePathname();
  return <nav aria-label="Main navigation" className={`flex items-center gap-5 text-sm font-medium ${className}`}>
    {items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}
      className={`rounded py-2 underline-offset-8 transition hover:text-teal-700 ${pathname === item.href ? 'text-teal-800 underline decoration-2' : 'text-slate-600'}`}>
      {item.label}
    </Link>)}
  </nav>;
}
