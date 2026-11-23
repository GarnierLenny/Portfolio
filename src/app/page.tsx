// The home page is under maintenance while Lenny redoes the portfolio (his call, 23 Nov). The old page is in git:
// `git show 63dffd4:src/app/page.tsx`. Every other page (Crosswise, the apps, the teachers page) still works.
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh flex items-center px-6 py-16">
      <div className="mx-auto w-full max-w-md flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-fog">Under maintenance</p>
        <h1 className="text-4xl font-bold leading-tight text-balance">Lenny Garnier</h1>
        <p className="text-lg text-fog">
          I&apos;m rebuilding this site. Back soon.
        </p>
        <p className="text-lg text-fog">
          In the meantime, try{" "}
          <Link href="/crosswise" className="text-lagoon underline underline-offset-4 hover:opacity-80">
            Crosswise
          </Link>
          : cross two worlds and get app ideas AI wouldn&apos;t give you.
        </p>
      </div>
    </main>
  );
}
