import Charts from "@/components/charts-01";
import Dashboard from "@/components/dashboard-03";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Charts />
      <Dashboard />
    </main>
  );
}
