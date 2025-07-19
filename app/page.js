import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center
        justify-center">
          <p className="text-2xl font-bold">
            The Best URL Shortener in the Market
          </p>
          <p>
            Make your links more manageable and shareable
          </p>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Vector illustration" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );       
}
