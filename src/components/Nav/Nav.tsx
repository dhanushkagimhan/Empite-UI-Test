import { useState } from "react";
import { Logo } from "../../assets/images/SVG";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

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
      <div className="container mx-auto mb-10">
        <div className="flex justify-between pt-[22px] mx-2">
          <div>
            <a href="#">
              <img src={Logo} alt="Empite Logo" />
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
          <div className="mx-2 mt-4 flex flex-col text-center gap-5 text-xl">
            {getNavContent()}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
