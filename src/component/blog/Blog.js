import { Col, Container, Row } from 'react-bootstrap'
import { blogData } from './blogData.js'
import './blog.scss'
//FaQuoteRight
const Blog = () => {
  return (
    <div className='blog pt-16'>
      <Container>
        <Row className=''>

          <Col>
            <div className='flex flex-col items-center space-y-2'>
              <h1 className='font-bold text-2xl'>Blog Our Latest News</h1>
              <h3 className='w-5/12 text-center'>
                Have you ever browsed food like mine and
                wondered how to start a food blog of your own?
              </h3>
            </div>
          </Col>

          <Col lg={4} md={1}>
            <div className='contain'>
             {blogData.map((data) => (
              <div key={data.id} className='card border-2 rounded-md border-gray-300'>
                <img src={data.img} alt='img' className='img-fluid m-auto pt-3'/>
                <div className='space-y-2 p-5'>
                  <h3 className='text-sm pt-4'>
                    <span className='text-[#dc2626] pr-2'>Design</span>
                      {data.date}
                  </h3>
                  <h2 className='font-bold pb-4'>{data.name}</h2>
                  <p className='text-sm opacity-70'>{data.desc}</p>
                  <span className='text-[#dc2626] text-sm font-semibold '>READ MORE</span>
                </div>
               
              </div>
              ))}
            </div>
          </Col>

        </Row>
      </Container>


    </div>
  )
}

export default Blog