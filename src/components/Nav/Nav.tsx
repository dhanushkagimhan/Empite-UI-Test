import { useState } from "react";
import { Logo } from "../../assets/images/SVG";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Nav() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const getNavContent = () => {
    return (
      <>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Portfolio</a>
        <a href="#">Services</a>
        <button className="py-2.5 px-[22px] -my-2.5 bg-black text-white rounded-[5px]">
          Let’s Talk
        </button>
      </>
    );
  };

  return (
    <nav>
      <div className="container mx-auto px-10 mb-10">
        <div className="flex justify-between pt-[22px] ">
          <div>
            <a href="#">
              <LazyLoadImage src={Logo} effect="blur" alt="Empite Logo" />
            </a>
          </div>
          {windowWidth > 1024 ? (
            <div className="flex flex-row gap-[66px] mt-[22px] text-xl">
              {getNavContent()}
            </div>
          ) : (
            <div className="mt-5">
              <button onClick={() => setIsOpenNav(!isOpenNav)}>
                {isOpenNav ? <IoClose size={30} /> : <TbMenu2 size={30} />}
              </button>
            </div>
          )}
        </div>
        {isOpenNav && windowWidth <= 1024 ? (
          <div className="mt-4 flex flex-col text-center gap-5 text-xl">
            {getNavContent()}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
