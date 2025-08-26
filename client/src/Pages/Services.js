import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubscribeBanner from "../Components/SubscribeBanner";
import { SampleNextArrow, SamplePrevArrow } from "../Components/Coursole";
import { getServices } from "../Features/fetchDetails";
import { Link, Outlet } from "react-router-dom";
import FAQPage from "./Faq";


const reviews = [
  {
    name: "Alice Johnson",
    review: "They modernized our elevator and it feels brand new. Professional team!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    review: "Quick installation and reliable support. Highly recommended.",
    rating: 4
  },
  {
    name: "Sandra Lee",
    review: "Excellent service and prompt maintenance responses.",
    rating: 5
  }
];

const ServicesPage = () => {
  
  const[services,setservices]=useState([{}]);


  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,    
    nextArrow: <SampleNextArrow />,
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices();
      // console.log(data); 
      if (data) setservices(data); // Adjust based on response structure
    };

    fetchData();
  }, [services]);
  return (
    <>
    <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white text-center py-20 px-4   dark:from-slate-700 dark:to-purple-900">
  <h1 className="text-4xl font-bold mb-4">Lift Elevator Solutions</h1>
  <p className="text-lg max-w-2xl mx-auto">Providing reliable, innovative, and safe vertical transport systems for buildings of all sizes.</p>
</section>

<section className=" dark:bg-slate-800">
  <div className="max-container py-16 px-6   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
  {services?.map((element, idx) => {
    let { service_discription, service_title } = element;
    return (
      <Link to="/services/service-category" key={idx} >
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-[3px] p-4 hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-600">
          <h3 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{service_title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{service_discription}...</p>
        </div>
      </Link>
    );
  })}
  </div>
</section>

<section className="bg-gray-100 dark:bg-slate-900 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">What Our Customers Say</h2>
    <Slider {...sliderSettings}>
      {reviews.map((review, idx) => (
        <div key={idx} className="px-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-[3px] shadow-lg">
            <p className="text-lg italic mb-4 text-gray-700 dark:text-gray-200">"{review.review}"</p>
            <div className="flex justify-center mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.966c.3.922-.755 1.688-1.539 1.117l-3.38-2.455-3.38 2.455c-.784.57-1.838-.195-1.539-1.117l1.287-3.966-3.38-2.455c-.783-.57-.38-1.81.588-1.81h4.175L9.05 2.927z" />
                </svg>
              ))}
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>
<FAQPage/>

    {/* <SubscribeBanner/> */}
{/* <Outlet/>   */}
    </>
  );
};

export default ServicesPage;
