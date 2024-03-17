import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  bracketSVG,
  computerSVG,
  mobilePhoneSVG,
  uxDesignSVG,
} from "../../../assets/images/SVG";

export default function Section2() {
  return (
    <div className="bg-black">
      <div className="container mx-auto pb-[192px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 text-white">
          <div className="pl-10 pt-[116px] 2xl:pr-20 pr-4">
            <div className="text-title-grey text-[20px]">WHAT WE DO</div>
            <div className="font-playfair sm:text-[70px] text-[40px] leading-none mt-4">
              Integrated tech solutions across all digital platforms
            </div>
          </div>
          <div className="max-lg:px-4">
            <div className="sm:mt-[134px] mt-20 text-[22px]">
              We are committed to keeping you ahead in today’s fast-paced and
              ever-evolving world by delivering digital solutions that solve
              problems in a secure, simple and effective way.
            </div>
            <div className="mt-[74px]">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  <div>
                    <LazyLoadImage
                      src={computerSVG}
                      effect="blur"
                      alt="Computer"
                    />
                  </div>
                  <div className="mt-10 font-semibold text-2xl">
                    Custom Software
                  </div>
                  <div className="mt-3 text-[22px]">
                    We create solutions that solve your business problems. Our
                    team has a decade long success track record.
                  </div>
                </div>
                <div>
                  <div>
                    <LazyLoadImage
                      src={bracketSVG}
                      effect="blur"
                      alt="Bracket"
                    />
                  </div>
                  <div className="mt-10 font-semibold text-2xl">
                    Web Applications
                  </div>
                  <div className="mt-3 text-[22px]">
                    We typically build all web applications from scratch to
                    satisfy your requirements.
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px]">
                <div>
                  <div>
                    <LazyLoadImage
                      src={mobilePhoneSVG}
                      effect="blur"
                      alt="Mobile phone"
                    />
                  </div>
                  <div className="mt-10 font-semibold text-2xl">
                    Mobile Applications
                  </div>
                  <div className="mt-3 text-[22px]">
                    We transform your mobile app ideas into high quality
                    customised apps that are easy to use.
                  </div>
                </div>
                <div>
                  <div>
                    <LazyLoadImage
                      src={uxDesignSVG}
                      effect="blur"
                      alt="UX Design"
                    />
                  </div>
                  <div className="mt-10 font-semibold text-2xl">
                    UI / UX Design
                  </div>
                  <div className="mt-3 text-[22px]">
                    We craft better user experience and Interface designs for
                    your digital products.
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
