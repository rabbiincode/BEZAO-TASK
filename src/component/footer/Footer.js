import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {

  let socials
  socials = 
            <div className='flex space-x-5 pb-7'>
              <span className='rounded-full border-4 p-2 bg-[#dac59d] text-black'>
                <FaFacebookF/>
              </span>
              <span className='rounded-full border-4 p-2 bg-[#c7bca8] text-black'>
                <RiInstagramFill/>
              </span>
              <span className='rounded-full border-4 p-2 bg-[#dac59d] text-black'>
                <AiOutlineTwitter/>
              </span>
            </div>
    
  return (
    <div className='footer bg-gray-200'>
      <Container>
        <Row className='pt-20 pb-12'>
          <Col>
            <div className='pl-10 lg:flex lg:justify-around lg:w-9/12 lg:items-start'>
              <div className='flex items-center'>
                <img 
                  src='./1.png' 
                  alt='img' 
                  width={50} 
                  height={50}
                  className='cursor-pointer object-contain rounded-t-2xl'
                />
                <span className='text-1xl font-bold pl-1'>Meals</span>
              </div>

              <div className='flex pt-20 pb-10 space-x-24 text-sm lg:pt-0'>
                <ul className='space-y-5'>
                  <li className='font-bold'>Company</li>
                  <li>Blog</li>
                  <li>About Us</li>
                  <li>Contact us</li>
                </ul>

                <ul className='space-y-5'>
                  <li className='font-bold'>Services</li>
                  <li>FAQs</li>
                  <li>Our Menu</li>
                </ul>
              </div>      

              <div className='flex lg:hidden'>
                {socials}
              </div>     

            </div>
            <div class="w-9/12 flex  m-auto border-b border-gray-500"></div>
          </Col>
          
          <Col className='pt-5 lg:flex lg:justify-around lg:w-9/12'>
            <div className='text-center text-sm opacity-70'>
              &copy;2022 Meals.All rights reserved.
            </div>

            <div className='hidden lg:flex'>
              {socials}
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer