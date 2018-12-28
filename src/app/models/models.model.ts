export class Product {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public img: string;
    public sale: number;
    public description: string;
    public size: string;
    public color: string;
    public status: boolean;
    public highlights: boolean;
    public sex: boolean;

    constructor(
        name: string,
        category: string,
        price: number,
        img: string,
        sale: number,
        description: string,
        size: string,
        color: string,
        status: boolean,
        highlights: boolean,
        sex: boolean) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
        this.sale = sale;
        this.description = description;
        this.size = size;
        this.color = color;
        this.status = status;
        this.highlights = highlights;
        this.sex = sex;
    }
}
export class Collection {
    public id: number;
    public name: string;
    public description: string;
    public img: string;
    public animation: string;
    constructor(
        name: string,
        description: string,
        img: string,
        animation: string
    ) {
        this.name = name,
            this.description = description,
            this.img = img,
            this.animation = animation
    }
}
export class MenuHeader {
    public id: number;
    public name: string;
    public path: string;
    public icon: string;
    constructor(name: string, path: string, icon: string) {
        this.name = name;
        this.path = path;
        this.icon = icon;
    }
}
export class Slider {
    public id: number;
    public name: string;
    public img: string;
    public class_active: string;
    constructor(name: string, img: string, class_active: string) {
        this.name = name;
        this.img = img;
        this.class_active = class_active;
    }
}