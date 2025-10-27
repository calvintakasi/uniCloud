
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Check, Cloud, ShieldCheck, Server, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

// App Component: University Private Cloud Landing Page
export default function App() {
  const features = [
    {
      title: "Secure Research Storage",
      desc: "Encrypted, access-controlled storage for sensitive research data and collaboration.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Compute",
      desc: "Provision VMs and GPU nodes on demand for simulations, ML training, and analytics.",
      icon: Server,
    },
    {
      title: "Shared Collaboration",
      desc: "Teams, labs, and departments collaborate with fine-grained sharing and versioning.",
      icon: Users,
    },
    {
      title: "Compliance & Audit",
      desc: "Built-in logging, audit trails, and compliance controls for research governance.",
      icon: Check,
    },
  ];

  const pricing = [
    {
      name: "Starter (Dept)",
      price: "Free",
      items: ["50 GB storage", "2 vCPU / 4 GB RAM", "Community support"],
    },
    {
      name: "Research Lab",
      price: "$199 / month",
      items: ["2 TB storage", "8 vCPU / 32 GB RAM", "Priority support"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      items: ["Unlimited projects", "Dedicated hardware", "SLA & training"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 text-white">
              <Cloud className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">UniCloud</h1>
              <p className="text-xs text-slate-500">University Private Cloud</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#features">Features</a>
            <a className="hover:underline" href="#pricing">Pricing</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <Button className="ml-2">Request Demo</Button>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-lg hover:bg-slate-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Private cloud built for universities & research labs</h2>
            <p className="mt-4 text-lg text-slate-600">Secure, compliant, and cost-efficient infrastructure that helps faculty and students run experiments, store data, and collaborate across departments.</p>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Button className="px-6 py-3">Start Free</Button>
              <Button variant="ghost" className="px-6 py-3">Book a Demo</Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 mt-1 text-indigo-600" />
                <div>
                  <div className="font-semibold">Quick provisioning</div>
                  <div>Deploy compute & storage in minutes</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 mt-1 text-indigo-600" />
                <div>
                  <div className="font-semibold">Data protection</div>
                  <div>Encryption in transit & at rest</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="university cloud" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Managed private cloud for academic workloads</h3>
                <p className="mt-2 text-slate-600">From HPC to simple web apps — power experiments without losing control of your data.</p>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn more</Button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 grid grid-cols-3 gap-3">
              <Card className="w-40 p-3">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5" />
                    <div>
                      <div className="text-sm font-semibold">200+</div>
                      <div className="text-xs text-slate-500">Active users</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-40 p-3">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <Server className="h-5 w-5" />
                    <div>
                      <div className="text-sm font-semibold">120 TB</div>
                      <div className="text-xs text-slate-500">Total storage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-40 p-3">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5" />
                    <div>
                      <div className="text-sm font-semibold">SOC2 Ready</div>
                      <div className="text-xs text-slate-500">Compliance baseline</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>

      {/* FEATURES */}
      <section id="features" className="container mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">Features built for academia</h3>
          <p className="mt-2 text-slate-600">Carefully designed for research reproducibility, collaboration, and governance.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} whileHover={{ y: -6 }} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">Flexible pricing</h3>
          <p className="mt-2 text-slate-600">Plans for departments, labs, and campus-wide deployments. Academic discounts available.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <motion.div key={p.name} whileHover={{ scale: 1.02 }} className={`rounded-2xl p-6 ${p.highlight ? "bg-indigo-700 text-white" : "bg-white text-slate-900"} shadow`}>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <div className="text-sm text-slate-400">{p.price}</div>
              </div>

              <ul className="mt-4 space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 ${p.highlight ? "text-white" : "text-indigo-600"}`} />
                    <span className={p.highlight ? "text-white" : "text-slate-700"}>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className={p.highlight ? "w-full" : "w-full"}>{p.highlight ? "Contact Sales" : "Choose"}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Talk to our campus solutions team</h3>
            <p className="mt-2 text-slate-600">We can help you design a private cloud deployment that meets your policy and budget.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5" />
                <div>
                  <div className="font-semibold">On-prem or hybrid</div>
                  <div className="text-sm text-slate-500">Flexible architectures to match your campus policies.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <div>
                  <div className="font-semibold">Research-grade security</div>
                  <div className="text-sm text-slate-500">Multi-layer access controls and encryption.</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input aria-label="full name" placeholder="Full name" className="col-span-2 p-3 rounded-md border" />
                <input aria-label="email" placeholder="Email" className="col-span-2 p-3 rounded-md border" />
                <textarea aria-label="requirements" placeholder="Brief requirements" className="col-span-2 p-3 rounded-md border h-28" />
                <div className="col-span-2">
                  <Button type="submit">Submit Request</Button>
                </div>
              </form>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white p-8 shadow-lg">
            <h4 className="text-xl font-semibold">Campus-wide features</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3"><Check className="h-4 w-4" /> Centralized billing & chargeback</li>
              <li className="flex items-start gap-3"><Check className="h-4 w-4" /> Department quotas & user roles</li>
              <li className="flex items-start gap-3"><Check className="h-4 w-4" /> Integration with campus SSO</li>
            </ul>
            <div className="mt-6">
              <Button variant="outline">Schedule a workshop</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} UniCloud — Built for higher education</div>
          <div className="flex items-center gap-4">
            <a className="text-sm hover:underline">Privacy</a>
            <a className="text-sm hover:underline">Terms</a>
            <a className="text-sm hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
