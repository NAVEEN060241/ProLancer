import heroImage from "../assets/hero.svg";
export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-auto mt-16 grid grid-cols-2 gap-8">
        {/* Hero Left Container */}
        <div className="flex flex-col justify-center items-center gap-10 text-center">
          {/* Hero Title */}
          <h1 className="text-4xl font-semibold">
          Your Go-To Freelance Wizard
          </h1>
          <h1 className="text-xl font-medium">
          Turning your &apos;to-dos&apos; into &apos;ta-das&apos; with ease.
          </h1>
          {/* Hero Button */}
          <button
            type="button"
            className="getStartedbtn"
          >
            Get Started
          </button>
        </div>
        {/* Hero Right Container - Hero Image */}
        <div>
          <img src={heroImage} alt="HeroImage" width={600} />
        </div>
      </div>
    </>
  );
}
