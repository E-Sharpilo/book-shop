import updateBookList from './book-list';
import updateShopingCart from './shoping-cart'
const reducer = (state, action) => {
    return {
        booksList: updateBookList(state, action),
        shoppingCart: updateShopingCart(state, action)
    }
}
export default reducer