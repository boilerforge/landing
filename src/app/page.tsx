import {
  Zap,
  Shield,
  CreditCard,
  Database,
  Layout,
  Moon,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Github,
  Twitter,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">BoilerForge</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Now available
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Ship Your SaaS in{" "}
            <span className="text-orange-500">Days</span>, Not Months
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Stop rebuilding authentication, payments, and dashboards from
            scratch. Get a production-ready Next.js SaaS starter and focus on
            what makes your product unique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Get the Starter Kit
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/boilerforge/nextjs-saas-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-lg border border-zinc-700 px-8 py-4 text-lg font-semibold text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="py-12 border-y border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 mb-8">
            Built with the modern stack you already love
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-zinc-400">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="font-medium">Next.js 15</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">TS</span>
              <span className="font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              <span className="font-medium">Prisma</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6" />
              <span className="font-medium">Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-medium">NextAuth.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="h-6 w-6" />
              <span className="font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              No more stitching together tutorials. Get a complete, tested
              foundation that works out of the box.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Authentication",
                description:
                  "Email/password + OAuth (Google, GitHub) with NextAuth.js. Secure sessions, password hashing, and account management built-in.",
              },
              {
                icon: CreditCard,
                title: "Stripe Payments",
                description:
                  "Subscription billing with checkout, webhooks, and customer portal. Handle upgrades, downgrades, and cancellations.",
              },
              {
                icon: Database,
                title: "Database Ready",
                description:
                  "Prisma ORM with SQLite for development, PostgreSQL for production. Type-safe queries and easy migrations.",
              },
              {
                icon: Layout,
                title: "Dashboard UI",
                description:
                  "Beautiful, responsive dashboard with sidebar navigation, user menu, and settings pages. Dark mode included.",
              },
              {
                icon: Rocket,
                title: "Landing Page",
                description:
                  "Conversion-optimized marketing page with hero, features, pricing, and FAQ sections. Ready to customize.",
              },
              {
                icon: Moon,
                title: "Dark Mode",
                description:
                  "System preference detection with manual toggle. Consistent theming across all components.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Security-First Architecture
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                Built by developers who understand security. Every line of code
                has been reviewed for vulnerabilities.
              </p>
              <ul className="space-y-4">
                {[
                  "CSRF protection on all forms",
                  "Secure HTTP headers (X-Frame-Options, CSP)",
                  "bcrypt password hashing with configurable rounds",
                  "Session timeout and refresh policies",
                  "Input validation and sanitization",
                  "SQL injection prevention via Prisma",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2">next.config.ts</span>
              </div>
              <pre className="text-zinc-400 overflow-x-auto">
                <code>{`async headers() {
  return [{
    source: "/:path*",
    headers: [
      { key: "X-Frame-Options", 
        value: "DENY" },
      { key: "X-Content-Type-Options", 
        value: "nosniff" },
      { key: "X-XSS-Protection", 
        value: "1; mode=block" },
    ],
  }];
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-lg text-zinc-400 mb-12">
            Pay once, own forever. No subscriptions, no recurring fees.
          </p>
          <div className="rounded-2xl border-2 border-orange-500 bg-zinc-900 p-8 sm:p-12">
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl font-bold">$49</span>
              <span className="text-zinc-400 ml-2">one-time</span>
            </div>
            <p className="text-zinc-400 mb-8">
              Full source code access with lifetime updates
            </p>
            <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
              {[
                "Complete Next.js 15 SaaS codebase",
                "Authentication (email + OAuth)",
                "Stripe subscriptions & webhooks",
                "Dashboard with user settings",
                "Private GitHub repo access",
                "Lifetime updates included",
                "Discord community access",
                "Commercial license",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Get Instant Access
            </a>
            <p className="text-sm text-zinc-500 mt-4">
              Secure payment via Lemon Squeezy. 14-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What do I get when I purchase?",
                a: "You get access to a private GitHub repository containing the complete source code. Clone it, customize it, and deploy it as your own. You also get access to our Discord community for support.",
              },
              {
                q: "Can I use this for multiple projects?",
                a: "Yes! Your license allows unlimited projects for yourself or your company. You cannot resell or redistribute the source code, but you can use it in as many of your own SaaS products as you like.",
              },
              {
                q: "Do I get updates?",
                a: "Yes, lifetime updates are included. When we add new features or fix bugs, you'll have access to the latest code in the GitHub repository. Just pull the changes.",
              },
              {
                q: "What if I need help?",
                a: "Join our Discord community where you can ask questions and get help from other developers. For bugs, open an issue on GitHub and we'll address it.",
              },
              {
                q: "Is there a refund policy?",
                a: "Yes, we offer a 14-day money-back guarantee. If the starter kit doesn't meet your needs, email us for a full refund. No questions asked.",
              },
              {
                q: "What database can I use?",
                a: "The kit uses Prisma ORM, so you can use any database Prisma supports: PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and more. Just change the connection string.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Ship Faster?
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Join developers who chose to build their product instead of
            rebuilding the wheel.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            Get BoilerForge for $49
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="font-semibold">BoilerForge</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a
                href="https://github.com/boilerforge"
                className="hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} BoilerForge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
