import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { section9_image } from "../../../assets/images/ContentImages";
import { emailSVG, telephone } from "../../../assets/images/SVG";

export default function Section9() {
  return (
    <div className="container mx-auto">
      <div className="flex xl:flex-row flex-col-reverse">
        <div className="xl:w-1/2">
          <LazyLoadImage src={section9_image} effect="blur" alt="map" />
        </div>
        <div className="xl:w-1/2 grid md:grid-cols-2 grid-cols-1">
          <div className="pt-8 pl-14 max-xl:pb-8">
            <div>
              <LazyLoadImage
                src={telephone}
                effect="blur"
                alt="telephone icon"
              />
            </div>
            <div className="mt-7 text-2xl font-bold">Get in touch</div>
            <div className="mt-5 text-xl">
              Work and general inquiries
              <br />
              <span className="font-semibold">+61.809.120.6705</span>
            </div>
            <div className="mt-5 text-xl">
              <span className="font-semibold">Assistance hours:</span>
              <br />
              Monday - Friday
              <br /> 9.00 am to 5.00 pm
            </div>
          </div>
          <div className="pt-8 pl-14 bg-box-grey5 max-md:pb-8">
            <div>
              <LazyLoadImage src={emailSVG} effect="blur" alt="email icon" />
            </div>
            <div className="mt-7 text-2xl font-bold">Post address</div>
            <div className="mt-5 text-xl">
              Level 1, Unit 9 / 677
              <br /> Springvale Road,
              <br /> Mulgrave VIC 3170
              <br /> Australia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
