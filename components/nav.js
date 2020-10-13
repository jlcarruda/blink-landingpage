import Link from 'next/link'

const links = [
  { href: '#services', label: 'Ferramentas' },
  { href: 'https://nextjs.org/docs', label: 'Preços' },
  { href: 'https://blink-ai.blogspot.com/', label: 'Blog' },
]

export default function Nav() {
  return (
    <nav className="flex justify-between p-8 bg-yolk">
      <Link href="/">
        <a className="text-3xl font-bold text-gray-900 no-underline">Blink</a>
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
