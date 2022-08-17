import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TbMessageDots } from 'react-icons/tb';
import { menuData } from './menuData.js'
import './menu.scss'

const Menu = () => {
  return (
    <div className='menu p-8 relative'>

    <span className='inline-block rounded-full border-4 p-2  bg-[#ff0707] text-white absolute right-3 lg:hidden'>
      <TbMessageDots style={{fontSize:'25px'}} className=''/>
    </span>

     <Container>
     <Row className="pt-20">
      <div className='lg:flex lg:justify-around'>
        <div className='space-y-1'>
          <h3 className='text-[#dc2626] font-semibold'>MENU</h3>
          <h1 className='text-2xl font-bold'>Current menu</h1>
        </div>

        <div className='mt-6 inline-block '>
          <ul 
            className='flex items-center space-x-5 p-1 pr-2 border border-gray-500 rounded-md'
          >
            <li className='bg-[#dc2626] text-white pl-2 pr-2 pt-1 pb-1 rounded-md font-semibold'>All</li>
            <li>Rice</li>
            <li>Beans</li>
            <li>Fries</li>
            <li>Swallow</li>
            <li>Others</li>
          </ul>
        </div>
      </div>

      <div className='list space-x-5'>
          {menuData.map((data) => (
            <Col md={6} sm={6} lg={4} key={data.id}>
              <a href={data.link}>
                <div className="box">
                  <img src={data.img} alt="img" className='img-fluid m-auto'/>
                  <div className="info pt-3 pb-3">
                    <div className="caption space-y-2 px-3">
                      <h4 className='font-semibold'>{data.name}</h4>
                      <p className='text-sm opacity-50'>{data.desc}</p>
                      <p>
                        <span className='pr-1'>&#8358;</span>
                        {data.price}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          ))}
      </div>

      <div className='flex justify-center'>     
        <button className='p-2 pl-3 pr-3 bg-[#fa0303] rounded-3xl text-white lg:flex'>
          Full Menu
        </button>
      </div>

     </Row>
     </Container>
    </div>
  )
}

export default Menu