import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--bg-main)]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-lg bg-[var(--bg-header)] text-[var(--text-main)] p-8 border-4 border-[var(--border-lime)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-3xl font-black text-[var(--text-accent-orange)] hover:text-[var(--text-accent-lime)] transition-colors leading-none cursor-pointer"
          aria-label="Закрити"
        >
          &times;
        </button>

        <h2 className="text-3xl font-black uppercase text-[var(--text-accent-lime)] mb-6">
          Зворотний зв'язок
        </h2>

        {/* Форма Formspree */}
        <form
          action="https://formspree.io/f/maeelyre"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-bold uppercase text-[var(--text-accent-lime)]">
              Ім'я
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-[var(--bg-main)] border-2 border-[var(--border-lime)] p-3 text-[var(--text-main)] font-semibold focus:outline-none focus:border-[var(--border-orange)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-bold uppercase text-[var(--text-accent-lime)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[var(--bg-main)] border-2 border-[var(--border-lime)] p-3 text-[var(--text-main)] font-semibold focus:outline-none focus:border-[var(--border-orange)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-bold uppercase text-[var(--text-accent-lime)]">
              Номер телефону
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-[var(--bg-main)] border-2 border-[var(--border-lime)] p-3 text-[var(--text-main)] font-semibold focus:outline-none focus:border-[var(--border-orange)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-bold uppercase text-[var(--text-accent-lime)]">
              Повідомлення
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="bg-[var(--bg-main)] border-2 border-[var(--border-lime)] p-3 text-[var(--text-main)] font-semibold focus:outline-none focus:border-[var(--border-orange)] transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[var(--bg-education)] text-[var(--text-main)] font-black uppercase text-lg p-3 border-4 border-[var(--border-lime)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.4rem_0.4rem_0_var(--shadow-lime)] active:translate-y-0 active:shadow-none"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;