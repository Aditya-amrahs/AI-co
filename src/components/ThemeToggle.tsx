import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import "tailwindcss";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-amber-500 dark:text-blue-400 transition-colors"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}