import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  section5_image1,
  section5_image2,
  section5_image3,
} from "../../../assets/images/PNG";
import { playBtn2 } from "../../../assets/images/SVG";

export default function Section5() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="relative">
          <div>
            <LazyLoadImage
              src={section5_image1}
              effect="blur"
              alt="meeting image"
            />
          </div>
          <div className="absolute top-0 flex justify-center items-center h-full w-full">
            <button>
              <LazyLoadImage src={playBtn2} effect="blur" alt="play Button" />
            </button>
          </div>
        </div>
        <div>
          <LazyLoadImage
            src={section5_image2}
            effect="blur"
            alt="mouse image"
          />
        </div>
        <div>
          <LazyLoadImage src={section5_image3} effect="blur" alt="relax room" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
