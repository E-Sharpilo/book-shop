import React from 'react';
import './shop-cart-table.css'

const ShopCartTable = () => {
    return (
        <div className="shop-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Production-Ready Microservices</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>

                            <button className="btn btn-outline-success">
                                <i className="bi bi-plus-circle"></i>
                            </button>
                            <button className="btn btn-outline-warning">
                                <i className="bi bi-dash-circle"></i>
                            </button>
                            <button className="btn btn-outline-danger">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: $80
            </div>
        </div>
    )
}

export default ShopCartTable