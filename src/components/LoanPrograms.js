import React, {Component} from 'react';

import pre_approve_logo from '../images/Pre-Approval.svg';
import new_purchase_logo from '../images/New Purchase SVG.svg';
import cash_out_logo from '../images/Cash-out Refinance SVG.svg';
import portfolio_logo from '../images/Portfolio Finance SVG.svg';

import { Row, Col } from 'reactstrap';

class LoanPrograms extends Component {
      render() {
        return (
        <div>
            <Row>
                <Col>
                    <h2 style={{"color": "#20237C", "font-size": "32px", "font-weight": "bold" }}>Loan Programs</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style= {{"font-size": "18px" }} >
                        There is a variety of loan programs, to adjust to your needs, in order to increase your profits.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col lg={3} justify-content-center align-items-center>
                    <Row> <img src={pre_approve_logo} alt="" />  </Row>
                    <Row> <h4>Pre-Approval</h4> </Row>
                    <Row>
                        <p style={{ "color": "#60617E", "font-size": "14px"}}>
                            If you have not yet found the property you wish to purchase, you can obtain in a short
                            online process, a pre-approval with which you can know the amount of the loan you can
                            receive in the future when you find the property you would like to purchase.
                        </p>
                    </Row>
                </Col>

                <Col lg={3} justify-content-center align-items-center>
                    <Row> <img src={new_purchase_logo} alt="" />  </Row>
                    <Row> <h4>New Purchase</h4> </Row>
                    <Row>
                        <p style={{ "color": "#60617E", "font-size": "14px"}}>
                                The amount of financing is determined by the purchaseprice - LTC (Loan To
                                Coast)*suitable for properties requiringcosmetic renovation only, with future tenants in
                                line
                        </p>
                    </Row>
                </Col>

                <Col lg={3} justify-content-center align-items-center>
                    <Row> <img src={cash_out_logo} alt="" />  </Row>
                    <Row> <h4>Cash-out Refinance</h4> </Row>
                    <Row>
                        <p style={{ "color": "#60617E", "font-size": "14px"}}>
                                The amount of financing isdetermined by the value ofthe property - LTV (Loan to
                                Value)The property must be leased and generate steady cash flow.
                        </p>
                    </Row>
                </Col>

                <Col lg={3} justify-content-center align-items-center>
                    <Row> <img src={portfolio_logo} alt="" />  </Row>
                    <Row> <h4>Portfolio Finance</h4> </Row>
                    <Row>
                        <p style={{ "color": "#60617E", "font-size": "14px"}}>
                                If you have not yet found the property you wish to purchase, you can obtain in a short
                                online process, a pre-approval with which you can know the amount of the loan you can
                                receive in the future when you find the property you would like to purchase.
                        </p>
                    </Row>
                </Col>

            </Row>

        </div>
        );
      }
}

export default LoanPrograms;