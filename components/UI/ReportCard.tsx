import { FiDownload } from 'react-icons/fi';

interface ReportCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  onDownload: (reportType: string) => void;
}

export default function ReportCard({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  onDownload
}: ReportCardProps) {
  const handleDownload = () => {
    const reportType = title.toLowerCase().replace(/\s+/g, '-');
    onDownload(reportType);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
      <div className="mb-6">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <button
        onClick={handleDownload}
        className="w-full py-3 px-4 rounded-md text-blue-700 font-medium text-sm border border-blue-200 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"
      >
        <FiDownload className="w-4 h-4 mr-2" />
        Download
      </button>
    </div>
  );
}
