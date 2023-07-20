import Image from "next/image";

const Border = () => {
  return (
    <section className="flex items-center justify-center md:p-12 borderr">
      <Image
        src="/border.webp"
        alt="border"
        aria-label="border"
        width="1500"
        height="1500"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUqvCpBwAC0QFXeHk1kgAAAABJRU5ErkJggg=="
      />
    </section>
  );
};

export default Border;
