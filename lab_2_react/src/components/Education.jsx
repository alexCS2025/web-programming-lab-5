function Education() {
    return (
        <section className="flex-1 bg-[var(--bg-education)] text-[var(--text-main)] p-8 border-4 border-[var(--border-lime)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] shadow-[0_0_0_transparent] hover:shadow-[0.5rem_0.5rem_0_var(--shadow-lime)]">
            <h2 className="text-3xl font-black mb-4 uppercase text-[var(--text-edu-title)]">Освіта</h2>
            <h3 id="education_degree" className="text-2xl font-bold mb-2 text-[var(--text-accent-lime)]">Бакалавр</h3>
            <p className="text-xl font-semibold">
                Національний університет "Львівська політехніка", 
                спеціальність F5 "Кібербезпека", 2025-2029
            </p>
        </section>
    );
}

export default Education;