'use client';

import { useState } from 'react';
import { 
  FiUser,
  FiPackage,
  FiBarChart,
  FiRefreshCw
} from 'react-icons/fi';
import Sidebar from '../../components/UI/Sidebar';
import Header from '../../components/UI/Header';
import KPICard from '../../components/UI/KPICard';

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const kpiData = [
    {
      title: 'Total User',
      value: '40,689',
      trend: '8.5% Up from yesterday',
      trendType: 'up' as const,
      icon: FiUser,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Restricted Users',
      value: '10,293',
      trend: '1.3% Up from past week',
      trendType: 'up' as const,
      icon: FiPackage,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Reports Generated',
      value: '$89,000',
      trend: '4.3% Down from yesterday',
      trendType: 'down' as const,
      icon: FiBarChart,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Active Users',
      value: '2,040',
      trend: '1.8% Up from yesterday',
      trendType: 'up' as const,
      icon: FiRefreshCw,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const handleNavChange = (navId: string) => {
    setActiveNav(navId);
    // Handle navigation logic here
    console.log('Navigating to:', navId);
  };

  return (
    <div className="min-h-screen bg-[#F1F4F9] flex">
      {/* Sidebar */}
      <Sidebar activeNav={activeNav} onNavChange={handleNavChange} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Dashboard Content */}
        <main className="p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => (
              <KPICard
                key={index}
                title={kpi.title}
                value={kpi.value}
                trend={kpi.trend}
                trendType={kpi.trendType}
                icon={kpi.icon}
                iconBg={kpi.iconBg}
                iconColor={kpi.iconColor}
              />
            ))}
          </div>

          {/* Additional Content Area */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <p className="text-gray-500">No recent activity to display.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
