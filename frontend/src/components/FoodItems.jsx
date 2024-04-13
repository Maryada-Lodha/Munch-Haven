import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';

const FoodItems = ({ query }) => {
    const [foodItem, setFoodItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);

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
    };

    useEffect(() => {
        getFoodData();
    }, []);

    return (
        <>
            {foodCategory.map((category) => (
                <div key={category._id}>
                    <div className='fs-3' style={{ marginTop: '15px', marginBottom: '3px', marginLeft: '30px' }}>
                        {category.CategoryName}
                        <hr />
                    </div>
                    {foodItem.length !== 0 ? (
                        foodItem
                            .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(query.toLowerCase()))
                            .map((filteredItem) => (
                                <FoodCard key={filteredItem._id} food={filteredItem} />
                            ))
                    ) : (
                        <div>No Items Found in this Category</div>
                    )}
                </div>
            ))}
        </>
    );
};

export default FoodItems;
