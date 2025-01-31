import React from 'react';
import { DollarSign, PieChart } from 'lucide-react';
import Section from './Section';

const allocation = [
  { label: 'Product Development & Scaling', percentage: 40 },
  { label: 'Manufacturing & Supply Chain', percentage: 30 },
  { label: 'Marketing & Customer Acquisition', percentage: 20 },
  { label: 'R&D for Next-Gen Features', percentage: 10 }
];

export default function Investment() {
  return (
    <Section title="Investment Opportunity" icon={<DollarSign className="w-8 h-8 text-green-500" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Funding Needed: ₹50-75 Lakhs</h3>
          <div className="space-y-4">
            {allocation.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.label}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-green-500" />
              Projected ROI: 3X within 3 years
            </li>
            <li className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-yellow-500" />
              Break-Even Point: 18-24 months
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}