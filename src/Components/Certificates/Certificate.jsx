import React from 'react'
import Sukuna from "../Round3.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';

const data=[
    {
      img: Sukuna,
      Coursename:"Web developent ",
      Description:"Udemy ahkkka supera nadathunaga aprom i learned it very weell so thn xaand get me employed",
      
    },
    {
      img: Sukuna,
      Coursename:"Sudha",
      Description:"asdasdasd",
      
    },
    {
      img: Sukuna,
      Coursename:"Sudha",
      Description:"asdasdasd",
      
    }, 
]

const Certificate = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1536) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleView = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
      <h2 className="text-center text-xl font-bold sm:text-3xl lg:text-2xl mb-8 lg:mb-12">Certifications</h2>
      <div className="my-8 sm:my-12 lg:my-16">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white h-full rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="h-48 sm:h-56 lg:h-56 xl:h-56 flex justify-center items-center">
                  <img src={d.img} alt={d.Coursename} className='w-full h-full object-cover'/>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="font-semibold text-lg lg:text-xl mb-2 line-clamp-1">{d.Coursename}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-2">{d.Description}</p>
                  <button 
                    onClick={() => handleView(d)}
                    className="w-full bg-blue-500 text-white py-2 lg:py-3 rounded-md hover:bg-blue-600 transition duration-300">View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {modalOpen && selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 lg:p-8 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-6">
                <img 
                  src={selectedCertificate.img} 
                  alt={selectedCertificate.Coursename} 
                  className="w-full h-auto rounded-lg mb-4 lg:mb-0"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{selectedCertificate.Coursename}</h2>
                <p className="text-gray-700 mb-4 text-base lg:text-lg">{selectedCertificate.Description}</p>
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Certificate