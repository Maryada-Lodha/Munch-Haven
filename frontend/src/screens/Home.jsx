import Navbar from '../components/CustomNavbar'
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer'
import CustomCarousel from '../components/CustomCarousel';
import { useState, useEffect } from 'react';
import FoodItems from '../components/FoodItems';


export default function Home() {

    const [foodItem, setFoodItem] = useState([])
    const [foodCategory, setFoodCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState("")


    const getFoodData = async () => {
        const response = await fetch("http://localhost:5000/api/fooditems", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();
        setFoodItem(json[0]);
        setFoodCategory(json[1]);

        console.log(foodItem);
        console.log(foodCategory);
    }


    function handleSearch(query) {
        setSearchQuery(query);
        // This function is the set the value of the searchQuery (which is used to filter food items according to the value in search bar) with the value in the search bar coming from child CustomCarousel.jsx
    }


    useEffect(() => {
        getFoodData();
    }, []);


    return (
        <>
            <Navbar />
            <CustomCarousel onSearch={handleSearch}/>
            <FoodItems query={searchQuery} />
            <Footer />
        </>
    )
}