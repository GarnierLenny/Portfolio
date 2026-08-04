export const metadata = {
  title: "Surf – Privacy Policy",
  description: "Privacy policy for the Surf application",
};

const clauses: Array<{ title: string; content: string }> = [
  {
    title: "1. The short version",
    content:
      "Surf is local-first. Everything you do in the app stays on your device. We do not have an account system, we do not run a server that stores your data, and we cannot see what you enter. There is nothing to hack from us, because we hold nothing.",
  },
  {
    title: "2. Data stored on your device",
    content:
      "Your waves, intensity ratings, outcomes, notes to your future self, your reasons, chosen urges, timing preferences, and app settings are stored only in local storage on your phone. This data never leaves your device and is deleted if you delete the app.",
  },
  {
    title: "3. No tracking, no analytics, no ads",
    content:
      "Surf contains no third-party analytics, no advertising, no tracking pixels, and no behavioral profiling. We do not build a profile of you and we do not sell or share any data, because we never receive any.",
  },
  {
    title: "4. Optional purchases",
    content:
      "The core of Surf is free forever. If you choose to leave a tip or become a supporter, the purchase is handled entirely by the App Store or Google Play. Payment processing runs through RevenueCat and the store; they receive an anonymous purchase receipt and app-generated identifier to validate the transaction. We never receive or store your name, email, or payment details.",
  },
  {
    title: "5. Notifications",
    content:
      "If you enable reminders, notifications are scheduled locally on your device. Enabling them is always optional and can be turned off at any time in your system settings.",
  },
  {
    title: "6. Children",
    content:
      "Surf is not directed at children and is rated for a mature audience. It is intended for adults working with their own urges and habits.",
  },
  {
    title: "7. Changes to this policy",
    content:
      "If this policy changes, the updated version will be posted on this page with a new date. Material changes will be reflected in the app where appropriate.",
  },
  {
    title: "8. Contact",
    content:
      "Questions about privacy? Reach out at lenny.garnier00@gmail.com.",
  },
];

export default function SurfPrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy – Surf</h1>

      <p className="mb-4">Last updated: August 2026</p>

      <section className="space-y-6">
        <p>
          Surf helps you ride out an urge instead of fighting it or giving in.
          It is built on a simple privacy promise: what you go through is yours
          alone. This policy explains exactly what that means.
        </p>

        {clauses.map((clause, index) => (
          <div className="space-y-2" key={index}>
            <h2 className="text-xl font-semibold mt-6">{clause.title}</h2>
            <p>{clause.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
