import React from 'react';
import './shop-cart-table.css'
import { connect } from 'react-redux';
import {
    bookAddedToCart,
    bookRemoveFromCart,
    allBooksRemoveFromCart
} from '../../actions'

const ShopCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const RenderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>

                    <button onClick={() => onIncrease(id)}
                        className="btn btn-outline-success">
                        <i className="bi bi-plus-circle"></i>
                    </button>
                    <button onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning">
                        <i className="bi bi-dash-circle"></i>
                    </button>
                    <button onClick={() => onDelete(id)}
                        className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
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
                    {
                        items.map(RenderRow)
                    }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}


const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);