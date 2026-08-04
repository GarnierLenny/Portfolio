import Link from "next/link";

export const metadata = {
  title: "Surf – Support",
  description: "Help and contact for the Surf app: urge surfing in 90 seconds.",
};

const faqs: Array<{ q: string; a: string }> = [
  {
    q: "What is Surf?",
    a: "Surf turns urge surfing into something you can do in the moment. When a craving hits, you open the app, tap once, and ride a single wave for 90 seconds while it rises and passes. It is built on Mindfulness-Based Relapse Prevention.",
  },
  {
    q: "Is it really free?",
    a: "Yes. The help is free forever and never behind a paywall. If Surf helps and you want to support a solo developer, you can leave an optional tip. That is the only thing you can pay for, and you never have to.",
  },
  {
    q: "What happens to my data?",
    a: "Nothing you enter ever leaves your phone. No account, no cloud, no tracking, no ads. Surf works fully offline.",
  },
  {
    q: "Is Surf medical advice?",
    a: "No. Surf is a self-help tool, not therapy and not a cure. If you are in crisis or in a medical emergency, contact your local emergency services or a professional helpline.",
  },
  {
    q: "How do I get help?",
    a: "Email lenny.garnier00@gmail.com and I will get back to you.",
  },
];

export default function SurfSupportPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Surf – Support</h1>
      <p className="mb-8 text-lg opacity-80">An urge is a wave, not a command.</p>

      <section className="space-y-6">
        <p>
          Need help with Surf, found a bug, or have a question? You are in the
          right place. The fastest way to reach me is by email at{" "}
          <a className="underline" href="mailto:lenny.garnier00@gmail.com">
            lenny.garnier00@gmail.com
          </a>
          .
        </p>

        {faqs.map((faq, index) => (
          <div className="space-y-2" key={index}>
            <h2 className="text-xl font-semibold mt-6">{faq.q}</h2>
            <p>{faq.a}</p>
          </div>
        ))}

        <div className="pt-6 border-t mt-8 flex gap-6">
          <Link className="underline" href="/apps/surf/privacy">
            Privacy Policy
          </Link>
          <Link className="underline" href="/apps/surf/terms">
            Terms of Service
          </Link>
        </div>
      </section>
    </main>
  );
}
