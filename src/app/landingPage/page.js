import Image from "next/image";
import hero from "/public/hero.gif";
import zigzag from "/public/zigzag.png";

export default function LandingPage() {
  return (
    <section
      id="landing"
      className="
        landing-page
        h-screen
        mt-[-2.5rem] 
        sm:mt-[-4rem]
        px-10
        "
    >
      <Image
        src={zigzag}
        alt="zigzag"
        className="w-[2.5rem] absolute top-20 right-10  sm:w-[4rem] sm:top-32 sm:right-28"
      />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-center items-start">
          <section className="title text-5xl font-gordita-light sm:text-7xl sm:w-2/4">
            <h1>lea</h1>
            <h1>baldevieso</h1>
            <p className="text-xs mt-3 sm:text-base">
              a sydney-based software engineer striving to create meaningful
              experiences through technology
            </p>
          </section>
          <Image
            src={hero}
            alt="woman-working"
            unoptimized="true"
            className="w-[15rem] mt-10 sm:mt-1 sm:w-[20rem]"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
