import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Dots9 } from "../../../assets/images/SVG";

export default function Section6() {
  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col lg:gap-20 gap-8 max-md:gap-20 pt-[120px] pb-[118px]">
        <div className="pl-10 pr-4 lg:w-2/6">
          <div className="flex flex-row gap-2">
            <div>
              <LazyLoadImage src={Dots9} effect="blur" alt="9 Dots SVG" />
            </div>
            <div className="text-[54px] font-bold leading-none -mt-2">236</div>
          </div>
          <div className="mt-4 text-[22px] font-semibold w-20">
            Succeeded project
          </div>
          <div className="mt-11 text-xl">
            Our clients describe us as a product team which creates{" "}
            <span className="font-semibold">amazing UI/UX,</span> by crafting
            top-notch user experience.
          </div>
        </div>
        <div className="pl-10 pr-4 lg:w-2/6">
          <div className="flex flex-row gap-2">
            <div>
              <LazyLoadImage src={Dots9} effect="blur" alt="9 Dots SVG" />
            </div>
            <div className="text-[54px] font-bold leading-none -mt-2">9346</div>
          </div>
          <div className="mt-4 text-[22px] font-semibold w-40">
            Working hours Were spent
          </div>
          <div className="mt-11 text-xl">
            We’ve structured our workflow processes were from the funny{" "}
            <span className="font-semibold">the century rather,</span> initial
            all the made, have spare to negatives.
          </div>
        </div>
      </div>
    </div>
  );
}
