import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { section8_image } from "../../../assets/images/ContentImages";
import { playBtn2 } from "../../../assets/images/SVG";

export default function Section8() {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div>
          <LazyLoadImage src={section8_image} effect="blur" alt="office" />
        </div>
        <div className="absolute flex justify-center items-center w-full h-full top-0">
          <button>
            <LazyLoadImage
              src={playBtn2}
              effect="blur"
              alt="play Button"
              className="max-sm:max-w-10 max-sm:max-h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
