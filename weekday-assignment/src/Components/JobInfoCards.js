import React, { useState } from 'react';
// import useSalaryEstimation from '../utils/hooks/useSalaryEstimation';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
// import ApplyButton from '../designs/Buttons/Apply';
import { HourglassTop, RoomOutlined } from '@mui/icons-material';

const JobInfoCards = ({ job }) => {
    // const salary = useSalaryEstimation({ job });
    const [expanded, setExpanded] = useState(false);

    const handleExpands = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Card sx={{ margin: 2, boxShadow: 2, border: "1px solid #d7dbd8", borderRadius: 5 }}>
            <CardContent sx={{ padding: 2 }}>
                <Box sx={{ border: "1px solid #d7dbd8", borderRadius: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content', p: 1 }}>
                    <HourglassTop sx={{ fontSize: 13 }} />
                    <Typography sx={{ fontSize: 13 }}>Posted {job.minExp+1} days ago</Typography> {/**use min exp as posted date for simplicity :) */}
                </Box>

                <Box sx={{ mt: 2 }} display={'flex'} flexDirection={"row"}>
                    <Box sx={{ width: '23%', height: '75%', mr: 1 }}>
                        <img src={job.logoUrl} alt="Company Logo" style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                    </Box>
                    <Box sx={{ width: '80%' }}>
                        <Typography variant="h5" component="div" sx={{ fontSize: '1.2rem', color: "#7f8280", fontWeight: "500", mb: 0.5 }}>
                            {job.companyName}
                        </Typography>
                        <Typography component="div" sx={{ fontSize: '1rem', color: "#393b39", fontWeight: "400", mb: 0.5 }}>
                            {job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1).toLowerCase()}  {job.jobRole.toLowerCase() !== "tech lead" ? "Developer" : ""}
                        </Typography>
                        <Box display={"flex"} flexDirection={'row'} sx={{ alignItems: "center", fontSize: "0.8rem", mb: 0.5 }}>
                            <RoomOutlined sx={{ mr: 0.5 }} />
                            <Typography variant="body1" color="#5e615f" fontWeight={400} sx={{ fontSize: '0.9rem', ml: 0.5 }}>{job.location.charAt(0).toUpperCase() + job.location.slice(1).toLowerCase()}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem', mr: 1 }}>Estimated Salary: NUMBER</Typography>
                    <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem' }}>☑</Typography>
                </Box>

                <Typography variant="body2" sx={{ fontWeight: "500" }}>About Company:</Typography>
                <Typography variant="body1" sx={{ fontWeight: "400", mb: 1 }}>About Us</Typography>
                <Typography variant="body2" className="description" sx={{fontWeight:300}}>
                    {job.jobDetailsFromCompany
                        ? expanded
                            ? job.jobDetailsFromCompany
                            : `${job.jobDetailsFromCompany.substring(0, 100)}...`
                        : "No description available"}
                    <Button onClick={handleExpands} className="expand-button" sx={{color:"gray", fontWeight:300}}>
                        {expanded ? "Read less" : "Read more"}
                    </Button>
                </Typography>

                <Box sx={{ marginBottom: 1 }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1 }}>Minimum Experience</Typography>
                    <Typography variant="body1" color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1, mb: 1 }}>{job.minExp ? job.minExp + " years" : "1+ years"}</Typography>
                </Box>

                <Button className="apply-btn" >Apply Now</Button>
            </CardContent>
        </Card>
    );
}

export default JobInfoCards;
