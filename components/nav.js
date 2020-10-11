import Link from 'next/link'
import navStyle from '../styles/nav.module.css'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'Services' },
  { href: 'https://nextjs.org/docs', label: 'About' },
  { href: 'https://blink-ai.blogspot.com/', label: 'Blog' },
  { href: 'https://blink-ai.blogspot.com/', label: 'Contact' }
]

export default function Nav() {
  return (
    <nav className={navStyle.nav}>
      <Link href="/">
        <a className="text-3xl text-gray-900 no-underline">Blink</a>
      </Link>
      <ul className="flex items-center">
        <ul className="flex items-center space-x-12">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
