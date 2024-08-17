import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-center bg-royal-blue-500 text-white py-4">
      Created by{" "}
      <Link
        className="underline  hover:text-royal-blue-100"
        href="https://webdream.be"
        target="_blank"
      >
        Webdream Studio
      </Link>
      .
    </div>
  );
};
export default Footer;
