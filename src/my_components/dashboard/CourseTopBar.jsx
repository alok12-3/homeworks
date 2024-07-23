import LightButton from "../buttons/LightButton";

export default function CourseTopBar({ title, description, color }) {
  return (
    <header
      className="flex w-full items-center justify-between rounded-xl p-5 text-white"
      style={{ backgroundColor: color }} // Corrected the style property
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-bold opacity-70">{title}</h3>
        <p className="text-xl font-semibold">{description}</p>
      </div>

      {/* <Button variant="immersive" className="max-xl:px-4" size="lg" asChild>
        <NotebookText className="" />
        <span className="ml-2 max-xl:hidden">Continue</span>
      </Button> */}
      <LightButton> </LightButton>
    </header>
  );
}
