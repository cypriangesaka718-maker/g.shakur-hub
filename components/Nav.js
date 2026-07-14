export default function Nav() {
  return (
    <nav className="max-w-5xl mx-auto p-6 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-900">G.shAkuR Kicks & Jersey Hub</div>
      <ul className="flex gap-6 text-sm">
        <li><a href="/" className="hover:text-brand">Home</a></li>
        <li><a href="/about" className="hover:text-brand">About</a></li>
        <li><a href="/contact" className="hover:text-brand">Contact</a></li>
      </ul>
    </nav>
  )
}
