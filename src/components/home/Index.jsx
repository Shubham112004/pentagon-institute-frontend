import React from 'react'
import Carousel from './Carousel'
import Vision from './Vision'
import CoursesOffered from './CoursesOffered'
import WhyChooseUs from './WhyChooseUs'
import Achievements from './Achievements'
import Faculty from './Faculty'
import Testimonial from './Testimonial'
import CoursesPage from '../courses/Index'

const Index = () => {
    return (
        <div className="home-container">
            <Carousel />
            <Vision />
            <CoursesOffered />
            <WhyChooseUs />
            <Achievements />
            <Faculty />
            <Testimonial />
            {/* <CoursesPage /> */}
        </div>
    )
}

export default Index