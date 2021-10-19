export default class ShopService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 55,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
            }
        ];
    }
}