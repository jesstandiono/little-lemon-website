import React from "react";
import food from "./Food";
import Swal from "sweetalert2";

const Order = () => {

    const handleOrder = (id) => {
        console.log(id);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: "Do you want to confirm order?",
            text: "You won't be able to revert this!",
            icon: "Warning",
            showCancelButton: false,
            confirmButtonText: "Order it!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    "Ordered!",
                    "Your order has been confirmed.",
                    "Success!"
                )
            }
        })
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Week Specials!</h2>
                <button>Online Menu</button>
            </div>

            <div className="cards">
                {food.map((food) => (
                    <div key={food.id} className="menu-items">
                        <img src={food.image} alt="" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{food.title}</h5>
                                <h5>{food.price}</h5>
                            </div>
                            <p>{food.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(food.id)}>Order Now!</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;