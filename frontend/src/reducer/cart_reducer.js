const cartReducer = (state, action) => {
    switch(action.type) {
        case "Add_to_Cart":
            return [...state, {id: action.id, name: action.name, size: action.size, qty: action.qty, price: action.price, img: action.img}];
        
        case "Update_Item":
            return state.map(food => 
                food.id === action.id && food.size === action.size 
                    ? { ...food, qty: food.qty + action.qty, price: food.price + action.price }
                    : food
            );

        case "Remove_from_Cart":
            let newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;

        default:
            console.log("Reducer Error");
            return state;
    }
}

export default cartReducer;
