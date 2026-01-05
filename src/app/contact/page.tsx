"use client"
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { primaryDark } from "@/constants/colors";
import BackgroundLines from "@/components/BackgroundLines";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Set redirect URL for Web3Forms
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}/contact?success=true`);
    }
  }, []);

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'true') {
      setResult("Success! Your message has been sent.");
      // Clear the form if it exists
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (success === 'false') {
      setResult("Error: Something went wrong. Please try again.");
    }
  }, [searchParams]);

  return (
    <main className="relative min-h-screen flex items-start justify-center pt-8 md:pt-32 pb-16">
      <BackgroundLines />

      <div className="relative w-full max-w-3xl flex flex-col gap-10 px-6 pop-up">
        <div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            style={{ color: primaryDark }}
          >
            Get In Touch
          </h1>
          <p className="text-xl font-medium text-(--text) leading-relaxed">
            Have a question or want to work together? Send me a message!
          </p>
          <p>
            Or email me at <a href="mailto:jessanderrson@gmail.com">jessanderrson@gmail.com</a>
          </p>
        </div>

        <form
          ref={formRef}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="access_key" value="9001825e-2cd5-460c-947d-38bb5a70351d" />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />
          <input type="hidden" name="from_name" value="Jess Anderson Portfolio" />
          {redirectUrl && (
            <input 
              type="hidden" 
              name="redirect" 
              value={redirectUrl} 
            />
          )}

          <div className="space-y-2">
            <label 
              htmlFor="name" 
              className="block text-lg font-semibold text-(--text)"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-5 py-4 rounded-2xl border border-(--primary) bg-(--primary-light)/40 text-(--text) placeholder:text-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent backdrop-blur transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-lg font-semibold text-(--text)"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-5 py-4 rounded-2xl border border-(--primary) bg-(--primary-light)/40 text-(--text) placeholder:text-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent backdrop-blur transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="message" 
              className="block text-lg font-semibold text-(--text)"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-5 py-4 rounded-2xl border border-(--primary) bg-(--primary-light)/40 text-(--text) placeholder:text-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent backdrop-blur transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-2xl border border-(--primary) bg-(--primary) text-white font-semibold text-lg hover:bg-(--primary-dark) hover:border-(--primary-dark) transition-all shadow-sm hover:shadow-md"
          >
            Send Message
          </button>

          {result && (
            <div
              className={`px-5 py-4 rounded-2xl border ${
                result.startsWith("Success")
                  ? "border-green-500 bg-green-50 text-green-800"
                  : "border-red-500 bg-red-50 text-red-800"
              }`}
            >
              <p className="font-medium">{result}</p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}