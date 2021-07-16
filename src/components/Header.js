import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.png';

class Header extends Component {
      render() {
        return (
        <div>
            <Row>
                <Col>
                    <img src={logo} alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 style= {{ "font-size": "34px", "font-weight": "bold" }}>US financing for foreign investors</h1>
                    <p style={{ "font-size": "24px" }}>No Credit Score, SSN, Citizenship, or Residency Required </p>
                </Col>
            </Row>
        </div>
        );
      }
}

export default Header;