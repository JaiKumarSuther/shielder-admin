import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendType: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export default function KPICard({
  title,
  value,
  trend,
  trendType,
  icon: Icon,
  iconBg,
  iconColor
}: KPICardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className={`flex items-center text-sm ${
          trendType === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trendType === 'up' ? (
            <FiTrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <FiTrendingDown className="w-4 h-4 mr-1" />
          )}
          {trend}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
