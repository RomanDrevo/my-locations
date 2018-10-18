export default class Category {
    constructor(data) {
        Object.assign(this, data);
    }

    static reconstituteFrom(json) {
        // const state = {
        //     id: json['id'],
        //     name: json['name'],
        //     src: json['imageUrl']
        // };
        const state = {
            id: json['id'],
            name: json['name'],
            email: json['email'],
            address: json['address'],
            phone: json['phone'],
            website: json['website'],
            company: json['company'],
            image: json['imageUrl']

        };
        return new Category(state);
    }
}
