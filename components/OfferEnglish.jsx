import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";
import "../styles/offer.scss";

const OfferEnglish = () => {
  return (
    <section
      className="offers min-h-screen min-[290px]:px-6 md:px-12 py-12 overflow-hidden"
      id="offers"
    >
      <div className="flex items-center justify-start gap-4 mb-8 title">
        <Parallax speed={5}>
          <Image
            src="/offerBtn.webp"
            alt="offer btn"
            aria-label="offer btn"
            width="50"
            height="40"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
          />
        </Parallax>
        <Parallax speed={4}>
          <h2
            className={`min-[290px]:text-5xl md:text-6xl font-bold text-[#11784b] dark:text-[#fdd204] ${merriweather.className}`}
          >
            Offers
          </h2>
        </Parallax>
      </div>
      <div className="offer-content">
        <div className="container min-[290px]:px-2 md:px-5 min-[290px]:py-6 md:py-24 mx-auto">
          <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/domain.webp"
                    alt="domain"
                    aria-label="domain"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Domain name with your company&apos;s name and hosting for a
                    full year
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/responsive.webp"
                    alt="responsive"
                    aria-label="responsive"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Responsive design for all screens
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/social.webp"
                    alt="social"
                    aria-label="social"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Adding all your social media accounts
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/share.webp"
                    alt="share"
                    aria-label="share"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Sharing your website on all platforms
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/analysis.webp"
                    alt="analysis"
                    aria-label="analysis"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Analysis of customers visiting your website
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/seo.webp"
                    alt="seo"
                    aria-label="seo"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Improving your presence on search engines
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/chat.webp"
                    alt="chat"
                    aria-label="chat"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Immediate ownership transfer and advanced customer
                    communication system
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/booking.webp"
                    alt="booking"
                    aria-label="booking"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    All customer data and reservation system
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/gallery.webp"
                    alt="gallery"
                    aria-label="gallery"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Organized photo album to showcase your work and important
                    events
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/video.webp"
                    alt="video"
                    aria-label="video"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Ability to display your promotional videos
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={5}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/support.webp"
                    alt="support"
                    aria-label="support"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    Free technical support for one year (Arabic - English -
                    French)
                  </span>
                </div>
              </Parallax>
            </div>
            <div className="w-full p-2 sm:w-1/2">
              <Parallax speed={4}>
                <div className="bg-[#fdd204] rounded flex p-4 md:h-16 items-center gap-4">
                  <Image
                    src="/page.webp"
                    alt="page"
                    aria-label="page"
                    width="30"
                    height="20"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <span className="title-font font-bold text-[#1f1f29]">
                    A page dedicated to products or services and interactive
                    customer reviews
                  </span>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferEnglish;
