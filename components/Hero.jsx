import Image from "next/image";
import { Kufam } from "next/font/google";
const kufam = Kufam({ subsets: ["latin"], display: "swap" });
import { Parallax } from "react-scroll-parallax";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden heroo" id="heroo">
      <Header />
      <div className="hero-content min-[290px]:pt-64 md:pt-44 flex min-[290px]:justify-center md:justify-between items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-12 md:gap-0">
        <div className="right md:mr-12">
          <Parallax speed={6}>
            <h1
              className={`min-[290px]:text-6xl md:text-8xl mb-4 min-[290px]:pr-4 md:pr-0 font-bold text-white ${kufam.className}`}
            >
              هلا
            </h1>
          </Parallax>
          <Parallax speed={5}>
            <h2
              className={`min-[290px]:text-6xl md:text-8xl mb-4 min-[290px]:pr-4 md:pr-0 font-bold text-[#fdd204] ${kufam.className}`}
            >
              تكنولوجيا
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
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
            />
            مشاهدة الفيديو
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
            data-tip="هلا بيك"
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
                className="w-100 h-100"
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
              />
            </Parallax>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Hero;
