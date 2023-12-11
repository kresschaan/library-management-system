import Image from "next/image";
import loginImg from "../../public/main.jpg";

function Homepage() {
  return (
    <section id="feature">
      <div className="container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0">
        <Image src={loginImg} alt="" />

        <div className="top-48 bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="mb-6 mt-10 max-w-lg text-center font-sans text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
            The leader in library management
          </h2>

          <p className="max-w-md">
            Founded in 2014, Libra has been producing world-className management
            application for managing magazine and books all around the world
            that helps and transforms businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
