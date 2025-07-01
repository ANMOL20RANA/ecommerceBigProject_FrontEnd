import React,{useState} from 'react'
import {Divider,Button} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItem = ()=>{
    const [quantity,setQuantity]= useState(1);
    return(
        <div className='border rounded-md relative'>
            <div className='p-5 flex gap-3'>
                <div>
                    <img className='w-[90px] rounded-md' src='https://m.media-amazon.com/images/I/91MJC3LvuVL._AC_UY1100_.jpg' alt=""/>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-lg'>Happing Clothing</h1>
                    <p className='text-gray-600 font-medium text-sm'>Buy Attracting kanjivarm pure silk sarees With Un-Stitched Blouse Piece silk saree 200 silk saree 6000 saree for womens women's or mahila festival ...
                    </p>
                     <p className='text-gray-400 text-xs'><strong>Sold By:</strong>  Happy Franchise
                    </p>
                    <p className='text-sm'>7 day Replacement
                    </p>
                    <p className='text-sm text-gray-500'><strong>quantity :</strong>5
                    </p>
                </div>
                <Divider/>

                <div className='px-5 py-2 flex justify-between items-center'>
                    <div className='flex items-center gap-2 w-[140px] justify-between'>
                        <Button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>
                                <RemoveIcon/>
                          </Button>
                          <span> {quantity}</span>
                          <Button onClick={()=>setQuantity(quantity+1)}>
                                <AddIcon/>
                          </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartItem;