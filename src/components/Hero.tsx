const Hero = () => {
  return (
    <section className="bg-[#16162e] px-8 py-7 grid lg:grid-cols-2 lg:grid-rows-1 gap-20  grid-rows-2 lg:px-20 lg:py-16">
      <div className="lg:grid-flow-col grid-flow-row ">
        <div className="flex justify-center items-center">
          <img
            src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
            alt="man's image"
          />
        </div>
      </div>
      <div className="lg:grid-flow-col grid-flow-row ">
        <div className="flex items-center justify-center flex-col gap-8 pt-6">
          <h3 className="text-5xl text-white text-center">
            Gauge Water Purifier{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a42147] to-[#903803]">
              Puts An End{" "}
            </span>
            To RO Service Pain
          </h3>
          <p className="text-gray-500  px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center font-small text-base  max-w-2xl">
            Fully automaic wter purifier provides the highest water savings
            while ensuring a seamless seerice experience.
          </p>
          <button className="bg-blue-700 text-white px-4 py-3 rounded-3xl hover:cursor-pointer hover:bg-blue-600">
            Take a product Tour
          </button>
          <p className="text-gray-400  px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center font-small text-base  max-w-2xl">
            Experience Convenience Linke Never Before With Our Smart Water
            Purifier
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
