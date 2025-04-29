import React from 'react';
import ElectricCategory from './electricCategory/ElectricCategory';
import CategoryGrid from './categoryGrid/CategoryGrid'

const Home = ()=>{

    return(
        <>
            <div className='space-y-5 lg:spy10 relative pb-20'>
                <ElectricCategory/>
                <CategoryGrid/>

            </div>
        </>
    )

}

export default Home;