import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WalletIcon from '@mui/icons-material/Wallet';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button,Divider}  from '@mui/material';
import { teal } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from './ReviewCard'


const Review = ()=>{
    return(
        <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
                <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
                <img src="https://www.lavanyathelabel.com/cdn/shop/files/1_3ece2f65-ea7e-4e5a-9a42-99b2b54b139a_1200x.jpg?v=1740033970" alt="" />

                <div>
                    <div>

                        <p className="font-bold text-xl">Virani clothing</p>
                        <p className="text-lg text-gray-600">Men's White Shirt</p>

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
                    </div>
                </div>

                </section>

                <section  className='space-y-5 w-full'>
                    {
                    [1,1,1,1,1,1].map((items)=>
                        <div className='space-y-3'>
                        <ReviewCard/>
                        <Divider/>
                        </div>
                    ) }
                </section>
        </div>

    );
}
export default Review;