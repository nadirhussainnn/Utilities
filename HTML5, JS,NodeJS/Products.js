
module.exports=class Products {
  constructor() {
  
    this.products=[]
}

  loadAllProducts() {
    this.products = [
      {
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
        id:1
      },
      {
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
        id:2
    },
      {
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
        id:3
    },
    ];
    return this.products
    }

    addProduct(newProd){
        this.products.push(newProd)
    }
}