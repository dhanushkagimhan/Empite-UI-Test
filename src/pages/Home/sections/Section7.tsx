import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { people1 } from "../../../assets/images/JPEG";

export default function Section7() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div className="px-10 pb-[132px]">
          <div className="mt-[224px] text-xl text-box-grey3 font-medium">
            TESTIMONIALS{" "}
          </div>
          <div className="mt-11 font-playfair font-semibold text-[70px] leading-[5rem]">
            We help to achieve mutual goals.
          </div>
          <div className="mt-6 w-4/5">
            <div>
              <LazyLoadImage
                src={people1}
                effect="blur"
                alt="person"
                className="rounded-full max-w-[75px] max-h-[75px]"
              />
            </div>
            <div className="mt-9 text-[22px] font-bold">
              “Great Development Team”
            </div>
            <div className="mt-4 text-xl">
              “Need a one life feedback from Jared about empire and its work
              related to good 2 give.”
            </div>
            <div className="mt-8 text-[22px] font-bold">Jared Ortlipp</div>
            <div className="text-xl mt-[14px]">CTO, Good 2 Give</div>
          </div>
          <div className="mt-[100px] flex flex-row justify-between">
            <div className="flex flex-row gap-3 items-center text-xl">
              <div>1</div>
              <div className="w-10 h-[2px] bg-black"></div>
              <div>3</div>
            </div>
            <div className="flex flex-row gap-10">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
