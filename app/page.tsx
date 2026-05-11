export default function Home() {
  const checks = [
    "Unused CSS detection",
    "Oversized image analysis",
    "Blocking script identification",
    "Render-blocking resource audit",
    "Liquid template performance scan",
    "Actionable fix recommendations",
  ];

  const faqs = [
    {
      q: "What file types can I upload?",
      a: "You can upload your Shopify theme as a ZIP file containing .liquid, .css, .js, and asset files. The scanner analyzes all supported file types automatically.",
    },
    {
      q: "How accurate is the performance scoring?",
      a: "Our static analysis engine checks against Shopify performance best practices and common bottlenecks. Scores correlate strongly with real-world Core Web Vitals improvements.",
    },
    {
      q: "Do I need a Shopify store to use this?",
      a: "No. You just need your theme files. Export your theme from the Shopify admin, upload the ZIP, and get your report instantly.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Performance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Scan Shopify Themes for{" "}
          <span className="text-[#58a6ff]">Speed Killers</span>{" "}
          Before Launch
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your theme ZIP and get a detailed report on unused CSS, oversized images, blocking scripts, and exactly how to fix each issue.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
          {checks.map((c) => (
            <div key={c} className="flex items-start gap-2 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
              <span className="text-[#3fb950] mt-0.5 text-base">✓</span>
              <span className="text-sm text-[#c9d1d9]">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {["Unlimited theme scans", "Full performance reports", "Fix recommendations", "Priority support", "New checks as added"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl px-6 py-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Shopify Theme Speed Scanner. All rights reserved.
      </footer>
    </main>
  );
}
