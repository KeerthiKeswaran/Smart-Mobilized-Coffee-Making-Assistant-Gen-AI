import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Stats() {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {[
        {
          icon: <TrendingUp className="w-8 h-8 text-[#C0A080]" />,
          value: "₹622.5B+",
          label: "Global Coffee Machine Market"
        },
        {
          icon: <Users className="w-8 h-8 text-[#C0A080]" />,
          value: "₹166B+",
          label: "Smart Kitchen Market"
        },
        {
          icon: <DollarSign className="w-8 h-8 text-[#C0A080]" />,
          value: "₹4.98B",
          label: "Potential Market Capture"
        }
      ].map((stat, index) => (
        <div 
          key={index}
          className="bg-black p-8 rounded-lg border border-gray-900 hover:border-[#C0A080] transition-all duration-300 transform hover:-translate-y-1 fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div>
            {stat.icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[#C0A080]">{stat.value}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}