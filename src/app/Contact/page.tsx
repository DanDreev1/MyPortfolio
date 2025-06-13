'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/xeokgpkb', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });

    const json = await res.json();
    if (json.ok) {
      setStatus('success');
      toast.success('Message sent!');
      form.reset();
    } else {
      setStatus('error');
      toast.error('Something went wrong.');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="py-20 2xl:py-40 px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl 2xl:text-4xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let’s Connect
        </motion.h1>

        <p className="text-gray-700 text-sm 2xl:text-base mb-3">
          Fill out the form or just write me directly:
        </p>
        <a
          href="mailto:daniilandrieievjob@gmail.com"
          className="inline-flex items-center gap-2 text-sm 2xl:text-base text-gray-900 hover:underline font-medium mb-6"
        >
          <Mail size={18} /> daniilandrieievjob@gmail.com
        </a>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-5 rounded-xl shadow-md text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full pl-9 pr-3 py-2 text-sm 2xl:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full pl-9 pr-3 py-2 text-sm 2xl:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full pl-9 pr-3 pt-2 text-sm 2xl:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full py-2 text-sm 2xl:text-base font-semibold text-white rounded-md bg-gradient-to-r from-[#8914ff] to-[#5700c9] hover:opacity-90 transition"
          >
            Send Message
          </motion.button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                className="text-green-600 font-medium text-sm mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✅ Your message has been sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-red-600 font-medium text-sm mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ❌ Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  );
}