const Product = require("../models/productModel")


//create product
exports.createProduct = async(req,res,next) => {
 
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product

    })
}


//get all products
exports.getAllProducts = async (req,res)=> {

     
    const products = await Product.find();

    res.status(201).json({
        success:true,
        products

    })
}

//update a product
exports.updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id)

    if(!product){
        res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

//delete a product
exports.deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product does not exist' });
      }
  
      await Product.findByIdAndRemove(productId);
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the product' });
    }
  };
  
