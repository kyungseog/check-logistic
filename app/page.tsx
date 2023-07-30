import { Hero } from "@components";

export default async function Home() {
  const datas = await fetch("./api/gsapi");
  console.log(datas.json());

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <p>거래선별 현황</p>
        </div>
      </div>
    </main>
  );
}
