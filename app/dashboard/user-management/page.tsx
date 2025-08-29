'use client';

import { useState } from 'react';
import Sidebar from '../../../components/UI/Sidebar';
import Header from '../../../components/UI/Header';
import SearchBar from '../../../components/UI/SearchBar';
import UserTable from '../../../components/UI/UserTable';

interface User {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
  status: 'Unrestricted' | 'Restricted';
}

export default function UserManagement() {
  const [activeNav, setActiveNav] = useState('user-management');
  const [searchTerm, setSearchTerm] = useState('');

  const users: User[] = [
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Unrestricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Unrestricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Unrestricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Unrestricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Unrestricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Restricted'
    },
    {
      id: '423',
      name: 'Apple Watch',
      email: 'example234@gmail.com',
      lastLogin: '12.09.2019 - 12.53 PM',
      status: 'Restricted'
    }
  ];

  const handleNavChange = (navId: string) => {
    setActiveNav(navId);
    // Handle navigation logic here
    console.log('Navigating to:', navId);
  };

  const handleAction = (userId: string) => {
    // Handle action logic here
    console.log('Action clicked for user:', userId);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F1F4F9] flex">
      {/* Sidebar */}
      <Sidebar activeNav={activeNav} onNavChange={handleNavChange} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header title="User Management" />

        {/* User Management Content */}
        <main className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Search Section */}
            <div className="p-6 border-b border-gray-200">
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search"
              />
            </div>

            {/* Table Section */}
            <UserTable 
              users={filteredUsers}
              onAction={handleAction}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
