import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";
import "../styles/call.scss";
const CallEnglish = () => {
  return (
    <section className="call min-h-[50vh] flex justify-around items-center min-[290px]:flex-wrap-reverse md:flex-nowrap min-[290px]:py-4 md:py-0 overflow-hidden">
      <div className="content min-[290px]:w-[90%] md:w-1/2 flex justify-around items-center bg-[#11784b] text-white py-16 rounded-2xl border-4 border-solid border-[#fdd204] min-[290px]:flex-col md:flex-row min-[290px]:gap-6 md:gap-0">
        <Parallax speed={6}>
          <div className="right">
            <h2
              className={`min-[290px]:text-3xl md:text-5xl ${merriweather.className}`}
            >
              Order Now
            </h2>
          </div>
        </Parallax>
        <div className="left">
          <a
            href="javascript:void(window.open('https://form.jotform.com/231863476721057','blank','scrollbars=yes,toolbar=no,width=700,height=500'))"
            className="bg-[#fdd204] text-[#1f1f29] py-2 px-4 rounded-lg font-bold"
            aria-label="contact us"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Image
        src="/callCharacter.webp"
        alt="call character"
        aria-label="call character"
        width="200"
        height="200"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
        className="scale-x-[-1]"
      />
    </section>
  );
};

export default CallEnglish;
