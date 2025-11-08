import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function fetchQuotes() {
      try {
        setLoading(true);
        // Using a public quotes API
        const res = await fetch('https://api.quotable.io/quotes?tags=inspirational|life&limit=5');
        if (!res.ok) throw new Error('Failed to fetch quotes');
        const data = await res.json();
        if (mounted) {
          setQuotes(data.results || []);
        }
      } catch (e) {
        if (mounted) setError('Could not load quotes right now.');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchQuotes();

    const interval = setInterval(fetchQuotes, 30000); // refresh every 30s
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Real-time Inspiration</h2>
        <p className="mt-2 text-gray-600">Short quotes to uplift and motivate during challenging times.</p>

        {loading && (
          <p className="mt-6 text-gray-500">Loading quotes…</p>
        )}
        {error && (
          <p className="mt-6 text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <blockquote key={q._id} className="p-6 bg-white rounded-lg shadow border border-gray-100">
                <p className="text-gray-800">“{q.content}”</p>
                <footer className="mt-3 text-sm text-gray-500">— {q.author}</footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Quotes;
