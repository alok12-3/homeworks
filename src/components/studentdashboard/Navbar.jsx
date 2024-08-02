import LightButton from "../buttons/LightButton";

export default function LearnNavbar({ title, description, color }) {
  return (
    <header
      className="flex items-center justify-between text-white sticky top-0 p-2 z-10"
      style={{ backgroundColor: color }}
    >
      <nav className="flex space-x-4">
        <LightButton href="/subject" />
        <LightButton href="/performance" />
      </nav>
    </header>
  );
}
