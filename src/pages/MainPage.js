import React, { Component } from 'react'
import Header from '../components/Header/HeaderPage'
import Carousel from '../components/Carousel/CarouselPage'
import ContentPage from '../components/Content/ContentPage'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <ContentPage/>
            </div>
        )
    }
}
