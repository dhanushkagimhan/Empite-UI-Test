import { Logo } from "../../assets/images/SVG";

export default function Nav() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between pt-[22px]">
        <div>
          <a href="#">
            <img src={Logo} alt="Empite Logo" />
          </a>
        </div>
        <div>ss</div>
      </div>
    </div>
  );
}
