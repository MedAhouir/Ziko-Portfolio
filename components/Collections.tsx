import { DraggableCardDemo } from "./DraggableCardDemo";
import { DraggableCardDemoGrid } from "./DraggableCardDemoGrid";

const Collections = () => {
  return (
    <div id="collections" className="container flex flex-col gap-8 px-4 py-12">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        <h2 className="title capitalize text-4xl sm:text-5xl font-sora">Explore my work</h2>
        <div className="max-w-full md:max-w-md font-cabin">
          <p className="text-base sm:text-lg md:text-xl text-[#EAEAEA]">
            My work reflects a pursuit of visual perfection—bringing together light, emotion and authenticity
            in every frame.
          </p>
        </div>
      </div>

      {/* Draggable Card Section */}
      <div className="flex items-center justify-center pt-6">
        <DraggableCardDemo className="hidden sm:block"/>
        <DraggableCardDemoGrid className="sm:hidden" />
      </div>
    </div>
  );
};

export default Collections;
