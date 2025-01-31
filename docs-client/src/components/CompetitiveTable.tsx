import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const features = [
  'Mobility',
  'AI-Based Custom Recipes',
  'Voice/Text Interaction',
  'Continuous Learning',
  'Remote Monitoring & Alerts'
];

export default function CompetitiveTable() {
  return (
    <div className="overflow-x-auto my-16 fade-in">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-900">
            <th className="text-left p-4 text-[#C0A080]">Feature</th>
            <th className="p-4 text-[#C0A080]">Traditional Coffee Makers</th>
            <th className="p-4 text-[#C0A080]">Smart Coffee Machines</th>
            <th className="p-4 text-[#C0A080]">CAFF-E</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className="border-b border-gray-900 hover:bg-gray-900/30 transition-colors duration-300"
            >
              <td className="p-4">{feature}</td>
              <td className="p-4 text-center">
                <XCircle className="w-6 h-6 text-red-500 inline animate-pulse-slow" />
              </td>
              <td className="p-4 text-center">
                {index === 1 ? (
                  <span className="text-yellow-500">Limited</span>
                ) : (
                  index < 2 ? (
                    <XCircle className="w-6 h-6 text-red-500 inline animate-pulse-slow" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-500 inline animate-pulse-slow" />
                  )
                )}
              </td>
              <td className="p-4 text-center">
                <CheckCircle className="w-6 h-6 text-green-500 inline animate-pulse-slow" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}