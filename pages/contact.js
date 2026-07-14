import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-700">Email: <a href="mailto:cypriangesaka718@gmail.com" className="text-brand">cypriangesaka718@gmail.com</a> · Phone: <a href="tel:+254721482046" className="text-brand">+254721482046</a></p>

        <div className="mt-6">
          <h2 className="font-semibold">Send us a message</h2>
          <form
            action="https://formspree.io/f/FORM_ID"
            method="POST"
            className="mt-4 grid gap-4"
          >
            <input name="name" placeholder="Your name" className="border p-3 rounded" required />
            <input name="email" type="email" placeholder="Your email" className="border p-3 rounded" defaultValue="cypriangesaka718@gmail.com" required />
            <input name="phone" placeholder="Phone (optional)" className="border p-3 rounded" defaultValue="+254721482046" />
            <textarea name="message" rows="5" placeholder="Message" className="border p-3 rounded" required />
            <button type="submit" className="px-4 py-3 bg-brand text-white rounded">Send Message</button>
          </form>

          <p className="mt-4 text-xs text-gray-500">Note: replace FORM_ID with your Formspree form id (see README). Alternatively I can wire a serverless email if you provide SMTP details.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
