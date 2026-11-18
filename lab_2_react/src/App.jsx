import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 flex flex-col bg-[var(--bg-main)] text-[var(--text-main)]">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex flex-col w-full p-8 gap-8 flex-grow">
        <AboutMe />
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <Skills />
          <Education />
        </div>
        <Reviews />
      </main>

      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;