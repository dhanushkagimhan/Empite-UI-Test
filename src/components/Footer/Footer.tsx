import { LogoWhite } from "../../assets/images/SVG";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black">
        <div className="container mx-auto pt-[109px] pb-[56px] px-2 text-white">
          <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <a href="#">
                <LazyLoadImage
                  src={LogoWhite}
                  effect="blur"
                  alt="Empite Logo"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="text-[22px] text-title-grey">Melbourne</div>
                <div className="text-[24px] mt-10">
                  Level 1, Unit 9 / 677
                  <br /> Springvale Road,
                  <br /> Mulgrave VIC 3170
                </div>
              </div>
              <div className="mt-10">
                <div className="text-[22px] text-title-grey">Colombo</div>
                <div className="text-[24px] mt-10">
                  Level 4, 46/38,
                  <br /> Navam Mawatha,
                  <br /> Colombo 02, 00200
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[22px] text-title-grey">
                  Work inquiries
                </div>
                <div className="text-[24px] mt-10">
                  Interested in working with us? <br />
                  hello@empite.com
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[22px] text-title-grey">Stay in touch</div>
                <div className="text-[22px] mt-10 flex justify-between max-[360px]:flex-col min-[360px]:items-center gap-2 p-6 bg-box-grey rounded-[5px]">
                  <div>
                    <input
                      type="text"
                      className="max-w-[200px] bg-box-grey py-2 outline-none text-[20px]"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[75px] bg-box-grey h-[0.1px]"></div>
          <div className="mt-[50px] text-[22px] font-extralight">
            © 2020, Empite Pty Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
