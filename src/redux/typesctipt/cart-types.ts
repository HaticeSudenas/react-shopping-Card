    export interface Product {
        id: number;
        title: string;
        image: string;
        price:number;
    }

    export interface cartProduct {
        quantity: number;
        product: Product;
    }

