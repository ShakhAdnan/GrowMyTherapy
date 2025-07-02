export default function FeeSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center" id="fee">
      {/* Fee Section */}
      <div
        className="bg-[#94b0b0] text-black flex flex-col items-center justify-center text-center px-4"
        style={{ width: "1520.8px", height: "419.18px" }}
      >
        <h1 className="text-3xl mb-6">Rates and Insurance</h1>
        <p className="text-lg mb-4">Individual Session - $200</p>
        <p className="text-lg mb-8">Couple Session - $240</p>
        <p className="text-lg mb-2">
          I accept both private pay and insurance. I am in-network with BCBS and
          Aetna.
        </p>
        <p className="text-lg max-w-4xl">
          For out-of-network plans, I've partnered with Mentaya using this tool
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>

      {/* Availability Notice */}
      <div
        className="bg-[#f6f3ec] flex items-center justify-center text-center"
        style={{ width: "1520.8px", height: "172px" }}
      >
        <p className="text-black text-2xl font-normal">
          Unable to accept new clients at this time.
        </p>
      </div>

      {/* Quote Section */}
      <div
        className="relative flex items-center justify-center text-center px-4"
        style={{ width: "1520.8px", height: "397.25px" }}
      >
        {/* Background image with 70% opacity */}
        <img
          src="/assets/bg-quote.jpg"
          alt="Ocean quote background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Text */}
        <div className="relative z-10 max-w-4xl text-black">
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            “I have come to believe that caring for myself is not
            self-indulgent.
            <br />
            Caring for myself is an act of survival.”
          </p>
          <p className="mt-4 text-base md:text-lg">— Audre Lorde</p>
        </div>
      </div>
    </section>
  );
}
