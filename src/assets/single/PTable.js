import { Box, Container } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SItems from './SItems'
import SItems1 from './SItems1'

const PTable = () => {
  return (
    <>
<Container >
       <Box sx={{height:"510px",boxShadow:5}} bgcolor={"#ebedf0"} mt={"40px"} borderRadius={"15px"}>
            <Container maxWidth={false}>
                <Box>
                <Row>
                    <Col>
                    <SItems/>
                    </Col>
                    <Col>
                    <SItems1/>
                    </Col>
                </Row>
                </Box>
            </Container>
       </Box>
</Container>
    </>
  )
}

export default PTable