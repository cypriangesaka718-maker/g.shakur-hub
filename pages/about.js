import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold">About G.shAkuR Kicks & Jersey Hub</h1>
        <p className="mt-4 text-gray-700">We curate and sell premium sneakers and authentic sports jerseys. Whether you're a collector or a fan, we source top-quality items and offer custom printing and authentication services.</p>

        <h2 className="mt-8 text-2xl font-semibold">Why choose us</h2>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Curated selection of sneakers and jerseys</li>
          <li>Custom printing and personalization</li>
          <li>Authentication for rare items</li>
          <li>Friendly local support — email or call us anytime</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
