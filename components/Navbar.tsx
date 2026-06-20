import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">
        AURA AI
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/contract-analyzer">Analyzer</Link>
      </div>
    </nav>
  );
}