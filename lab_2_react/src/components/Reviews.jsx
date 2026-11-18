import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/14/comments`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
      })
  }, []);

    return (
        <section className="w-full bg-[var(--bg-aboutme)] text-[var(--text-main)] p-8 border-4 border-[var(--border-lime)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] shadow-[0_0_0_transparent] hover:shadow-[0.5rem_0.5rem_0_var(--shadow-lime)]">
            <h2 className="text-3xl font-black mb-6 uppercase text-[var(--text-accent-lime)]">
                Відгуки попередніх роботодавців
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {comments.map((comment) => (
            <div
                key={comment.id}
                className="p-6 bg-[var(--bg-reviews-card)] text-[var(--text-main)] border-4 border-[var(--border-lime)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] shadow-[0_0_0_transparent] hover:shadow-[0.5rem_0.5rem_0_var(--shadow-lime)] flex flex-col justify-between"
            >
            <div>
              <h3 className="text-xl font-bold text-[var(--text-accent-lime)] mb-1 capitalize">
                {comment.name}
              </h3>
              <p className="text-sm text-[var(--text-main)]/80 mb-4 underline decoration-[var(--border-orange)]">
                {comment.email}
              </p>
              <p className="text-base font-semibold leading-relaxed">
                {comment.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;