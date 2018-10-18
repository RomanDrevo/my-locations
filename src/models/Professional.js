export default class Professional {
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
            secondName: json['secondName'],
            email: json['email'],
            address: json['address'],
            phone: json['phone'],
            website: json['website'],
            company: json['company'],
            image: json['image'],
            category: json['category']

        };
        return new Professional(state);
    }
}
