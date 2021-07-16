import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.png';

class Form extends Component {
      render() {
        return (
        <div>
            <h3 class="py-3 py-md-5" style={{"color": "#20237C", "font-weight": "bold" }}>Check Your Eligibility Here</h3>
            <Container>
                <Row>
                    <Col lg={4}>
                        <label for="firstName1" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName1" aria-describedby="emailHelp">
                        </input>
                    </Col>

                    <Col lg={4}>
                        <label for="lastName1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName1" aria-describedby="emailHelp">
                        </input>

                    </Col>

                    <Col lg={4}>
                        <label for="phone1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="phone1" aria-describedby="emailHelp">
                        </input>

                    </Col>

                    <Col lg={4}>
                        <label for="country1" class="form-label">Origin Country</label>
                        <input type="text" class="form-control" id="country1" aria-describedby="emailHelp">
                        </input>

                    </Col>

                    <Col lg={4}>
                        <label for="email1" class="form-label">E-mail</label>
                        <input type="text" class="form-control" id="email1" aria-describedby="emailHelp">
                        </input>

                    </Col>

                    <Col lg={4}>
                        <label for="loanType1" class="form-label">Type of loan</label>
                        <select class="form-select" id="loanType1" aria-label="Default select example"
                            onchange="adjustFields(1,this)">
                            <option selected value="Pre Approval Letter">Pre Approval Letter</option>
                            <option value="New purchase loan">New purchase loan</option>
                            <option value="Cash or refinance loan">Cash or refinance loan</option>
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <button class="btn btn-default"
                            style= {{ "background-color": "#3D5AFE", "color": "white", "padding": "10px 110px", "white-space": "nowrap"}}
                            onclick="apply1()">
                            Apply Now
                        </button>
                    </Col>
                </Row>

            </Container>
        </div>
        );
      }
}

export default Form;