const services = [
  {
    title: "Anxiety & Stress Management ",
    image: "/assets/service1.jpg",
    description:
      "Life can often feel overwhelming—mentally, emotionally, and physically. Through personalized strategies like mindfulness, cognitive reframing, and grounding exercises, we help you manage anxious thoughts and reduce stress so you can regain control and feel more at ease.",
  },
  {
    title: "Relationship Counseling",
    image: "/assets/service2.jpg",
    description:
      "Healthy relationships take work—but they shouldn’t feel impossible. Whether you're navigating conflict, recovering from betrayal, or simply feeling distant, we offer guidance to improve communication, restore trust, and rebuild meaningful connection between partners, families, or friends.",
  },
  {
    title: "Trauma Recovery",
    image: "/assets/service3.jpg",
    description:
      "Trauma can leave lasting effects on how we think, feel, and relate to others. Our trauma-informed approach gently helps you process difficult experiences at your pace. We work to rebuild safety, resilience, and emotional strength—so you can move forward with confidence.",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#f6f3ec] w-full px-4 py-20" id="services">
      <div className="max-w-[1520px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#2c2c2c] font-light mb-16">
          Areas of Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-[374px] h-[375px] rounded-full overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-[#2c2c2c] mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#3b3b3b] text-base font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
