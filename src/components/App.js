import './App.css';
import LoanPrograms from './LoanPrograms';
import LoanGuidelines from './LoanGuidelines';
import WhyChoose from './WhyChoose';
import HowItWorks from './HowItWorks';

import Header from './Header';
import Form from './Form';

import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">


    <Row>
        <Col lg={2}/>
        <Col lg={8}> <Header /> </Col>
        <Col lg={2}/>
    </Row>

    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <h2 style={{ "font-size": "24px", "text-align": "center", "color": "#20237C", "font-weight": "bold" }}>
                    A new collaboration between * RentToRetierment * and a progressive,
                    motivated Private Lender specializing in financing forign nationals.
                </h2>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-md-10">
                <p style={{ "color": "#60617E", "font-size": "20px" }}>
                    The option is accessible to anyone who wants to get a mortgage in the U.S. and can be provided in
                    conjunction with RentToRetierment's services.
                </p>
            </div>
        </div>
    </section>

    <Row>
        <Col lg={2}/>
        <Col lg={8}> <LoanPrograms /> </Col>
        <Col lg={2}/>
    </Row>

    <Row>
        <Col lg={2}/>
        <Col lg={8}> <LoanGuidelines /> </Col>
        <Col lg={2}/>
    </Row>

    <Row>
        <Col lg={2}/>
        <Col lg={8}> <Form /> </Col>
        <Col lg={2}/>
    </Row>

    <Row>
        <Col lg={2}/>
        <Col lg={8}> <WhyChoose /> </Col>
        <Col lg={2}/>
    </Row>

    <Row>
        <Col lg={1}/>
        <Col lg={10}> <HowItWorks /> </Col>
        <Col lg={1}/>
    </Row>

    <Row>
        <Col lg={2}/>
        <Col lg={8}> <Form /> </Col>
        <Col lg={2}/>
    </Row>

    </div>
  );
}

export default App;
