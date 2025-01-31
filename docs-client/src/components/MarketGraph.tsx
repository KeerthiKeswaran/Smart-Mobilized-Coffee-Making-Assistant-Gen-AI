import React from 'react';
import { BarChart } from 'lucide-react';
import Section from './Section';

const marketData = [
  {
    segment: 'Premium Smart Home Users',
    value: 41.5,
    color: '#C0A080'
  },
  {
    segment: 'IoT Kitchen Appliances',
    value: 166,
    color: '#8B4513'
  },
  {
    segment: 'Commercial & Workplaces',
    value: 124.5,
    color: '#654321'
  }
];

export default function MarketGraph() {
  const maxValue = Math.max(...marketData.map(d => d.value));

  return (
    <Section title="Market Opportunity (in ₹ Billion)" icon={<BarChart className="w-8 h-8 text-[#C0A080]" />}>
      <div className="space-y-6">
        {marketData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.segment}</span>
              <span className="text-[#C0A080]">₹{item.value}B</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-4">
              <div
                className="h-4 rounded-full transition-all duration-1000"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}