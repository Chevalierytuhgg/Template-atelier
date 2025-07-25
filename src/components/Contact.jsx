import data from '../content/global.json';
import socials from '../content/socials.json';

export default function Contact() {
  return (
    <section className="py-12 bg-white px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
      <p className="mb-2">📍 {data.address}</p>
      <p className="mb-2">📅 {data.openingHours}</p>
      <p className="mb-4">📞 {data.phone}</p>

      <div className="flex justify-center gap-4">
        <a href={socials.whatsapp} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded">
          WhatsApp
        </a>
        <a href={socials.instagram} target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded">
          Instagram
        </a>
        <a href={socials.facebook} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded">
          Facebook
        </a>
        <a href={`tel:${data.phone}`} className="bg-gray-700 text-white px-4 py-2 rounded">
          Appeler
        </a>
      </div>
    </section>
  );
}