import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  gradient?: string;
}

export default function Section({ title, children, icon, gradient }: SectionProps) {
  return (
    <section className="mb-16 fade-in">
      <div className="flex items-center gap-4 mb-6">
        <div className="animate-pulse-slow">
          {icon}
        </div>
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${gradient || 'from-[#C0A080] to-[#8B4513]'} bg-clip-text text-transparent`}>
          {title}
        </h2>
      </div>
      <div className="bg-black rounded-lg p-8 border border-gray-900 hover:border-[#C0A080] transition-colors duration-300">
        {children}
      </div>
    </section>
  );
}