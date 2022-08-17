import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaQuoteRight } from 'react-icons/fa';
import './feedback.scss'

const FeedBack = () => {
  return (
    <div className='feedback pl-8'>
      <Container className='percent'>
        <Row className='pt-20 pb-20 lg:flex'>
          <Col className='space-y-3 pb-10'>
            <h1 className='font-semibold text-3xl '>What our customers say about us</h1>
            <p className=''>
              We are operate a policy of 'customers first.
              our goal is the full satisfaction of our customers
            </p>
          </Col>

          <Col>
            <div className='bg-white rounded-2xl pl-5 pb-6 relative lg:flex lg:pt-4 lg:pl-0'>
              <div className='flex items-center pt-6 space-x-4 lg:flex-col'>

                <img src='https://randomuser.me/api/portraits/men/11.jpg'
                     alt='img'
                     className='border w-16 lg:w-20 rounded-full'
                />

                <span className='space-y-2 lg:pl-10'>
                  <h2 className='font-bold lg:w-7/12'>John Samson</h2>
                  <h4 className='text-sm'>ENUGU, NIGERIA</h4>
                </span>

                <FaQuoteRight className='absolute top-6 right-6 text-[#ff0707]' />

              </div>
              
              <p className='width pt-5 lg:pt-8 lg:block lg:w-5/12 lg:pr-4'>
                Definitely one of the best foods out there and also
                they have excellent customer services with timely delivery.
                I will definitely recommend them to anyone any time.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FeedBack