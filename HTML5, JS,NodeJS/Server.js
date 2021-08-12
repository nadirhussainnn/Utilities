
const express=require('express')
const app=express()
const cors=require('cors')
const PORT=5000

//const allProds=require('./api/products')

const ProductClass=require('./Products')

let productObj=new ProductClass()


app.use(cors())
app.use(express.json())

//app.use('/', allProds)

app.get('/api/products',function(req, resp){

    const prods=productObj.loadAllProducts()
    resp.send({products: prods})
})

app.get('/api/products/:id',(req, resp)=>{

    const id=req.params.id
    const prods=productObj.loadAllProducts()
    const obtainedProd=prods.filter(product=>{
        return product.id==id
    })
    resp.send({msg:obtainedProd})
})

// app.post('/api/products',(req, resp)=>{
    
//         const id=productObj.loadAllProducts().length+1
//         const product={
//             id:id,
//             name: req.body.product.name,
//             imageUrl: req.body.product.imageUrl,
//             price: req.body.product.price,
//         }

//         productObj.addProduct(product)
//         resp.send({product: product})
// })


app.listen(PORT, function(err, address){    
        console.log(`Server is Listening at ${PORT}`)
})