import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import "../css/ContentPage.css"
export default class ContentPage extends Component {
    render() {
        return (
            <div className="content-container">
                <Row>
                    <Col sm={5}>
                        <div className="left-content" />
                    </Col>
                    <Col sm={7}>
                        <div className="right-content">
                            <div className="heading-title">
                                <h3>
                                    <span>
                                        <span>For Her</span>
                                    </span>
                                </h3>
                                <hr />
                            </div>
                            <div className="products">
                                <div className="product-item">
                                    <div className="product-img-wrap">
                                        <img src="https://cdn.shopify.com/s/files/1/0025/5082/5007/products/5559315300_2_6_1-yellow_360x.jpg?v=1538643905" alt="" />
                                        <span className="product-sale">-13%</span>
                                        <img className="product-img-hover" src="https://cdn.shopify.com/s/files/1/0025/5082/5007/products/5559315300_2_2_1_360x.jpg?v=1538643905" alt="" />
                                        <span className="quick-view"></span>
                                        <span className="add-cart"></span>
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-name">
                                            <a>Sweater personality</a>
                                        </div>
                                        <div className="product-price">
                                            <span>
                                                <del>$90</del>
                                                <ins>$79</ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
