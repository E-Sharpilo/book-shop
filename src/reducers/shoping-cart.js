const updateCartItem = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}
const updateItem = (book, item = {}, quantity) => {
    const { id = book.id, count = 0, title = book.title, total = 0 } = item
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}
const updateOrder = (state, bookId, quantity) => {
    const { booksList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find(({ id }) => id === bookId)
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
    const item = cartItems[itemIndex];
    const newItem = updateItem(book, item, quantity)
    return {
        orderTotal: 0,
        cartItems: updateCartItem(cartItems, newItem, itemIndex)
    }
}
const updateShopingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'BOOK_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_BOOKS_REMOVE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.shoppingCart
    }
}

export default updateShopingCart;