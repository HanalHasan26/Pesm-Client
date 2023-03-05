import { Box, Container } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SItemsMobile from './SItemsMobile'

const PtableMobile = () => {
  return (
    <>
       <Container >
       <Box sx={{height:"445px",boxShadow:5}} bgcolor={"#ebedf0"} mt={"40px"} borderRadius={"15px"}>
            <Container maxWidth={false}>
                <Box>
                <Row>
                    <Col>
                    <SItemsMobile/>
                  
                    </Col>

                </Row>
                </Box>
            </Container>
       </Box>
</Container> 
    </>
  )
}

export default PtableMobile