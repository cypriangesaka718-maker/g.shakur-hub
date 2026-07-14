export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-8 pb-12">
      <div className="max-w-5xl mx-auto text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <div className="font-semibold">G.shAkuR Kicks & Jersey Hub</div>
          <div>Email: <a href="mailto:cypriangesaka718@gmail.com" className="text-brand">cypriangesaka718@gmail.com</a></div>
          <div>Phone: <a href="tel:+254721482046" className="text-brand">+254721482046</a></div>
        </div>
        <div>
          <div>© " + new Date().getFullYear() + " G.shAkuR Kicks & Jersey Hub</div>
          <div className="mt-2 text-xs text-gray-500">Built with Next.js + Tailwind</div>
        </div>
      </div>
    </footer>
  )
}
