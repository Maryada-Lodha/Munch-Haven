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
            <FoodCard />
            <Footer />
        </div>
    )
}
