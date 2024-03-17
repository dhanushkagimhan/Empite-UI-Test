import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { section3_image1, section3_image2 } from "../../../assets/images/PNG";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Section3() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="relative">
          <div>
            <LazyLoadImage
              src={section3_image1}
              effect="blur"
              alt="Capabilities image"
            />
            <div className="absolute top-0">
              <div className="lg:pl-[140px] min-[360px]:pl-20 pl-6 2xl:pt-[193px] xl:pt-[100px] md:pt-10 sm:pt-20 pt-6 text-white">
                <div className="text-xl text-box-grey2">CAPABILITIES</div>
                <div className="lg:text-[60px] sm:text-[50px] min-[300px]:text-[40px] text-[30px] lg:leading-[4rem] min-[300px]:leading-[3rem] leading-none font-playfair font-semibold min-[360px]:mt-4 mt-2">
                  Mobile.
                  <br /> Web.
                  <br /> Cloud.
                </div>
                <div className="lg:mt-10 min-[360px]:mt-6 mt-2">
                  <button className="flex flex-row gap-6 items-center bg-black min-[360px]:px-8 px-4 min-[360px]:py-5 py-2">
                    <div className="text-lg">View Services</div>
                    <HiOutlineArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <LazyLoadImage
              src={section3_image2}
              effect="blur"
              alt="Capabilities image"
            />
            <div className="absolute top-0">
              <div className="lg:pl-[16 0px] min-[360px]:pl-20 pl-6 2xl:pt-[193px] xl:pt-[100px] md:pt-10 sm:pt-20 pt-6 text-white">
                <div className="text-xl text-box-grey2">SHOWCASE</div>
                <div className="lg:text-[60px] sm:text-[50px] min-[300px]:text-[40px] text-[30px] lg:leading-[4rem] min-[300px]:leading-[3rem] leading-none font-playfair font-semibold min-[360px]:mt-4 mt-2 md:pr-2 pr-20">
                  Our most recent projects.
                </div>
                <div className="lg:mt-10 min-[360px]:mt-6 mt-2">
                  <button className="flex flex-row gap-6 items-center bg-black min-[360px]:px-8 px-4 min-[360px]:py-5 py-2">
                    <div className="text-lg">View Projects</div>
                    <HiOutlineArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
