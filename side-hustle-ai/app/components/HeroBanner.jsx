export default function HeroBanner() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#23C686] via-[#ADEEC5] to-white text-[#1B5E20] pb-28 pt-20  px-6 overflow-hidden">
      {/* Main Content - Shifted Higher */}
      <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
        Build. Hustle. Succeed.
      </h1>
      <p className="text-xl max-w-2xl text-[#202f46] drop-shadow-md font-bold">
        Powered by Artificial Intelligence
      </p>
      <button className="mt-8 px-6 py-3 text-lg font-semibold bg-white text-[#23C686] rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
        Get Started
      </button>
    </section>
  );
}
