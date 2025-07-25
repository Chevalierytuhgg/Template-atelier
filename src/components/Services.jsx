import services from '../content/services.json';

export default function Services() {
  return (
    <section id="services" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded shadow">
            <img src={`/images/${service.image}`} alt={service.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}