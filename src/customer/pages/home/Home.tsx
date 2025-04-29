import React from 'react';
import ElectricCategory from './electricCategory/ElectricCategory';
import CategoryGrid from './categoryGrid/CategoryGrid'
import Deal from './deal/Deal';
import ShopByCategory from './shopByCategory/ShopByCategory';
const Home = ()=>{

    return(
        <>
            <div className='space-y-5 lg:spy10 relative pb-20'>
                <ElectricCategory/>
                <CategoryGrid/>
                <div className='pt-20'>
                    <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>
                        TODAY'S DEAL
                    </h1>
                    <Deal/>
                </div>
               
                <section className='pt-20'>
                    <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
                        SHOP BY CATEGORY
                    </h1>
                    <ShopByCategory/>
                </section>

                <section className='pg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
                    <img className='w-full h-full' src='https://www.w3schools.com/w3images/jane.jpg' alt=''/>

                </section>
                

            </div>
        </>
    )

}

export default Home;