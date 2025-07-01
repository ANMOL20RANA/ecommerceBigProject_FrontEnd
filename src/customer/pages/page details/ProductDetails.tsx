import React ,{useState}from 'react';
import  StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import {Divider,Button}  from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WalletIcon from '@mui/icons-material/Wallet';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SimilarProduct from './SimilarProduct'
import ReviewCard from '../review/ReviewCard'
const ProductDetails = ()=>{
    const [quantity,setQuantity]= useState(1);
    return(
        <div className='px-5 lg:px-20 pt-10'>
          

             <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                 <section className='flex flex-col lg:flex-row gap-5'>
                    
                    <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
                        {
                    [1,1,1,1].map((items)=>
                    <img className='lg:w-full w-[50px] cursor-pointer rounded-md'  src="https://www.lavanyathelabel.com/cdn/shop/files/1_3ece2f65-ea7e-4e5a-9a42-99b2b54b139a_1200x.jpg?v=1740033970" alt=""/>
                    )}
                    </div>
                    <div className='w-full lg:w-[85%]'> 
                    <img className='w-full rounded-md'src="https://www.lavanyathelabel.com/cdn/shop/files/1_3ece2f65-ea7e-4e5a-9a42-99b2b54b139a_1200x.jpg?v=1740033970" alt="" />

                    </div>
                 </section>

                  <section>
                    <h1 className='font-bold text-lg text-primary-color'>Raam Clothing</h1>
                    <p className='text-gray-500 font-semibold'>men black shirt</p>
                    <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
                        <div className="flex gap-1 items-center">
                            <span>4</span>
                            <StarIcon sx={{color:teal[500],fontSize:"17px"}}   />

                        </div>
                        <Divider orientation='vertical' flexItem/>
                        <span>
                            234 Ratings
                        </span>

                       
                    </div>
                    <div>
                         <div className='price flex items-center gap-3 mt-5 text-2xl'  >
                            <span className='font-sans text-gray-800'>
                            ₹ 400
                            </span> 
                            <span className='line-through text-gray-400'>
                            ₹ 999
                            </span>
                            <span className='text-primary-color font-semibold'>
                                60%
                            </span>

                        </div>
                        <p className='text-sm'>inclusive of all taxes. Free Shipping above ₹1500.</p>

                        <div className='mt-7 space-y-3'>
                            <div className='flex items-center gap-4'>
                                <ShieldIcon sx={{color:teal[500]}}/>
                                <p>Authentic & Quality Assured</p>

                            </div>
                            <div className='flex items-center gap-4'>
                                <WorkspacePremiumIcon sx={{color:teal[500]}}/>
                                <p>100% money back guarantee</p>

                            </div>
                            <div className='flex items-center gap-4'>
                                <LocalShippingIcon sx={{color:teal[500]}}/>
                                <p>Free Shiping and return</p>

                            </div>
                            <div className='flex items-center gap-4'>
                                <WalletIcon sx={{color:teal[500]}}/>
                                <p>pay on delivery might be available</p>

                            </div>

                        </div>

                        <div className='mt-7 space-y-2'>
                            <h1>
                               QUANTITY
                            </h1>

                        </div>
                         <div className='flex item-center gap-2 w-[140px] justify-between'>

                          <Button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>
                                <RemoveIcon/>
                          </Button>
                          <span> {quantity}</span>
                          <Button onClick={()=>setQuantity(quantity+1)}>
                                <AddIcon/>
                          </Button>
                          
                        </div>
                    </div>

                    <div className='mt-12 flex items-center gap-5' >
                        <Button 
                        fullWidth
                        variant='contained'
                        startIcon={<AddShoppingCartIcon/>}
                        sx={{py:"1rem"}} >
                        Add To Bag
                        </Button>

                        <Button 
                        fullWidth
                        variant='outlined'
                        startIcon={<FavoriteBorderIcon/>}
                        sx={{py:"1rem"}} >
                        Wishlist
                        </Button>
                    </div>

                    <div className='mt-5'>
                        <p>
                            A saree is a traditional Indian garment worn by women, typically made of a long, flowing piece of fabric. It's a symbol of Indian culture and is known for its elegance and versatility. Sarees come in various fabrics like silk, cotton, and chiffon, and are draped in different styles, making them suitable for both everyday wear and special occasions
                        </p>
                    </div>

                    <div className="mt-12 space-y-5">
                        <ReviewCard/>
                        <Divider/>
                    </div>
                
                  </section>

            </div>

            <div className="mt-20">
            <h1 className="text-lg font-bold">
                Similar Product
            </h1>
            <div className="pt-5">
             <SimilarProduct/>
            </div>
                
            </div>

           
        </div>

       
    );
}

export default ProductDetails;