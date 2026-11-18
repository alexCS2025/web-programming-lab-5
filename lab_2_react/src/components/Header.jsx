export default function Header({ theme, toggleTheme }){
    return (
        <header className="bg-[var(--bg-header)] text-[var(--text-main)] p-8">
            <div className="flex items-center gap-6 mb-6">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-widest text-[var(--text-accent-lime)]">ОЛЕКСАНДР КУРАХ</h1>
                    <h2 className="text-2xl font-bold mt-1 text-[var(--text-accent-lime)]">Особиста інформація</h2>
                </div>
                <button
                    onClick={toggleTheme}
                    className="bg-[var(--bg-education)] text-[var(--text-main)] border-4 border-[var(--border-lime)] font-black uppercase px-5 py-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0.4rem_0.4rem_0_var(--shadow-lime)] cursor-pointer"
                >
                    {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
                </button>
            </div>
            
            
            <ul className="flex flex-col md:flex-row justify-between text-xl font-bold gap-4 text-[var(--text-main)]">
                <li>Адреса: Чорновола 19, Львів</li>
                <li>Телефон: +380977797744</li>
                <li>E-mail: <a href="mailto:oleksandr.kurakh.kb.2025@lpnu.ua" className="text-[var(--text-accent-lime)] hover:underline decoration-4 underline-offset-4 decoration-[var(--border-orange)]">oleksandr.kurakh.kb.2025@lpnu.ua</a></li>
            </ul>
        </header>
    );
}