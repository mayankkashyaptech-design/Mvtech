import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const completedWorks = [
  {
    id: 1,
    title: "High-Rise Elevator Installation",
    description: "Completed a 20-floor lift installation in a commercial tower.",
    // image: "https://via.placeholder.com/400x250?text=Project+1",
    image: "https://static.vecteezy.com/system/resources/previews/002/439/960/non_2x/businessman-and-engineer-looking-at-a-building-blueprint-at-a-high-rise-building-construction-site-free-photo.jpg",

  },
  {
    id: 2,
    title: "Modern Home Lift",
    description: "Installed a smart home elevator with voice control.",
    // image: "https://via.placeholder.com/400x250?text=Project+2",
    image: "https://static.vecteezy.com/system/resources/previews/002/439/960/non_2x/businessman-and-engineer-looking-at-a-building-blueprint-at-a-high-rise-building-construction-site-free-photo.jpg",

  },
  {
    id: 3,
    title: "Hospital Elevator System",
    description: "Custom-designed lifts for patient transport and emergency access.",
    // image: "https://via.placeholder.com/400x250?text=Project+3",
    image: "https://static.vecteezy.com/system/resources/previews/002/439/960/non_2x/businessman-and-engineer-looking-at-a-building-blueprint-at-a-high-rise-building-construction-site-free-photo.jpg",

  },
  {
    id: 4,
    title: "Mall Lift Maintenance",
    description: "Completed full upgrade of lift systems in a metro mall.",
    image: "https://static.vecteezy.com/system/resources/previews/002/439/960/non_2x/businessman-and-engineer-looking-at-a-building-blueprint-at-a-high-rise-building-construction-site-free-photo.jpg",
  },
];

const Coursole = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <SamplePrevArrow />,    
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="section-center dark:bg-slate-800">
      <div className="max-container">
    <div className="py-16 px-4 sm:px-6 lg:px-16 ">
      <h2 className="text-3xl font-bold text-center font-Poppins text-slate-600 mb-10 head-group dark:text-purple-600">
        Our Completed Projects
      </h2>
      <div className=" relative">
      <Slider {...settings}>
        {completedWorks.map((work) => (
          <div key={work.id} className="px-3 min-h-[350px]">
            <div className="bg-white rounded-[3px] shadow-lg overflow-hidden transition-transform hover:scale-[1.02] dark:bg-slate-800">
              <img src={work.image}  className="w-full h-56 object-cover" alt="loding..."/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">{work.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{work.description.substring(0,30)}...</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
    </section>
  );
};

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow bg-slate-300 rounded-full p-2 hover:bg-amber-600 transition"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-2xl text-black" />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-slate-300 rounded-full p-2 hover:bg-amber-600 transition"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-2xl text-black" />
    </div>
  );
}


export default Coursole;
