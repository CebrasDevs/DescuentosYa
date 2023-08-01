'use client'

// const allShoppingItems = useSelector((state)=> state.allShoppingItems); 

export default function ShoppingCart (){
    return(
        <div>
            <h2>Product name</h2>
            <h2>Price</h2>
            <h2>Amount</h2>
            <h2>Value</h2>
            <button>Delete</button>
            
            <div>
                <button>Checkout</button>
            </div>
        </div>
    )
};