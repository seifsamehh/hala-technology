import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";
import HeaderEnglish from "./HeaderEnglish";
import "../styles/hero.scss";

const HeroEnglish = () => {
  return (
    <div className="min-h-screen overflow-hidden heroo" id="heroo">
      <HeaderEnglish />
      <div className="hero-content min-[290px]:pt-64 md:pt-44 flex min-[290px]:justify-center md:justify-between items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-12 md:gap-0">
        <div className="right md:ml-12">
          <Parallax speed={6}>
            <h1
              className={`min-[290px]:text-6xl md:text-8xl mb-4 min-[290px]:pl-4 md:pl-0 font-bold text-white ${merriweather.className}`}
            >
              Hala
            </h1>
          </Parallax>
          <Parallax speed={5}>
            <h2
              className={`min-[290px]:text-6xl md:text-8xl mb-4 min-[290px]:pl-4 md:pl-0 font-bold text-[#fdd204] ${merriweather.className}`}
            >
              Technology
            </h2>
          </Parallax>
          {/* You can open the modal using ID.showModal() method */}
          <button
            className="flex items-center gap-6 text-white bg-transparent btn hover:bg-transparent"
            onClick={() => window.my_modal_3.showModal()}
          >
            <Image
              src="/video-btn.webp"
              alt="videoBtn"
              aria-label="videoBtn"
              width="50"
              height="40"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            Watch Video
          </button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button
                className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("my_modal_3").close();
                }}
              >
                ✕
              </button>
              <video controls>
                <source src="/welcome.mp4" type="video/mp4" />
              </video>
            </form>
          </dialog>
        </div>
        <Parallax speed={7}>
          <div
            className="left tooltip tooltip-open min-[290px]:tooltip-bottom md:tooltip-right tooltip-warning"
            data-tip="Welcome to our website"
          >
            <Parallax speed={-6}>
              <Image
                src="/main-character.webp"
                alt="saudi character"
                aria-label="saudi character"
                width="350"
                height="350"
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                className="w-100 h-100 scale-x-[-1]"
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              />
            </Parallax>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default HeroEnglish;
