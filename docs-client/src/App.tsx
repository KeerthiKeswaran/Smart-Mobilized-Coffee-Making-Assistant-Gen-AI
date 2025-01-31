import React from 'react';
import { Coffee, Brain, Rocket, BarChart as ChartBar, Target, Users, Zap, Award, DollarSign } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import Stats from './components/Stats';
import FeatureGrid from './components/FeatureGrid';
import CompetitiveTable from './components/CompetitiveTable';
import Roadmap from './components/Roadmap';
import Investment from './components/Investment';
import MarketGraph from './components/MarketGraph';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Executive Summary */}
        <Section
          title="The Future of Smart Coffee-Making"
          icon={<Coffee className="w-8 h-8 text-[#C0A080]" />}
          gradient="from-[#C0A080] to-[#8B4513]"
        >
          <p className="text-lg leading-relaxed">
            CAFF-E is a Smart Mobilized Coffee-Making Assistant that integrates AI-driven personalization 
            and robotic mobility to revolutionize home coffee brewing. Unlike traditional static coffee 
            machines, CAFF-E autonomously moves to users, takes voice/text-based coffee orders, and 
            dynamically generates recipes based on user preferences using Generative AI.
          </p>
        </Section>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 my-16">
          <Section
            title="Problem Statement"
            icon={<Target className="w-8 h-8 text-red-100" />}
            gradient="from-red-200 to-red-300"
          >
            <ul className="space-y-4">
              <li>✗ Static, immobile coffee machines</li>
              <li>✗ Limited personalization options</li>
              <li>✗ Manual operation required</li>
              <li>✗ No smart learning capabilities</li>
            </ul>
          </Section>

          <Section
            title="Our Solution"
            icon={<Zap className="w-8 h-8 text-yellow-500" />}
            gradient="from-yellow-500 to-yellow-800"
          >
            <ul className="space-y-4">
              <li>✓ AI-Powered mobility & customization</li>
              <li>✓ Voice & text command interface</li>
              <li>✓ Autonomous delivery system</li>
              <li>✓ Continuous learning & adaptation</li>
            </ul>
          </Section>
        </div>

        {/* Market Stats */}
        <Stats />
        
        {/* Market Graph */}
        <MarketGraph />

        {/* Key Features */}
        <FeatureGrid />

        {/* Competitive Analysis */}
        <CompetitiveTable />

        {/* Roadmap */}
        <Roadmap />

        {/* Investment */}
        <Investment />
      </main>

      <Footer />
    </div>
  );
}

export default App;