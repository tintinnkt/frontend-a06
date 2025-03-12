import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      <Image
        src={"/img/bannerBG.jpg"}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6 sm:px-12">
        <p className="text-4xl font-bold text-shadow-md sm:text-5xl">
          where every event finds its venue
        </p>
        <p className="mt-4 text-lg sm:text-xl max-w-4xl text-shadow-md">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </section>
    </div>
  );
}
