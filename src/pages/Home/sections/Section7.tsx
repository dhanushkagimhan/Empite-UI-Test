import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { people1, people2, people3 } from "../../../assets/images/Peoples";
import { rightArrow } from "../../../assets/images/SVG";
import { section7_image1 } from "../../../assets/images/ContentImages";
import { useState } from "react";

type TestImonialType = {
  image: string;
  title: string;
  description: string;
  name: string;
  position: string;
};

export default function Section7() {
  const [testImonialIndex, setTestImonialIndex] = useState<number>(0);

  const testImonialContent: TestImonialType[] = [
    {
      image: people1,
      title: "Great Development Team",
      description:
        "Need a one life feedback from Jared about empire and its work related to good 2 give.",
      name: "Jared Ortlipp",
      position: "CTO, Good 2 Give",
    },
    {
      image: people2,
      title: "Good Development Team",
      description:
        "Need a one life feedback from Ktrin about empire and its work related to Google.",
      name: "Ktrin mil",
      position: "CEO, Google",
    },
    {
      image: people3,
      title: "Nice Development Team",
      description:
        "Need a one life feedback from Doit about empire and its work related to facebook.",
      name: "Doit wann",
      position: "CTO, Facebook",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="px-10 xl:pb-8 max-lg:pb-8">
          <div className="2xl:mt-[100px] xl:mt-4 text-xl text-box-grey3 font-medium">
            TESTIMONIALS{" "}
          </div>
          <div className="xl:mt-11 mt-6 font-playfair font-semibold xl:text-[70px] text-[40px] xl:leading-[5rem] leading-[3rem]">
            We help to achieve mutual goals.
          </div>
          <div className="mt-6 w-4/5">
            <div>
              <LazyLoadImage
                src={testImonialContent[testImonialIndex].image}
                effect="blur"
                alt="person"
                className="rounded-full xl:max-w-[75px] xl:max-h-[75px] max-w-[50px] max-h-[50px]"
              />
            </div>
            <div className="xl:mt-9 mt-4 text-[22px] font-bold">
              "{testImonialContent[testImonialIndex].title}"
            </div>
            <div className="mt-4 text-xl">
              “{testImonialContent[testImonialIndex].description}”
            </div>
            <div className="mt-8 text-[22px] font-bold">
              {testImonialContent[testImonialIndex].name}
            </div>
            <div className="text-xl mt-[14px]">
              {testImonialContent[testImonialIndex].position}
            </div>
          </div>
          <div className="2xl:mt-[100px] mt-8 flex min-[450px]:flex-row flex-col min-[450px]:justify-between gap-8">
            <div className="flex flex-row gap-3 items-center text-xl max-[450px]:pl-10">
              <div>{testImonialIndex + 1}</div>
              <div className="w-10 h-[2px] bg-black"></div>
              <div>{testImonialContent.length}</div>
            </div>
            <div className="flex flex-row gap-10">
              <div>
                <button
                  onClick={() => setTestImonialIndex(testImonialIndex - 1)}
                  disabled={testImonialIndex === 0}
                >
                  <LazyLoadImage
                    src={rightArrow}
                    effect="blur"
                    alt="right arrow"
                    className="rotate-180"
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => setTestImonialIndex(testImonialIndex + 1)}
                  disabled={testImonialIndex === 2}
                >
                  <LazyLoadImage
                    src={rightArrow}
                    effect="blur"
                    alt="right arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LazyLoadImage
            src={section7_image1}
            effect="blur"
            alt="team collaboration"
          />
        </div>
      </div>
    </div>
  );
}
