import react from 'react';

const CategoryGrid = ()=>{
    return(
        <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
            <div className='col-span-3 row-span-12 text-white'>
                <img className='w-full h-full object-cover object-top rounded-md'
                src='https://ridhimabhasin.com/cdn/shop/files/Untitleddesign_0bdf62fe-0f72-4c87-9fd9-403df0a25eb0.jpg?v=1724322237' alt=""/>

            </div>

            <div className='col-span-2 row-span-6 text-white'>
                <img  className='w-full h-full object-cover object-top rounded-md'
                 src='https://imagescdn.louisphilippe.com/img/app/product/3/39620728-12688977.jpg?auto=format&w=390' alt=""/>

            </div>

            <div className='col-span-4 row-span-6 text-white'>
                <img src='https://i0.wp.com/manhattanbride.com/wp-content/uploads/2019/04/Indian-Traditions39-Ceremony-506-Christopher-Brock-Photography.jpg?resize=740%2C494&ssl=1' alt=""/>

            </div>

            <div className='col-span-3 row-span-12 text-white'>
                <img  className='w-full h-full object-cover object-top rounded-md'
                src='https://i.pinimg.com/236x/88/8d/c3/888dc3c8c5ea939093e10201be49667b.jpg' alt=""/>

            </div>

            <div className='col-span-4 row-span-6 text-white'>
                <img  className='w-full h-full object-cover object-top rounded-md'
                src='https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=' alt=""/>

            </div>

            <div className='col-span-2 row-span-6 text-white'>
                <img  className='w-full h-full object-cover object-top rounded-md'
                src='https://img.freepik.com/premium-photo/red-high-heels-up-close-white-background_410516-29371.jpg' alt=""/>

            </div>

           

        </div>
    )
}

export default CategoryGrid;