import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import double_logo from '../images/Double.svg';
import higher_cash_logo from '../images/Higer cash.svg';
import lower_risk_logo from '../images/Lower risk.svg';
import irs_logo from '../images/irs.svg';
import dd_logo from '../images/dd.svg';
import tax_logo from '../images/TAX.svg';

class WhyChoose extends Component {
      render() {
        return (
        <div>
            <Row>
                <h3 style= {{ "color": "#20237c", "font-size": "32px", "font-weight": "bold" }}>
                    Why Investors Choose To Finance?
                </h3>
            </Row>

            <Row>
                <Col lg={4}>
                    <img src={double_logo} alt=""></img>
                    <span>Double your buying power</span>
                </Col>
                <Col lg={4}>
                    <img src={higher_cash_logo} alt=""></img>
                    <span>Higher cash on cash returns</span>
                </Col>
                <Col lg={4}>
                    <img src={lower_risk_logo} alt=""></img>
                    <span>Lower risk by diversity</span>
                </Col>
                <Col lg={4}>
                    <img src={irs_logo} alt=""></img>
                    <span>Loan costs are a deductible expense</span>
                </Col>
                <Col lg={4}>
                    <img src={dd_logo} alt=""></img>
                    <span>Experts due diligence on your investments</span>
                </Col>
                <Col lg={4}>
                    <img src={tax_logo} alt=""></img>
                    <span>Cash-out without paying sales tax</span>
                </Col>
            </Row>
        </div>
        );
      }
}

export default WhyChoose;