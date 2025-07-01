import React from 'react'
import { Box,Avatar,Grid,Rating} from '@mui/material'
import { IconButton } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const ReviewCard= ()=>{
    return(
        <div className="flex justify-between">
            <Grid container spacing={9} >

                <Grid size={{xs:1}}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155FD"}}>
                            A
                        </Avatar>
                    </Box>

                </Grid>

                <Grid size={{xs:9}}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Anmol </p>
                            <p className='opacity-70'>2024-09-27T23:16:07.478333</p>
                        </div>

                    </div>
                    <Rating
                    readOnly
                    value={4.5}
                    precision={0.5}
                    />
                    <p>value for money product, great product</p>
                    <div>
                        <img className="w-24 h-24 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWoQ-RxlFH-wXl_bAkiUNLOKPP2S8AsjynQ&s"  alt=""/>
                    </div>


                    

                </Grid>

                

             </Grid>
             <div>
                    <IconButton sx={{color:red[700]}}>
                        <Delete/>
                    </IconButton>
             </div>
             
        </div>

    );
}
export default ReviewCard;