import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.png';

import connection_logo from '../images/Connection.svg';
import arrow_logo from '../images/ARROW.svg';
import online_logo from '../images/Short online.svg';
import talk_logo from '../images/LETS TALK.svg';
import e_closing_logo from '../images/E-CLOSING.svg';
import funded_logo from '../images/loan_funded.svg';

class HowItWorks extends Component {
      render() {
        return (
        <div>
            <Row> <h3>How It Works?</h3> </Row>
            <Row>
                <p>
                The loan process will only take <b>14 days</b> in total, and only <b>90 minutes</b>
                of your own time.
                </p>
            </Row>

            <Row>
                <Col lg={1}>
                    <Row> <img src={connection_logo} alt=""/> </Row>
                    <Row> <h4>Connection Via E-mail</h4> </Row>
                    <Row>
                        <p> You will receive an email a link to enter your loan application portal </p>
                    </Row>
                </Col>

                <Col lg={1}> <img src={arrow_logo} alt=""/> </Col>

                <Col lg={1}>
                    <Row> <img src={online_logo} alt=""/> </Row>
                    <Row> <h4>Short Online Application</h4> </Row>
                    <Row>
                        <p>
                            Simple and quick via the portal and immediately get informed if you are pre-qualified
                        </p>
                    </Row>
                </Col>

                <Col lg={1}> <img src={arrow_logo} alt="" /></Col>

                <Col lg={1}>
                    <Row> <img src={talk_logo} alt="" /> </Row>
                    <Row> <h4>Let's Talk</h4> </Row>
                    <Row>
                        <p>
                            We will have a video conference and together we will complete the onboarding process
                        </p>
                    </Row>
                </Col>

                <Col lg={1}> <img src={arrow_logo} alt="" /> </Col>

                <Col lg={1}>
                    <Row> <img src={e_closing_logo} alt="" /></Row>
                    <Row> <h4>E-Closing</h4> </Row>
                    <Row>
                        <p>
                            Sign your loan documents online from the comfort of your home
                        </p>
                    </Row>
                </Col>

                <Col lg={1}> <img src={arrow_logo} alt="" /> </Col>

                <Col lg={1}>
                    <Row> <img src={funded_logo} alt="" /> </Row>
                    <Row> <h4 style={{"color": "#A24FF7", "white-space": "nowrap"}}>We Fund Your Loan</h4> </Row>
                </Col>
            </Row>
        </div>
        );
      }
}

export default HowItWorks;