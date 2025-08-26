// import React from 'react'

// export default function About() {
//   return (
//     <section className='section-center-row'>
//       <div className='max-container'>
        
//         <div className='content-container'>

//          <div className='content-card flex items-center min-h-[20vh] py-[2em]'>
//           <div className='content-box  flex flex-wrap'>
//           <div className='box img-box grow basis-[450px]  flex justify-center '>
//               <div className='img-con w-[80%] max-sm:w-[80%]'>

//           <img src='https://www.pngmart.com/files/About-Us-PNG-Free-Download.png'alt=''className='w-full'/>
//               </div>
//           </div>
//           <div className='box details-con grow basis-[450px]'>
//             <h1 className='topic text-3xl text-black  font-[600] py-2.5'>Whow We Are</h1>
//             <div className='para-text-con text-slate-600'>
//               <p>The About Us section of your Elevator Contract Booking System should provide a clear overview of your platform, its
//                  purpose, and how it benefits users. Here’s a structured outline you can use: The About Us section of your Elevator Contract Booking System should provide a clear overview The About Us section of your Elevator Contract Booking System should provide a clear overview The About Us section of your Elevator Contract Booking System 
//                 should provide a clear overview The About Us section of your Elevator Contract Booking System should provide a clear overview</p>
//             </div>
//           </div>
//           </div>
//           </div>
//         {/* //////// */}
//         <div className='content-card flex items-center min-h-[20vh]'>
//           <div className='content-box  flex flex-wrap'>
//           <div className='box details-con grow basis-[450px]'>
//             <h1 className='topic text-3xl text-black  font-[600] py-2.5'>Whow We Are</h1>
//             <div className='para-text-con text-slate-600'>
//               <p>The About Us section of your Elevator Contract Booking System should provide a clear overview of your platform, its
//                  purpose, and how it benefits users. Here’s a structured outline you can use: The About Us section of your Elevator Contract Booking System should provide a clear overview The About Us section of your Elevator Contract Booking System should provide a clear overview The About Us section of your Elevator Contract Booking System 
//                 should provide a clear overview The About Us section of your Elevator Contract Booking System should provide a clear overview</p>
//             </div>
//           </div>
//           <div className='box img-box grow basis-[450px]  flex justify-center '>
//               <div className='img-con w-[80%] max-sm:w-[80%]'>

//           <img src='https://tse3.mm.bing.net/th?id=OIP.yRDLG95RwU5t2nhGKq2hSAHaHa&pid=Api&P=0&h=220'alt=''className='w-full'/>
//               </div>
//           </div>
//           </div>
//           </div>
        
//         </div>
//       </div>
//     </section>
//   )
// }
import React from "react";
import { FaCheckCircle, FaAward, FaCogs, FaUsers } from "react-icons/fa";

const AboutUsPage = () => {
  const features = [
    {
      icon: <FaAward className="text-blue-600 text-4xl mb-4 inline-block  dark:text-white" />,
      title: "Trusted Expertise",
      desc: "Years of experience in providing reliable lift & elevator services."
    },
    {
      icon: <FaCogs className="text-blue-600 text-4xl mb-4 inline-block  dark:text-white" />,
      title: "Modern Technology",
      desc: "We use the latest elevator technology to ensure safety and performance."
    },
    {
      icon: <FaUsers className="text-blue-600 text-4xl mb-4 inline-block  dark:text-white" />,
      title: "Customer First",
      desc: "We're dedicated to client satisfaction and long-term support."
    },
    {
      icon: <FaCheckCircle className="text-blue-600 text-4xl mb-4 inline-block dark:text-white" />,
      title: "Quality Assurance",
      desc: "Each service is delivered with top-notch quality and industry standards."
    }
  ];

  return (
    <>
    

    <div className="font-sans text-gray-800 dark:bg-slate-800">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-indigo-200 to-slate-300 dark:from-slate-800 dark:to-purple-900 text-slate-900 dark:text-white py-20 text-center px-6">
  <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
  <p className="max-w-xl mx-auto text-lg text-slate-800 dark:text-slate-300">
    We're here to help you with all your elevator needs. Let's get in touch!
  </p>
</section>


      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
          Why Choose Us
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              aria-label={`Feature - ${feature.title}`}
              className="bg-white shadow-lg rounded-[3px] p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] dark:bg-slate-800 "
            >
              <div className=" text-center w-full">
              {feature.icon}
                </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    
    </>
  );
};

export default AboutUsPage;
