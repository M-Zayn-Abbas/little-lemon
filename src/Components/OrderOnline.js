import React from 'react';

function OrderOnline() {
    return (
        <div className="order-online">
            <h2>Order Online</h2>
            <p>Place your order online and enjoy our delicious dishes from the comfort of your home.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="address">Address:</label>
                <textarea id="address" name="address" rows="4" required></textarea>

                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default OrderOnline;
