import React from 'react';
import { Rocket } from 'lucide-react';
import Section from './Section';

const phases = [
  {
    title: 'Phase 1',
    description: 'Expand mobility functions with GPS and LiDAR-based navigation'
  },
  {
    title: 'Phase 2',
    description: 'Self coffee griding capabilities'
  },
  {
    title: 'Phase 3',
    description: 'Integrate self-cleaning dispensers and energy-efficient heating'
  },
  {
    title: 'Phase 4',
    description: 'Proper refrigerating container for milk'
  },
  {
    title: 'Phase 5',
    description: 'Biometric Authentication for personalized coffee profiles'
  },
  {
    title: 'Phase 6',
    description: 'AI-powered health monitoring & dietary recommendations'
  }
];

export default function Roadmap() {
  return (
    <Section title="Future Version Roadmap" icon={<Rocket className="w-8 h-8 text-[#C0A080]" />
    }>
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white bg-opacity-15 flex items-center justify-center">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
              <p className="text-gray-400">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}