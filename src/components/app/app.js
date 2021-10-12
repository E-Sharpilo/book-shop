import React from 'react';
import './app.css'

import withShopService from '../hoc'

const App = ({ booksService }) => {
    console.log(booksService.getBooks());
    return <div>App</div>
}

export default withShopService()(App)