import RoundCheck from "../assets/RoundCheck";
import SecurityCheck from "../assets/SecurityCheck";

const SectionOne = () => {
  return (
    <section className="pt-7 bg-[#181a1b] flex flex-col-reverse lg:grid lg:grid-cols-2  justify-center items-center px-8 lg:px-20 lg:py-16 gap-20">
      <div className="flex flex-col justify-center items-center">
        <div className="inline-block">
          <p className="text-gray-400 flex shadow-lg shadow-white/20 rounded-xl px-2  ">
            <SecurityCheck />
            <span className="text-sm">Customers Needs Above All Else</span>
          </p>
        </div>
        <div className="pt-10 flex flex-col gap-10">
          <h1 className="text-white text-3xl">
            Take Control <br />{" "}
            <span className="text-[#ff5f55]">
              Monitor Usage & Change Filters
            </span>{" "}
            <br /> No Technician Needed
          </h1>
          <p className="text-[#77726a] text-sm">
            We have crafted a product that addresses the real frustrations of a
            customer. The first step is to ensure there are zero service delays.
          </p>
          <div>
            <p className="text-white/60">
              <RoundCheck />
              Smart Water Purifier With Self Servicing Capability
            </p>
            <p className="text-[#77726a] text-sm">
              Say goodbe to the hassel of scheduling a technician for purifier
              maintenance with our self-replacing filters.
            </p>
          </div>
          <div>
            <p className="text-white/60">
              <RoundCheck />
              Compensation For Service Delays
            </p>
            <p className="text-[#77726a] text-sm">
              You are entitled to a compensatio of 1000 Rs/Day if service is
              delayed for more than 24 hours.
            </p>
          </div>
        </div>
        <button className="bg-blue-700 text-white px-7 py-4 mt-10 rounded-full hover:cursor-pointer hover:bg-blue-600">
          Next: Smart Water Conservation
        </button>
      </div>
      <div>
        <img
          className="w-[90%] lg:w-[100%]"
          src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335"
          alt="man drinking water"
        />
      </div>
    </section>
  );
};

export default SectionOne;
