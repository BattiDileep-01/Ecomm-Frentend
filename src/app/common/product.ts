export class Product {

    constructor(

       public id: number,
       public name: String,
       public description: String,
       public title: String,
       public unitPrice: number,
       public imageUrl: String,
       public active: String,
       public unitsInStock: number,
       public dateCreated: Date,
       public lastUpdated: Date,
    ){}
    
}
