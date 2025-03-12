import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel";

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Banner />
      <section className="mx-auto px-6 sm:px-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-center my-4">
          Explore Our Venues
        </h2>
        <CardPanel />
      </section>
    </main>
  );
}
