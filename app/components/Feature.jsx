import Image from "next/image";
import feature1 from "../../public/desktop/feature-1.jpg";
import feature2 from "../../public/desktop/feature-2.jpg";
import feature3 from "../../public/desktop/feature-3.jpg";
import feature4 from "../../public/desktop/feature-4.jpg";
import feature5 from "../../public/desktop/feature-5.jpg";
import feature6 from "../../public/desktop/feature-6.jpg";

function Feature(params) {
  return (
    <section id="creations">
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
        <div className="mb-20 flex justify-center md:justify-between">
          <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl">
            Our Library of Books
          </h2>
        </div>

        <div className="item-container">
          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature1}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature1} alt="" />

            <div className="item-gradient"></div>

            <h5>Fiction</h5>
          </div>

          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature2}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature2} alt="" />
            <div className="item-gradient"></div>

            <h5>Drama</h5>
          </div>

          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature3}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature3} alt="" />

            <div className="item-gradient"></div>

            <h5>Biography</h5>
          </div>

          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature4}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature4} alt="" />

            <div className="item-gradient"></div>

            <h5>Mystery</h5>
          </div>
        </div>

        <div className="item-container mt-10">
          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature5}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature5} alt="" />

            <div className="item-gradient"></div>

            <h5>Horror</h5>
          </div>

          <div className="item group">
            <Image
              src={feature6}
              alt=""
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
            />

            <Image src={feature6} alt="" className="w-[300px] md:hidden" />

            <div className="item-gradient"></div>

            <h5>Fantasy</h5>
          </div>

          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature2}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature2} alt="" />

            <div className="item-gradient"></div>

            <h5>History</h5>
          </div>

          <div className="item group">
            <Image
              className="hidden w-[300px] duration-200 group-hover:scale-110 md:block"
              src={feature3}
              alt=""
            />

            <Image className="w-[300px] md:hidden" src={feature3} alt="" />

            <div className="item-gradient"></div>

            <h5>Romance</h5>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <button className="btn w-[300px] md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
}

export default Feature;
