export const metadata = {
  title: "MonAmiChef – Privacy Policy",
  description: "Privacy policy for the MonAmiChef application",
};

const clauses: Array<{ title: string; content: string }> = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, including your email address, profile details, and nutritional preferences (such as protein targets and dietary restrictions).",
  },
  {
    title: "2. How We Use Your Data",
    content:
      "Your data is used to generate personalized meal plans, calculate macros per serving, and improve our AI's ability to suggest recipes tailored to your lifestyle.",
  },
  {
    title: "3. Local Data Storage",
    content:
      "Certain features, such as the ingredient checklist, are stored locally on your device and may be reset when you close the application.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "5. Your Rights",
    content:
      "You may at any time review, modify, or request the deletion of your personal data stored on MonAmiChef via your profile settings.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy – MonAmiChef</h1>

      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="space-y-6">
        <p>
          MonAmiChef respects your privacy. This policy explains what data we
          collect, how we use it, and your rights.
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
