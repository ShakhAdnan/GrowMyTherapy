// components/ContentSection.tsx
const ContentSection = () => {
  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-16 text-center bg-[#f6f3ec]">
      <h2 className="text-4xl md:text-5xl font-light text-[#40403e] leading-snug tracking-tight">
        <span className="block">
          Therapy can be a space where you invest in yourself—
        </span>
        <span className="block mt-2">
          <span className="font-normal">
            one of the highest forms of self-care.
          </span>
        </span>
      </h2>

      <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-[#40403e] font-light leading-relaxed">
        You may be led to therapy by anxiety, depression, relationship stress,
        past or recent trauma, grief and loss, self-esteem issues, or challenges
        with family, parenting, or parental relationships. Whatever the source
        of your stress, you don’t have to face it alone. Therapy offers you the
        time and space to work toward wellness and peace.
      </p>

      <div className="mt-12 border-t-[2px] border-[#d8d4ca] w-full"></div>
    </section>
  );
};

export default ContentSection;
