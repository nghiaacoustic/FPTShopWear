import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

import "../css/CarouselPage.css"

const CarouselPage = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://cdn.shopify.com/s/files/1/0025/5082/5007/files/slider01.jpg?v=1538736441"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <>
                        <h5>ELESSI STORE</h5>
                        <h2 >Autum<br /> &amp; Winter 2018</h2>
                        <Button variant="danger">Shop now</Button>
                    </>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://cdn.shopify.com/s/files/1/0025/5082/5007/files/slider03.jpg?v=1538736509"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <>
                        <h5>ELESSI STORE</h5>
                        <h2>Looking for<br /> the best price</h2>
                        <Button variant="danger">Shop now</Button>
                    </>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://cdn.shopify.com/s/files/1/0025/5082/5007/files/slider02.jpg?v=1538736465"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <>
                        <h5>NEW FASHION</h5>
                        <h2>Spring Summer<br /> Collection</h2>
                        <Button variant="danger">Shop now</Button>
                    </>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPage
