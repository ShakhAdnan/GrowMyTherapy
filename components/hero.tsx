"use client";

export default function Hero() {
  return (
    <section className="bg-[#f6f3ec] py-10 relative page-section vertical-alignment--middle section-height--medium pt-20" id="hero">
      <div className="content-wrapper relative rounded overflow-hidden pl-[4vw] pr-[4vw] pt-[6.6vh] pb-[6.6vh] max-w-full">
        {/* Background Video */}
        <video
          className="w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/heroBg.mp4" type="video/mp4" />
          <p className="text-white">
            Video failed to load. Check console for errors or ensure
            /assets/heroBg.mp4 exists in public folder.
          </p>
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-4xl md:text-6xl text-white font-serif mt-2 mb-6">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h2>
          <p className="text-white text-base md:text-lg font-light mt-4 max-w-xl">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and most U.S. states through PSYPACT participation.
          </p>
          <a
            href="#contact"
            className="mt-6 px-10 py-10 rounded-full text-md tracking-wide text-white bg-[#94b0b0] hover:bg-[#7f9494] transition"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
