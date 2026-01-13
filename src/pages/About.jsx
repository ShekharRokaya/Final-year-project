import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to our healthcare platform, where your health and well-being are our top priorities. We are committed to providing reliable, accessible, and high-quality medical services to patients through modern technology and experienced healthcare professionals.</p>
          <p>Our platform is designed to make healthcare simple and convenient. Patients can easily find qualified doctors, book appointments online, and manage their medical visits without hassle. We believe that everyone deserves timely medical care, and our goal is to bridge the gap between patients and doctors.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our mission is to make healthcare more transparent, efficient, and patient-centered. We continuously strive to enhance our services, ensuring trust, safety, and satisfaction for both patients and doctors.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>We are dedicated to providing a seamless and reliable healthcare experience for every patient.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>We work with qualified, experienced, and verified doctors from various medical specialties to ensure high-quality and professional care.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>We believe that every patient is unique, and so are their healthcare needs</p>
        </div>
      </div>

    </div>
  )
}

export default About