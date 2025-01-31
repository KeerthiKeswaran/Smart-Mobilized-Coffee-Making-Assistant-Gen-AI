import React from 'react';
import { Brain, Mic, Bot, RefreshCw, Activity, Bell, Award } from 'lucide-react';
import Section from './Section';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-[#C0A080]" />,
    title: 'AI-Powered Recipe Customization',
    description: 'Uses Generative AI to craft personalized coffee recipes in real time'
  },
  {
    icon: <Mic className="w-6 h-6 text-[#C0A080]" />,
    title: 'Voice & Text Commands',
    description: 'Place orders using voice assistants or text-based input'
  },
  {
    icon: <Bot className="w-6 h-6 text-[#C0A080]" />,
    title: 'Robotic Mobility',
    description: 'Moves autonomously to deliver coffee anywhere'
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#C0A080]" />,
    title: 'Continuous Learning',
    description: 'Adapts to user habits and refines preferences over time'
  },
  {
    icon: <Activity className="w-6 h-6 text-[#C0A080]" />,
    title: 'Smart Diagnostics',
    description: 'Monitors system health and optimizes performance'
  },
  {
    icon: <Bell className="w-6 h-6 text-[#C0A080]" />,
    title: 'Smart Alerts',
    description: 'Notifies users of low ingredients and maintenance needs'
  }
];

export default function FeatureGrid() {
  return (
    <Section title="Key Features" icon={<Award className="w-8 h-8 text-[#C0A080]" />}>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-black p-6 rounded-lg border border-gray-900 hover:border-[#C0A080] transition-all duration-300 transform hover:-translate-y-1 fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#C0A080]">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}