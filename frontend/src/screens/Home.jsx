import React from 'react'

import Navbar from '../components/CustomNavbar'
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer'
import CustomCarousel from '../components/CustomCarousel';


export default function Home() {
    return (
        <div>
            <Navbar />
            <CustomCarousel />
            <div className='food-card-container' style={{display: 'flex', flexWrap: 'wrap'}}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            </div>
            <Footer />
        </div>
    )
}
