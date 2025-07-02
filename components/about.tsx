"use client";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-10 relative" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 pt-28">
        <div className="md:w-1/2 pl-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-[7E7E6B] mb-4 pb-5">
            About Dr. Serena Blake
          </h2>
          <p className="text-gray-600 text-xl md:text-lg leading-relaxed">
            Finding time and opportunities to care for ourselves can be
            incredibly challenging in today's busy and demanding world. I
            believe therapy offers a dedicated space for self-care, providing
            the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals,
            values, and the various elements that contribute to their
            well-being, recognizing that these aspects vary from person to
            person.
          </p>
          <p className="text-gray-600 text-xl md:text-lg leading-relaxed mt-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
          <p className="text-gray-600 text-xl md:text-lg leading-relaxed mt-4">
            My therapeutic approach is primarily psychodynamic and humanistic,
            enriched by influences from positive psychology, existentialism,
            family systems theory, acceptance and commitment concepts, and
            mindfulness practices.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end pr-10">
          <img
            src="/assets/About.png"
            alt="Dr. Serena Blake"
            className="w-[431px] h-[646px] rounded-sm object-cover pr-16"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="border-t-[2px] border-black w-[100%] "></div>
      </div>
    </section>
  );
}
