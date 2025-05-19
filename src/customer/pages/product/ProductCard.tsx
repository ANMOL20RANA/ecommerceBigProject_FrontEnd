import React from 'react';
import {useState,useEffect} from 'react';
import {Button} from '@mui/material'
import {teal} from '@mui/material/colors'
import {Favorite,ModeComment} from '@mui/icons-material'
import './ProductCard.css'
const ProductCard=()=>{
    const images=[
       "https://images.bestsellerclothing.in/data/JJ/05-sep-2024/280182708_g0.jpg?width=415&height=550&mode=fill&fill=blur&format=auto",
      "https://img01.ztat.net/article/spp-media-p1/3188ec7f607f46109558e3bfa3275255/a0e18e8152ca4e0da11a9212213ac67e.jpg?imwidth=500",
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/6720227/2024/2/19/1960c81d-dfdb-4414-8500-6210649d8fe51708340047038RoadsterMenGreyPrintedV-NeckT-shirt1.jpg"
    ]
    const [currentImage,setCurrentImage]=useState(0)
    const [isHovered,setIsHovered]=useState(false);

    useEffect(()=>{

        let interval:any
        if(isHovered){
            interval=setInterval(()=>{
                setCurrentImage((prevImage)=>(prevImage+1)% images.length);
            },1000);
        }
        else if(interval){
            clearInterval(interval);
            interval=null;

        }
        return () => clearInterval(interval);

    },[isHovered])
        
    return(
        <>
            <div className='group px-4 relative'>
            <div className='card'
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            
            >
                {images.map((item,index)=> <img 
                className='card-media object-top'
                src={item} alt=''
                style={{transform:`translateX(${(index-currentImage)*100}%)`}}
                />)}
              
              { isHovered &&
                <div className='indicator flex flex-col items-center space-y-2'>
                    <div className='flex gap-3'>
                        <Button variant='contained' color='secondary'>
                            <Favorite sx={{color:teal[500]}}/>


                        </Button>

                        <Button variant='contained' color='secondary'>
                            <ModeComment sx={{color:teal[500]}}/>


                        </Button>

                    </div>

                </div>
               }
            
            </div>
            <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                <div className='name'>
                    <h1>BKoski</h1>
                    <p>Blue Shirt</p>   

                </div>
                <div className='price flex items-center gap-3'>
                    <span className='font-sans text-gray-800'>
                    ₹ 400
                    </span> 
                    <span className='thin-line-through text-gray-400'>
                    ₹ 999
                    </span>
                    <span className='text-primary-color font-semibold'>
                        60%
                    </span>

                </div>
                

            </div>
            
            </div>
            
        </>
    )
}

export default ProductCard;