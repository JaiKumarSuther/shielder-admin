import { 
  FiCheck, 
  FiList, 
  FiUsers, 
  FiSettings, 
  FiLogOut 
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  activeNav: string;
  onNavChange: (navId: string) => void;
}

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const router = useRouter();
  const { logout } = useAuth();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiCheck },
    { id: 'reporting', label: 'Reporting', icon: FiList },
    { id: 'user-management', label: 'User Management', icon: FiUsers }
  ];

  const bottomNavItems = [
    { id: 'settings', label: 'Settings', icon: FiSettings },
    { id: 'logout', label: 'Logout', icon: FiLogOut }
  ];

  const handleNavClick = (navId: string) => {
    if (navId === 'logout') {
      logout();
      router.push('/');
    } else if (navId === 'reporting') {
      router.push('/dashboard/reporting');
    } else if (navId === 'dashboard') {
      router.push('/dashboard');
    } else if (navId === 'user-management') {
      router.push('/dashboard/user-management');
    } else {
      onNavChange(navId);
    }
  };

     return (
     <div className="w-64 bg-white p-6 relative">
             {/* Logo */}
       <div className="mb-8">
         <Image
           src="/assets/logo.png"
           alt="Shieldr Logo"
           width={160}
           height={64}
           className="mx-auto"
         />
       </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
                         className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
               activeNav === item.id
                 ? 'text-white'
                 : 'text-gray-700 hover:bg-gray-200'
             }`}
             style={activeNav === item.id ? {
               background: `linear-gradient(90deg, #9E5EA8 0%, #5C9AD4 100%)`
             } : {}}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-6 right-6">
        <nav className="space-y-2">
          {bottomNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
