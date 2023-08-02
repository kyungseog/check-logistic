import { Hero } from "@components";
import getAllUsers from "@lib/getAllUsers";
import getGoogleSheets from "@lib/getGoogleSheets";
import { SheetData, User } from "@types";
import Link from "next/link";

export default async function Home() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const sheetData: Promise<void> = getGoogleSheets();
  const datas = await sheetData;
  console.log(datas);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <p>거래선별 현황</p>
          <section>
            <h2>
              <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map((user) => {
              return (
                <>
                  <p key={user.id}>
                    <Link href={``}>{user.name}</Link>
                  </p>
                  <br />
                </>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
