const mongoose=require('mongoose');
const Product=require('./model/product');


mongoose.connect('mongodb://127.0.0.1:27017/lost-and-found')
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err));

const productdata=[{
   name:"iphone",
   img:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww",
   tag:'lost',
   contactemail:'amit909563@gmail.com',
   contactphone:'9854657385',
   dec:"Shop the latest iPhone models and accessories, now with superfast 5G. "
},
{
    name:"shoes",
    img:"https://media.istockphoto.com/id/1453810805/photo/running-shoes.webp?b=1&s=170667a&w=0&k=20&c=vtjQAfny-JQWmoeClck89nLBi2cV8hQPzr_y_N_R3xI=",
    tag:'found',
    contactemail:'amit909563@gmail.com',
    contactphone:'9854657385',
    dec:"Shop the latest iPhone models and accessories, now with superfast 5G. "
 }
,{
    name:"laptop",
    img:"https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    tag:'found',
    contactemail:'amit909563@gmail.com',
    contactphone:'9854657385',
    dec:"Shop the latest iPhone models and accessories, now with superfast 5G. "
 }
,{
    name:"book",
    img:"https://media.istockphoto.com/id/1355117041/photo/law-book-with-a-gavel-2022.webp?b=1&s=170667a&w=0&k=20&c=uDt0q3IJ0eY07WhZ1ZvMtMn-VBJXxevVVLMBgugnkK8=",
    tag:'lost',
    contactemail:'amit909563@gmail.com',
    contactphone:'9854657385',
    dec:"Shop the latest iPhone models and accessories, now with superfast 5G. "
 }
,{
    name:"cycle",
    img:"https://media.istockphoto.com/id/1176169958/photo/group-of-cyclist-at-professional-race.webp?b=1&s=170667a&w=0&k=20&c=dNdVN97RdAT5YaSP5gzsujl0I8xj6SeqooX--6TiDDM=",
    tag:'found',
    contactemail:'amit909563@gmail.com',
    contactphone:'9854657385',
    dec:"Shop the latest iPhone models and accessories, now with superfast 5G. "
 }
];


Product.insertMany(productdata)
.then(()=>{
    console.log("Data is Seeded");});
