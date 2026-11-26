// The home page is a stopgap while Lenny redoes the portfolio (his call, 23 Nov): his name and his apps, hung on a
// drying cord over a soft warm backdrop. The old page is in git: `git show 63dffd4:src/app/page.tsx`.
// Every other page still works.
import Clothesline from "./clothesline";

export default function Home() {
  return (
    <main className="cozy min-h-svh flex items-center overflow-x-clip px-6 py-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">Lenny Garnier</h1>
          <p className="text-lg md:text-xl text-fog">Rebuilding this website. In the meantime, have fun with these</p>
        </div>
        <Clothesline />
      </div>
    </main>
  );
}
