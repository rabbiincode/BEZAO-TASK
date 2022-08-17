import { Col, Container, Row } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi';
import { TbMessageDots } from 'react-icons/tb';
import './home.scss'

const Home = () => {
  return (
    <div className='home pt-10 bg-[#ff0707] lg:flex lg:justify-around lg:items-center lg:bg-[#fff]'>
      <Container>
        <Row className='lg:flex lg:items-center pb-20 relative'>
          <Col md={6}>
            <div className='deli text-white text-start lg:text-black space-y-4'>
              <h1 className='lg:black'>Delicious meals at your convenience</h1>
              <h3 className='lg:black'>Order your meals from us and we will have it delivered at your doorstep</h3>

              <div className='relative search lg:hidden'>
                <h2>Instant Order</h2>

                <label className='inline-block min-w-full'>
                  <FiSearch 
                    className='absolute text-gray-400 mt-4 ml-4 w-7 h-7 pointer-events-none'
                  />
                  <input
                    type='text'
                    placeholder='Search for meal'
                    className='outline-none pl-12 text bg-[#fff] focus:bg-[#fff] min-w-full rounded px-5 py-3
                               border border-gray-500 border-solid border-inherit'
                  />
                 
                </label>
              </div>

              <button className='p-2 pl-20 pr-20 bg-[#ff0707] rounded-3xl text-white hidden lg:flex'>
                Get Started
              </button>
            </div>
          </Col>

          <Col md={6}>
            <div>
              <img 
                src='./11.jpg'
                alt='img'
                width={400}
                height={400}
                className='img-fluid m-auto relative rounded-full border-4 p-4 border-[#ff0707]'
              />        
            </div>    
          </Col>

           <span className=' hidden lg:flex lg:rounded-full lg:border-4 lg:p-2 lg:bg-[#ff0707] lg:text-white lg:absolute lg:bottom-2 lg:right-0 lg:mb-10'>
              <TbMessageDots style={{fontSize:'25px'}} className=''/>
           </span>

        </Row>
      </Container>
    </div>
  )
}

export default Home