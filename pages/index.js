import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beyond International | Global Sourcing Without Limits</title>
        <meta name="description" content="Beyond International is a global import-export sourcing partner. MOQ from 1 unit, fastest lead times, end-to-end documentation, and doorstep delivery." />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`body { font-family: 'Inter', sans-serif; }`}</style>
      </Head>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Global Sourcing <span className="text-blue-400">Without Limits</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300">
              One unit or one container. From anywhere in the world. Fully documented. Delivered to your doorstep.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
              <a href="#solutions" className="px-8 py-3 rounded-2xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">What We Solve</a>
              <a href="#contact" className="px-8 py-3 rounded-2xl border border-gray-500 hover:border-white transition">Work With Us</a>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Problems We Eliminate</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-gray-800/50 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold">MOQ Restrictions</h3>
                <p className="mt-4 text-gray-300">Need just one unit for testing or replacement? We source from MOQ = 1.</p>
              </div>
              <div className="p-8 bg-gray-800/50 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold">Slow Lead Times</h3>
                <p className="mt-4 text-gray-300">Urgent requirements handled via express air freight with fastest possible turnaround.</p>
              </div>
              <div className="p-8 bg-gray-800/50 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold">Trade Complexity</h3>
                <p className="mt-4 text-gray-300">We manage all export–import documentation, customs, and compliance end to end.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">What We Do For You</h2>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="p-10 bg-gray-900 rounded-2xl">
                <h3 className="text-2xl font-semibold text-blue-400">Global Imports</h3>
                <p className="mt-4 text-gray-300">We source anything you need from anywhere in the world — from one piece to bulk volumes — with optimized logistics.</p>
              </div>
              <div className="p-10 bg-gray-900 rounded-2xl">
                <h3 className="text-2xl font-semibold text-blue-400">Exports From India</h3>
                <p className="mt-4 text-gray-300">We supply overseas customers with any product India can manufacture, ensuring quality, compliance, and reliability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS */}
        <section className="py-24 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Smart Logistics Execution</h2>
            <div className="grid md:grid-cols-2 gap-10 mt-16">
              <div className="p-8 bg-black rounded-2xl">
                <h3 className="text-xl font-semibold">Air Freight</h3>
                <p className="mt-4 text-gray-300">Fastest delivery for time-sensitive, urgent, and critical requirements.</p>
              </div>
              <div className="p-8 bg-black rounded-2xl">
                <h3 className="text-xl font-semibold">Sea Freight</h3>
                <p className="mt-4 text-gray-300">Cost-efficient bulk shipping using LCL or FCL container solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">End-to-End Documentation</h2>
            <p className="mt-6 text-lg text-gray-300">Invoices, packing lists, HS codes, customs clearance, certificates, freight documentation — handled completely by us.</p>
          </div>
        </section>

        {/* CUSTOMER REQUEST */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Send Us Your Requirement Instantly</h2>
            <p className="mt-6 text-center text-gray-300 text-lg">Share a product link, upload photos, or describe what you need. Your request reaches us immediately for fast action.</p>
            <form className="mt-16 grid gap-6 bg-gray-900 p-10 rounded-2xl" action="https://formsubmit.co/info@beyondinternational.com" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_subject" value="New Live Sourcing Requirement" />
              <input type="hidden" name="_captcha" value="false" />

              <input type="text" name="name" placeholder="Your Name" required className="p-4 rounded-xl bg-black border border-gray-700 text-white" />
              <input type="email" name="email" placeholder="Your Email" required className="p-4 rounded-xl bg-black border border-gray-700 text-white" />
              <input type="text" name="product_link" placeholder="Product Link (if any)" className="p-4 rounded-xl bg-black border border-gray-700 text-white" />
              <textarea name="requirement" rows="4" placeholder="Describe your requirement in detail" className="p-4 rounded-xl bg-black border border-gray-700 text-white" />
              <input type="file" name="attachment" className="p-4 rounded-xl bg-black border border-gray-700 text-white" />

              <button type="submit" className="mt-4 px-8 py-4 rounded-2xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">Submit Live Requirement</button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">For urgent needs, your submission can also be instantly shared via WhatsApp or phone.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold">Tell Us What You Need</h2>
            <p className="mt-6 text-gray-300 text-lg">If it exists, we can source it. If it’s from India, we can supply it.</p>
            <a href="mailto:info@beyondinternational.com" className="inline-block mt-10 px-10 py-4 rounded-2xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">Start Sourcing</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-500 text-sm">© Beyond International. Global Sourcing. Doorstep Delivery.</footer>
      </main>
    </>
  )
}
