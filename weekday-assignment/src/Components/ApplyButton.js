import React from "react";
import { Button, Typography } from '@mui/material';
import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone';
const ApplyButton = ({handleClick}) => {
    return (
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
            onClick={handleClick}
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
        
    );
};

export default ApplyButton;
