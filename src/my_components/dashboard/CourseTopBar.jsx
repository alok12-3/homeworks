import LightButton from "../buttons/LightButton";

export default function CourseTopBar({ title, description, color }) {
  return (
    <header
      className="flex items-center justify-between rounded-xl text-white sticky top-4 p-4 mb-5 sm:z-50"
      style={{ backgroundColor: color }} // Corrected the style property
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-bold opacity-70">{title}</h3>
        <p className="text-xl font-semibold">{description}</p>
      </div>
      <LightButton buttonText="Formula sheet"> </LightButton>
    </header>
  );
}
