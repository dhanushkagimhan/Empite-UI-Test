import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { section1_image } from "../../../assets/images/ContentImages";
import { playBtn1 } from "../../../assets/images/SVG";

export default function Section1() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <LazyLoadImage
            src={section1_image}
            effect="blur"
            alt="section1 image"
          />
        </div>
        <div>
          <div className="xl:py-10 lg:py-5 py-2 2xl:pl-[140px] xl:pl-[100px] lg:pl-[80px] pl-[40px] pr-2">
            <div className="2xl:text-[88px] xl:text-[60px] lg:text-[50px] text-[35px] font-playfair font-[550] leading-[1]">
              Pushing The Envelope Of Software Development
            </div>
            <div className="xl:mt-8 mt-6 text-[22px] w-2/3">
              With unique business ideas and the passionate people behind.
            </div>
            <div className="flex min-[360px]:flex-row flex-col xl:gap-20 lg:gap-14 gap-8 xl:mt-8 mt-6">
              <div>
                <button className="bg-black text-white xl:px-[48px] lg:px-6 px-4 lg:py-[22px] py-3 rounded-[5px]">
                  Get Started
                </button>
              </div>
              <div>
                <div className="flex flex-row gap-5 items-center">
                  <div>
                    <LazyLoadImage
                      src={playBtn1}
                      effect="blur"
                      alt="play Button"
                      className="max-lg:w-10 max-lg:h-10"
                    />
                  </div>
                  <div className="font-medium lg:text-[22px] text-base">
                    How it works
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
