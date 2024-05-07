import React from "react";
import { Button, Typography } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone';
import Alert from '@mui/material/Alert';

const ApplyButton = () => {
    return (
        <>
        <Button
            variant="contained"
            color="primary"
            style={{
                backgroundColor: '#13ebc3',
                width: '100%',
                borderRadius: '10px',
                textTransform: 'none', 
                marginTop:"20px"
            }}
            onClick={()=>{
                alert("Hello This is Vinay Pandey and  I am building Backend for Now, Please wait till then 🤪🤪")
            }}
           
            aria-label="Apply for this job with one click"
        >
            <BoltTwoToneIcon style={{ fontSize: '2rem', marginRight: '8px', color:'yellow' }} />
            <Typography
                variant="button"
                style={{ fontWeight: 'bold', color: 'black' }}
                
            >
                Easy Apply
            </Typography>
            
        </Button>
        
        <Button
            variant="contained"
            color="primary"
            style={{
                width: '100%',
                borderRadius: '10px',
                textTransform: 'none', 
                marginTop:"10px"
            }}
            onClick={()=>{
                alert("Hi This is Crafted By Vinay Pandey 🤪🤪")
            }}
            aria-label="Apply for this job with one click"
        >
             <AccountCircleSharpIcon style={{ fontSize: '2rem', marginRight: '8px' }}/>
            <Typography
                variant="contained"
                style={{ fontWeight: 'bold', color: 'black' }}
            >
                Ask For Referral
            </Typography>
            
        </Button>
        </>
    );
};

export default ApplyButton;
