function Aboutme() {
    return (
        <section className="w-full bg-[var(--bg-aboutme)] text-[var(--text-main)] p-8 border-4 border-[var(--border-lime)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] shadow-[0_0_0_transparent] hover:shadow-[0.5rem_0.5rem_0_var(--shadow-lime)]">
            <h2 className="text-3xl font-black mb-4 uppercase text-[var(--text-accent-lime)]">Про себе</h2>
            <p className="text-xl leading-relaxed font-medium">
                Студент старших курсів за напрямом "Кібербезпека" з ґрунтовною теоретичною 
                та практичною базою в галузі системного аналізу, безпеки веб-додатків та 
                мережевої інфраструктури. Володію практичними навичками розробки скриптів 
                автоматизації на Python і C#, проведення статистичного моделювання в R та 
                дослідження вразливостей. Маю досвід побудови хмарної інфраструктури з AWS та 
                оптимізації процесів збору й обробки даних. Шукаю позицію спеціаліста з кібербезпеки, 
                де зможу застосувати аналітичне мислення, вміння працювати з комплексними задачами 
                та принести вимірну користь проектам компанії.
            </p>
        </section>
    );
}

export default Aboutme;