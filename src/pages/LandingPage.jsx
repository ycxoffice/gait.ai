import React, { useState, useEffect } from "react";
import {
  Activity,
  Search,
  Trophy,
  Dumbbell,
  Brain,
  Zap,
  TrendingUp,
  Target,
  Heart,
  ChevronRight,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

const DirectoryLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Gait.ai
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                to={"CompanyList"}
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Companies
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" />
        <div className="container mx-auto px-6 relative">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
              Track the Future of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Sports & Fitness AI
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Industry Sectors */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Industry Sectors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SectorCard
              icon={<Target />}
              title="Performance Tech"
              count="200+ Companies"
              gradient="from-red-500 to-pink-500"
            />
            <SectorCard
              icon={<Dumbbell />}
              title="Fitness AI"
              count="150+ Companies"
              gradient="from-orange-500 to-yellow-500"
            />
            <SectorCard
              icon={<Brain />}
              title="Sports Analytics"
              count="180+ Companies"
              gradient="from-blue-500 to-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Data Categories */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DataCard
              icon={<TrendingUp />}
              title="Market Intelligence"
              features={["Revenue Analytics", "Funding Rounds", "Market Share"]}
            />
            <DataCard
              icon={<Target />}
              title="Tech Innovations"
              features={["AI Capabilities", "Patent Analysis", "R&D Focus"]}
            />
            <DataCard
              icon={<Share2 />}
              title="Integration Ecosystem"
              features={[
                "Device Compatibility",
                "API Partners",
                "Data Standards",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectorCard = ({ icon, title, count, gradient }) => (
  <div className="group p-6 rounded-2xl bg-gray-800 hover:bg-gray-750 transition-all cursor-pointer relative overflow-hidden">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
    />
    <div className="relative">
      <div className="inline-block p-3 rounded-xl bg-gray-700 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{count}</p>
      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors absolute right-0 top-1/2 -translate-y-1/2" />
    </div>
  </div>
);

const DataCard = ({ icon, title, features }) => (
  <div className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-750 transition-all">
    <div className="inline-block p-3 rounded-xl bg-gray-700 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-400">
          <Zap className="h-4 w-4 mr-2 text-red-500" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default DirectoryLanding;
