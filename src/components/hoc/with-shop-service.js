import React from 'react';
import { ShopServiceConsumer } from '../shop-service-context'

const withShopService = () => (Wrapped) => {
    return (props) => {
        return (
            <ShopServiceConsumer>
                {
                    (booksService) => {
                        return <Wrapped {...props} booksService={booksService} />
                    }
                }
            </ShopServiceConsumer>
        )
    }
}

export default withShopService