export const metadata = {
  title: "Surf – Terms of Service",
  description: "Terms of service for the Surf application",
};

const clauses: Array<{ title: string; content: string }> = [
  {
    title: "1. Acceptance",
    content:
      "By downloading or using Surf, you agree to these terms. If you do not agree, please do not use the app.",
  },
  {
    title: "2. What Surf is",
    content:
      "Surf is a self-help tool for urge surfing, a technique from Mindfulness-Based Relapse Prevention. It offers a timed, guided moment to let an urge rise and pass, along with a private local journal of your sessions.",
  },
  {
    title: "3. Not medical advice, not a treatment",
    content:
      "Surf is not a medical device, not therapy, and not a diagnosis, treatment, or cure for any condition, including addiction. It is built on published research about attention and craving, but it makes no promise about your specific results. It is a tool for the moment, not a replacement for professional care.",
  },
  {
    title: "4. If you are in crisis",
    content:
      "If you are in danger, thinking about harming yourself, or in a mental-health or medical emergency, Surf is not the right tool. Contact your local emergency services or a professional helpline immediately.",
  },
  {
    title: "5. Free, and provided as is",
    content:
      "The core of Surf is free forever. The app is provided 'as is', without warranties of any kind. We do not guarantee it will be uninterrupted, error-free, or effective for your situation.",
  },
  {
    title: "6. Optional purchases",
    content:
      "You may choose to leave a tip or become a supporter. These purchases are optional, never gate the core help, and are handled by the App Store or Google Play under their terms. Refunds are subject to the store's policies.",
  },
  {
    title: "7. Limitation of liability",
    content:
      "To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, Surf. You use the app at your own discretion and responsibility.",
  },
  {
    title: "8. Intellectual property",
    content:
      "Surf, its name, design, and content are the property of their author. You may use the app for personal use only and may not copy, resell, or redistribute it.",
  },
  {
    title: "9. Changes",
    content:
      "These terms may be updated over time. The current version will always be posted on this page with its date.",
  },
  {
    title: "10. Contact",
    content:
      "Questions about these terms? Reach out at lenny.garnier00@gmail.com.",
  },
];

export default function SurfTermsPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service – Surf</h1>

      <p className="mb-4">Last updated: August 2026</p>

      <section className="space-y-6">
        <p>
          These terms cover your use of Surf. They are meant to be readable, not
          to trap you: the app is free, private, and honest about what it can and
          cannot do.
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
