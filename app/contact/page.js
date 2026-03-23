"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message ❌");
    }
  };

  return (
   <>
   <Navbar/>
    <section className="relative min-h-screen flex items-center  text-white overflow-hidden sm:mt-20 mt-32">

      <div className="relative z-10 max-w-6xl mx-auto px-6  pb-12 grid md:grid-cols-2 sm:gap-16 gap-4 items-center">

        <div>
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Let’s Build Something
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Get In Touch.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Drop a note with any website feedback or career opportunities, or just say hi! Where are you from? 😊
          </p>
        
               </div>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 transition"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 transition"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>

            {status && (
              <p className="text-center text-sm text-gray-400 mt-4">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}