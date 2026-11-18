function Skills() {
    return (
        <section className="flex-1 bg-[var(--bg-skills)] text-[var(--text-skills)] p-8 border-4 border-[var(--border-orange)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] shadow-[0_0_0_transparent] hover:shadow-[0.5rem_0.5rem_0_var(--shadow-orange)]">
            <h2 className="text-3xl font-black mb-4 uppercase">Вміння</h2>
            <ul className="text-xl font-bold list-disc list-inside flex flex-col gap-2">
                <li>Мови: Англійська – B2, Українська – носій</li>
                <li>Вміння працювати з Amazon Web Services</li>
                <li>Нормативно правове забезпечення з кібербезпеки</li>
                <li>Проектування реляційної бази даних</li>
                <li>Дружелюбний, легко працюю у команді</li>
                <li>Маю хист до лідерства</li>
            </ul>
        </section>
    );
}

export default Skills;