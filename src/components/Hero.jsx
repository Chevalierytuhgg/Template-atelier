import data from '../content/global.json';

export default function Hero() {
  return (
    <section className="bg-gray-100 text-center py-12">
      <h1 className="text-4xl font-bold">{data.atelierName}</h1>
      <p className="text-xl mt-2">{data.tagline}</p>
      <p className="mt-4 max-w-xl mx-auto">{data.description}</p>
      <a href="#services" className="inline-block mt-6 bg-pink-600 text-white px-6 py-2 rounded-full">
        Voir nos services
      </a>
    </section>
  );
}