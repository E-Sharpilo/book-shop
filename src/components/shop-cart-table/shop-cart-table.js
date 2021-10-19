import React from 'react';
import './shop-cart-table.css'

const ShopCartTable = () => {
    return (
        <div className="shop-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>Production-Ready Microservices</td>
                    <td>2</td>
                    <td>$40</td>
                    <td>

                        <button className="btn btn-outline-success">
                            <i class="bi bi-plus-circle"></i>
                        </button>
                        <button className="btn btn-outline-warning">
                            <i class="bi bi-dash-circle"></i>
                        </button>
                        <button className="btn btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tbody>
            </table>
            <div className="total">
                Total: $80
            </div>
        </div>
    )
}

export default ShopCartTable