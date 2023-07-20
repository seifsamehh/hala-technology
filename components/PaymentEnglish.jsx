import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
});
import { Parallax } from "react-scroll-parallax";
import "../styles/payment.scss";
const PaymentEnglish = () => {
  return (
    <secrtion
      className="payment min-h-screen min-[290px]:px-6 md:px-12 py-12 overflow-hidden relative"
      id="payment"
    >
      <div className="flex items-center justify-start gap-4 mb-8 min-[290px]:ml-4 md:ml-8 title">
        <Parallax speed={5}>
          <Image
            src="/paymentBtn.webp"
            alt="payment btn"
            aria-label="payment btn"
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
            Payment Methods
          </h2>
        </Parallax>
      </div>
      <div className="flex flex-col items-start justify-start min-[290px]:gap-12 md:gap-44 min-[290px]:m-4 md:m-8 payment-content">
        <div className="top w-full flex items-center justify-start gap-4 right bg-[#fdd204] p-4 rounded-lg border-4 border-solid border-[#f5f5fa] dark:border-[#12784c]">
          <Image
            src="/lamp.webp"
            alt="lamp"
            aria-label="lamp"
            width="50"
            height="40"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
          />
          <p className="font-bold dark:text-[#1f1f29]">
            Products are evaluated in Egyptian pounds and the price is the same
            for all countries.
          </p>
        </div>
        <div className="middle w-full p-12 rounded-lg bg-[#fdd204]">
          <Parallax speed={6}>
            <h3 className=" min-[290px]:text-5xl md:text-6xl text-[#12784c] font-bold">
              10% <br />
              Discount
            </h3>
            <h4 className="font-bold dark:text-[#1f1f29]">
              When you pay in dollars
            </h4>
            <p className="dark:text-[#1f1f29]">
              You can also pay in Saudi Riyals or Egyptian Pounds.
            </p>
            <p className="dark:text-[#1f1f29]">
              The products are evaluated in Egyptian pounds and the price is the
              same for all countries.
            </p>
          </Parallax>
        </div>
        <div className="bottom">
          <Parallax speed={5}>
            <h3 className="text-3xl text-[#12784c] dark:text-[#fdd204] mb-12 font-bold">
              You can pay through the following methods:
            </h3>
          </Parallax>
          <div className="methods flex justify-between items-center min-[290px]:gap-16 md:gap-36 min-[290px]:flex-wrap md:flex-nowrap">
            <div className="right">
              <div className="flex items-center justify-center gap-6 min-[290px]:flex-wrap md:flex-nowrap boxs">
                <div className="flex flex-col items-center justify-center h-48 gap-4 p-6 bg-white rounded-lg border-2 border-dashed border-[#12784c] dark:border-[#fdd204] w-44 box">
                  <Image
                    src="/payment1.webp"
                    alt="payment1"
                    aria-label="payment1"
                    width="50"
                    height="40"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h4 className="font-bold dark:text-[#1f1f29]">stc pay</h4>
                  <p className="dark:text-[#1f1f29]">Digital wallet</p>
                </div>
                <div className="flex flex-col items-center justify-center h-48 gap-4 p-6 bg-white rounded-lg border-2 border-dashed border-[#12784c] dark:border-[#fdd204] w-44 box">
                  <Image
                    src="/payment4.webp"
                    alt="payment4"
                    aria-label="payment4"
                    width="100"
                    height="100"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h4 className="font-bold dark:text-[#1f1f29]">Instapay</h4>
                  <p className="dark:text-[#1f1f29]">Digital wallet</p>
                </div>
                <div className="flex flex-col items-center justify-center h-48 gap-4 p-6 bg-white rounded-lg border-2 border-dashed border-[#12784c] dark:border-[#fdd204] w-44 box">
                  <Image
                    src="/payment2.webp"
                    alt="payment2"
                    aria-label="payment2"
                    width="50"
                    height="40"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h4 className="font-bold dark:text-[#1f1f29]">
                    Western Union
                  </h4>
                  <p className="text-center dark:text-[#1f1f29]">
                    Financial services company
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center h-48 gap-4 p-6 bg-white rounded-lg border-2 border-dashed border-[#12784c] dark:border-[#fdd204] w-44 box">
                  <Image
                    src="/payment3.webp"
                    alt="payment3"
                    aria-label="payment3"
                    width="50"
                    height="40"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                  />
                  <h4 className="font-bold dark:text-[#1f1f29]">
                    Bank deposit
                  </h4>
                  <p className="dark:text-[#1f1f29]">Al Rajhi Bank</p>
                </div>
              </div>
            </div>
            <div className="left">
              <a
                href="javascript:void(window.open('https://form.jotform.com/231863476721057','blank','scrollbars=yes,toolbar=no,width=700,height=500'))"
                aria-label="price button"
              >
                <Image
                  src="/priceEn.webp"
                  alt="price"
                  aria-label="price"
                  width="300"
                  height="300"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </secrtion>
  );
};

export default PaymentEnglish;
