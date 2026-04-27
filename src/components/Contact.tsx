import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              We'd Love to <br /> Hear From You
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Whether you want to volunteer, partner with us, ask about donations, or
              just learn more about our community — we welcome your message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-amber-600" size={20} />
                </div>
                <div>
                  <p className="text-stone-900 font-semibold">Email Us</p>
                  <a
                    href="mailto:info@aapswa.org"
                    className="text-amber-600 hover:underline text-sm"
                  >
                    info@aapswa.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-amber-600" size={20} />
                </div>
                <div>
                  <p className="text-stone-900 font-semibold">Call or Text</p>
                  <a
                    href="tel:+12065550000"
                    className="text-amber-600 hover:underline text-sm"
                  >
                    (206) 555-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div>
                  <p className="text-stone-900 font-semibold">Mailing Address</p>
                  <p className="text-stone-500 text-sm">
                    PO Box [XXXX], Lynnwood, WA 98036
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-stone-900 font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-stone-500">
                  Thank you for reaching out. We'll get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-amber-600 hover:underline text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-stone-900 font-bold text-xl mb-6">Send a Message</h3>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Type Here"
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="I'd like to learn more about volunteering / donating / partnering..."
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-stone-900 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
