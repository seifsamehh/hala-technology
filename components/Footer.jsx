import Image from "next/image";
import "../styles/footer.scss";

const shareGolden = async () => {
  try {
    await navigator.share({
      title: "هلا تكنولوجيا",
      text: "جولدن تدعوكم لزيارة موقع المبادرة",
      url: "https://hala-technology.vercel.app/",
    });
    console.log("Shared successfully!");
  } catch (error) {
    console.error("Error sharing:", error.message);
  }
};
const shareDir = async () => {
  try {
    await navigator.share({
      title: "هلا تكنولوجيا",
      text: "داير تدعوكم لزيارة موقع المبادرة",
      url: "https://hala-technology.vercel.app/",
    });
    console.log("Shared successfully!");
  } catch (error) {
    console.error("Error sharing:", error.message);
  }
};
const sharePathfinder = async () => {
  try {
    await navigator.share({
      title: "هلا تكنولوجيا",
      text: "باث فايندر تدعوكم لزيارة موقع المبادرة",
      url: "https://hala-technology.vercel.app/",
    });
    console.log("Shared successfully!");
  } catch (error) {
    console.error("Error sharing:", error.message);
  }
};
const Footer = () => {
  return (
    <footer className="footer min-[290px]:flex flex-row md:justify-around min-[290px]:justify-start items-start min-[290px]:flex-wrap min-[290px]:py-12 md:p-10 min-[290px]:pr-6 md:pr-0 bg-[#11784b] text-white">
      <div className="golden-hornet">
        <Image
          src="/logo.webp"
          alt="golden"
          aria-label="golden"
          width="100"
          height="100"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
        />
        <div className="social-media">
          <span className="text-2xl text-white">وسائل التواصل</span>
          <div className="flex flex-wrap items-center justify-start gap-4 social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100090277936175"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?i=1jlm5s720gk0d&utm_content=rpkwaca"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/goldenhornet/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z" />
              </svg>
            </a>
            <a
              href="https://golden-hornet-software.vercel.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
            >
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.375-8.654c-.838.255-1.669 1.025-2.359 2.319-.178.335-.345.7-.493 1.09.88.196 1.84.321 2.852.359V3.346ZM7.311 6.424c.178-.48.38-.93.601-1.348.217-.408.466-.799.747-1.166a8.763 8.763 0 0 0-2.845 1.902c.452.23.954.437 1.497.613v-.001Zm-.925 4.951a16.69 16.69 0 0 1 .545-3.76 11.405 11.405 0 0 1-1.956-.834 8.705 8.705 0 0 0-1.702 4.594h3.113Zm1.75-3.426a15.43 15.43 0 0 0-.5 3.426h3.739V8.364a16.885 16.885 0 0 1-3.239-.415Zm4.489.414v3.012h3.738a15.429 15.429 0 0 0-.5-3.426c-1.01.233-2.1.376-3.238.415v-.002Zm-4.987 4.262a15.32 15.32 0 0 0 .498 3.426 17.01 17.01 0 0 1 3.239-.413v-3.013H7.638Zm4.987 0v3.011a16.88 16.88 0 0 1 3.239.415c.278-1.033.455-2.192.5-3.426h-3.739Zm-4.102 4.62c.15.39.315.755.493 1.09.69 1.294 1.523 2.063 2.359 2.319v-3.767a15.869 15.869 0 0 0-2.852.36v-.002Zm.137 2.845a8.365 8.365 0 0 1-.748-1.166c-.23-.436-.43-.886-.6-1.349-.515.165-1.016.37-1.498.613a8.763 8.763 0 0 0 2.845 1.902h.001Zm-1.729-3.705a16.7 16.7 0 0 1-.546-3.76H3.273a8.704 8.704 0 0 0 1.702 4.594 11.358 11.358 0 0 1 1.956-.834Zm8.41 3.705a8.761 8.761 0 0 0 2.844-1.901 10.453 10.453 0 0 0-1.496-.613c-.17.462-.371.912-.602 1.348a8.361 8.361 0 0 1-.746 1.166Zm-2.716-3.204v3.768c.838-.255 1.669-1.025 2.359-2.319.178-.335.345-.7.493-1.09a15.788 15.788 0 0 0-2.852-.358Zm4.444-.501c.712.231 1.369.511 1.956.834a8.705 8.705 0 0 0 1.703-4.594h-3.113a16.705 16.705 0 0 1-.546 3.76Zm3.659-5.01a8.704 8.704 0 0 0-1.703-4.594c-.587.323-1.244.603-1.956.834.31 1.15.5 2.422.546 3.76h3.113Zm-4.64-6.299c.22.418.423.868.602 1.348a10.46 10.46 0 0 0 1.495-.613 8.762 8.762 0 0 0-2.844-1.9c.273.354.523.746.746 1.165Zm-.61 1.679a9.712 9.712 0 0 0-.494-1.09c-.69-1.294-1.521-2.063-2.359-2.319v3.766a15.865 15.865 0 0 0 2.852-.358v.001Z" />
              </svg>
            </a>
            <a href="tel:+0201096219530" aria-label="call us">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.356 2.639a2.181 2.181 0 0 1 3.262.203l2.244 2.883a2.18 2.18 0 0 1 .394 1.867l-.684 2.738a.848.848 0 0 0 .223.804l3.07 3.07a.847.847 0 0 0 .806.223l2.736-.683a2.181 2.181 0 0 1 1.868.393l2.882 2.243a2.18 2.18 0 0 1 .204 3.264l-1.293 1.292c-.925.925-2.307 1.331-3.596.878a23.293 23.293 0 0 1-8.762-5.525 23.292 23.292 0 0 1-5.525-8.762c-.453-1.287-.047-2.67.878-3.596L4.356 2.64Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button onClick={shareGolden} aria-label="share button">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.875 3.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Zm-10.625 5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM18.875 17a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="dir">
        <Image
          src="/dir.webp"
          alt="dir logo"
          aria-label="dir logo"
          className="rounded-full"
          width="100"
          height="100"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
        />
        <div className="social-media">
          <span className="text-2xl text-white">وسائل التواصل</span>
          <div className="flex flex-wrap items-center justify-start gap-4 social-links">
            <a
              href="https://www.facebook.com/diragencies"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/dir-agencies/about/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z" />
              </svg>
            </a>
            <a href="tel:+0201000057065" aria-label="call us">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.356 2.639a2.181 2.181 0 0 1 3.262.203l2.244 2.883a2.18 2.18 0 0 1 .394 1.867l-.684 2.738a.848.848 0 0 0 .223.804l3.07 3.07a.847.847 0 0 0 .806.223l2.736-.683a2.181 2.181 0 0 1 1.868.393l2.882 2.243a2.18 2.18 0 0 1 .204 3.264l-1.293 1.292c-.925.925-2.307 1.331-3.596.878a23.293 23.293 0 0 1-8.762-5.525 23.292 23.292 0 0 1-5.525-8.762c-.453-1.287-.047-2.67.878-3.596L4.356 2.64Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button onClick={shareDir} aria-label="share button">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.875 3.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Zm-10.625 5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM18.875 17a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="pathfinder">
        <Image
          src="/pathfinder.webp"
          alt="pathfinder logo"
          aria-label="pathfinder logo"
          width="100"
          height="100"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
        />
        <div className="social-media">
          <span className="text-2xl text-white">وسائل التواصل</span>
          <div className="flex flex-wrap items-center justify-start gap-4 social-links">
            <a
              href="https://www.facebook.com/pathfindereeg"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/pathfindereg?igshid=NjIwNzIyMDk2Mg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z" />
              </svg>
            </a>
            <a href="tel:+0201556322296" aria-label="call us">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.356 2.639a2.181 2.181 0 0 1 3.262.203l2.244 2.883a2.18 2.18 0 0 1 .394 1.867l-.684 2.738a.848.848 0 0 0 .223.804l3.07 3.07a.847.847 0 0 0 .806.223l2.736-.683a2.181 2.181 0 0 1 1.868.393l2.882 2.243a2.18 2.18 0 0 1 .204 3.264l-1.293 1.292c-.925.925-2.307 1.331-3.596.878a23.293 23.293 0 0 1-8.762-5.525 23.292 23.292 0 0 1-5.525-8.762c-.453-1.287-.047-2.67.878-3.596L4.356 2.64Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button onClick={sharePathfinder} aria-label="share button">
              <svg
                width={24}
                height={24}
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.875 3.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Zm-10.625 5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75ZM18.875 17a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center location">
        <span className="text-2xl text-white">موقعنا</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d431.74028846233705!2d31.3360061!3d30.0390867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e8de9028533%3A0x8d17c7bf086429d5!2sAhmed%20Hasan%20El-Zayat%2C%20Al%20Hadiqah%20Ad%20Dawleyah%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1688660930390!5m2!1sen!2seg"
          className="border-4 border-solid border-[#fdd204] rounded-md min-[290px]:w-[90%] md:w-[400px] h-[300px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="pathfinder location"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
