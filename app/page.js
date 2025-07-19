import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center
        justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="text-center">
            Make your links more manageable and shareable
          </p>
          <div className='flex gap-3 justify-start'>
                <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
                <Link href='/github'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
                </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Vector illustration" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );       
}
