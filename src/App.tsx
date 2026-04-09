import ThemeToggle from './components/ThemeToggle';
import { Cpu, User, Zap, Waypoints, Brain } from 'lucide-react';
import "tailwindcss";

//creating a combined component for Brain and Cpu icons
const BrainCpu = () => (
  <div className="flex items-center gap-2">
    <Brain size={20} />
    <Cpu size={20} />
  </div>
);


function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Waypoints className="text-blue-600" /> AAI- Adi AI
        </h1>
        <ThemeToggle />
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20">
        <section className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            The New <span className="text-blue-600">Everyday</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AI doesn't replace the human experience; it amplifies it. From your morning coffee to your complex workflows, we build the bridges of coexistence.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Personal Growth", icon: <User />, desc: "AI mentors that adapt to your learning style." },
            { title: "Seamless Work", icon: <Zap />, desc: "Automation that handles the mundane, leaving you the creative." },
            { title: "Tech Harmony", icon: <BrainCpu/>, desc: "Interfaces that feel natural and intuitive." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-blue-600">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;