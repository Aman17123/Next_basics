// app/complex-dashboard/layout.tsx
export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <div className="flex flex-col flex-1" style={{ display: 'flex ', gap: '1rem' }}>
        <div style={{ flex: 1 }} className="flex flex-row flex-2">{users}</div>
        <div style={{ flex: 1 }}>{revenue}</div>
        <div style={{ flex: 1 }}>{notifications}</div>
      </div>
      {children}
    </div>
  );
}
