import React from 'react';

const DealCard =()=>{
    return(
        <div className='w-[13rem] cursor-pointer'>
            <img className='border0-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top' src="https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg" alt=""/>
            <div className='border-4 border-black bg-black text-white p-2 text-center'>
                <p className='text-lg font-semibold '>Smart watch</p>
                <p className='text2xl font-bold'>20% OFF</p>
                <p className='text-balance text-lg'>Shop now</p>
            </div>
        </div>
    )
}

export default DealCard;