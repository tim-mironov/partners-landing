import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class LoanGuidelines extends Component {
      render() {
        return (
        <div>
            <Col style={{ "box-shadow": "0 0 22px 0 rgb(37, 72, 153,.13)", "border-radius": "17px"}}>
                <h4 class="mb-4" style={{ "color": "#3D5AFE", "font-size": "20px" }}>Loan Guidelines</h4>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <span>Property type</span>
                        </Col>
                        <Col lg={6}>
                            <span>Single Family, Townhome, 2-4 units</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <span>Loan To Value</span>
                        </Col>
                        <Col lg={6}>
                            <span>Up to 60%</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <span>Interest</span>
                        </Col>
                        <Col lg={6}>
                            <span>Starting at 4.5% (Fixed Rates)</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <span>LLC Required</span>
                        </Col>
                        <Col lg={6}>
                            <span>check</span>
                        </Col>
                    </Row>

                </Container>
            </Col>
        </div>
        );
      }
}

export default LoanGuidelines;