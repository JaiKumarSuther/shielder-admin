import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shieldr - Admin Dashboard",
  description: "Shieldr Admin Dashboard - Stay Connected. Stay Protected.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
