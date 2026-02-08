import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TitleHead = ({title,view}) => {
  return (
    <div>
        <Row>
            <Col className='text-start' >
            <div className='Title-4-Bold text-dark'>{title}</div>
            
            </Col>
            <Col className='text-end'>
            <p className='Button-Small gray-100'>{view}</p>

            </Col>

        </Row>
      
    </div>
  )
}

export default TitleHead
 