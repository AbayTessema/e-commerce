import mongoose from 'mongoose';
import Product from '../models/product.js';

const createproduct=async(req,res)=>{
        const product= req.body;
        if(!product.name || !product.price || !product.description || !product.image){
            return res.status(400).json({message:'Please fill all the fields'})
        }
        const newProduct= new Product(product);
        try {
            await newProduct.save();
            res.json({
                success:true, data:newProduct
            })
            
        } catch (error) {
           res.json({message:"error"}) 
        }
    
    }

    const getAllProducts= async(req,res)=>{
        try {
            const response= await Product.find();
            res.json({success:true, data:response});
            
        } catch (error) {
          res.json({message:"Not product found!"})  
        }
    }

    const getSingleProduct= async(req,res)=>{
        try {
            const {id}= req.params;
            const response= await Product.findById(id);
            res.json({succes:true,data:response});
        } catch (error) {
            res.json({message:'Not product found'})
        }
    }
    const updateProduct= async(req,res)=>{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false, message:'Invalid object ID'})
        }
        try {
            const product=req.body;
            
            const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});

            res.json({success:true, data:updatedProduct, message:"Product updated successfully!"})
            
        } catch (error) {
            res.json({message:"Not updated!"})
        }
    }

    const deleteProduct=async(req,res)=>{
        try {
            const {id}=req.params;
            await Product.findByIdAndDelete(id);
            res.json({success: true,message:"Product deleted successfully!"})
            
        } catch (error) {
            res.json({message:"Product Not Found!"})
        }
    }

    export {
        createproduct,
        getAllProducts,
        getSingleProduct,
        updateProduct,
        deleteProduct
    };