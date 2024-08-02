import heroimg from "/assets/heroimg.png"; // Adjust the path based on your file location
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="px-6 lg:px-8 flex flex-col lg:flex-row items-center max-w-6xl sm:py-40 lg:py-10">
        <div className="lg:w-2/5 mt-10 lg:mt-0 lg:pr-8">
          <img
            src={heroimg}
            alt="Placeholder"
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
            AI-Powered Learning, Uniquely Yours
          </h1>
          <div className="mt-10 flex flex-col items-center lg:items-start gap-y-4">
            <Link
              to="/signup"
              className={buttonVariants({ variant: "solid", size: "full" })}
            >
              <div className="text-sm font-semibold">GET STARTED</div>
            </Link>
            <Link
              to="/login"
              className={buttonVariants({ variant: "light", size: "full" })}
            >
              <div className="text-sm font-semibold">
                I ALREADY HAVE AN ACCOUNT
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
