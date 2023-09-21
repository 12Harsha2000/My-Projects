

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Row, Col, Container, Breadcrumb} from "react-bootstrap"
import Example from "./Example"

function App() {
  return (
    <div className="App">
      <p>REACT BOOTSTRAP</p>
      <Button variant='secondary' size='lg'>View</Button>
      <Alert>Alert</Alert>
      <Example />
<Breadcrumb>
  <Breadcrumb.Item href="#">Google</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>


<Container className='container'>
   <Row className='row'>
    <Col className='coloumn' lg={3}>col 1</Col>
    <Col className='coloumn' lg={3}>col 2</Col>
    <Col className='coloumn' lg={3}>col 3</Col>
    <Col className='coloumn' lg={3}>col 4</Col>
    
   </Row>
   
 
</Container>
    </div>
  );
}

export default App;
