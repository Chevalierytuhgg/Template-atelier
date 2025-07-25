import testimonials from '../content/testimonials.json';

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Elles nous ont fait confiance</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="italic">"{t.text}"</p>
            <p className="text-right mt-2 font-semibold">– {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}