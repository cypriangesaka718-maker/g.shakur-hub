import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6">
        <section className="mt-12 grid gap-8">
          <div className="rounded-lg p-10 bg-gray-50 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold">G.shAkuR Kicks & Jersey Hub</h1>
              <p className="mt-4 text-xl text-gray-700">Fresh Kicks. Authentic Jerseys. One Hub.</p>
              <p className="mt-4 text-gray-600">Premium sneakers and authentic sports jerseys — curated for collectors, players, and fans.</p>
              <div className="mt-6 flex gap-4">
                <a href="/contact" className="px-5 py-3 bg-brand text-white rounded-md">Contact Us</a>
                <a href="#services" className="px-5 py-3 border rounded-md">Our Services</a>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-48 bg-gradient-to-br from-brand to-brand-dark rounded-md flex items-center justify-center text-white">
                <div>
                  <div className="text-2xl font-bold">Logo / Hero Image</div>
                  <div className="text-sm opacity-90 mt-2">Replace with your photos in public/</div>
                </div>
              </div>
            </div>
          </div>

          <section id="services" className="grid gap-6">
            <h2 className="text-2xl font-semibold">What we offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded">
                <h3 className="font-semibold">Sneakers</h3>
                <p className="mt-2 text-gray-600">Latest drops, retro classics, and limited editions — curated for every style.</p>
              </div>
              <div className="p-6 border rounded">
                <h3 className="font-semibold">Jerseys</h3>
                <p className="mt-2 text-gray-600">Official team jerseys and custom name/number printing.</p>
              </div>
              <div className="p-6 border rounded">
                <h3 className="font-semibold">Custom Orders</h3>
                <p className="mt-2 text-gray-600">Personalize sneakers or jerseys—designs, colorways and more.</p>
              </div>
              <div className="p-6 border rounded">
                <h3 className="font-semibold">Authentication</h3>
                <p className="mt-2 text-gray-600">Verification and appraisal for rare or collectible items.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Featured items</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="border rounded p-4">
                <div className="h-36 bg-gray-100 rounded mb-4" />
                <div className="font-semibold">Sample Sneaker</div>
                <div className="text-sm text-gray-600">Limited edition runner — contact to order.</div>
              </div>
              <div className="border rounded p-4">
                <div className="h-36 bg-gray-100 rounded mb-4" />
                <div className="font-semibold">Classic Jersey</div>
                <div className="text-sm text-gray-600">Official team jersey with customization available.</div>
              </div>
              <div className="border rounded p-4">
                <div className="h-36 bg-gray-100 rounded mb-4" />
                <div className="font-semibold">Custom Design</div>
                <div className="text-sm text-gray-600">Work with us to create a one-off piece.</div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
