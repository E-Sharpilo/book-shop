export default class ShopService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard'
            }
        ];
    }
}