import React from 'react';
import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import { HourglassTop, RoomOutlined } from '@mui/icons-material';

const CardShimmer = () => {
    return (
        <Card sx={{ margin: 2, boxShadow: 2, border: "1px solid #d7dbd8", borderRadius: 5 }}>
            <CardContent sx={{ padding: 2 }}>
                <Box sx={{ border: "1px solid #d7dbd8", borderRadius: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content', p: 1 }}>
                    <HourglassTop sx={{ fontSize: 13 }} />
                    <Typography sx={{ fontSize: 13 }}>
                        <Skeleton variant="text" width={80} />
                    </Typography>
                </Box>

                <Box sx={{ mt: 2 }} display={'flex'} flexDirection={"row"}>
                    <Box sx={{ width: '23%', height: '75%', mr: 1 }}>
                        <Skeleton variant="rectangular" width={'100%'} height={100} />
                    </Box>
                    <Box sx={{ width: '80%' }}>
                        <Typography variant="h5" component="div" sx={{ fontSize: '1.2rem', color: "#7f8280", fontWeight: "500", mb: 0.5 }}>
                            <Skeleton variant="text" width={150} />
                        </Typography>
                        <Typography component="div" sx={{ fontSize: '1rem', color: "#393b39", fontWeight: "400", mb: 0.5 }}>
                            <Skeleton variant="text" width={100} />
                        </Typography>
                        <Box display={"flex"} flexDirection={'row'} sx={{ alignItems: "center", fontSize: "0.8rem", mb: 0.5 }}>
                            <RoomOutlined sx={{ mr: 0.5 }} />
                            <Typography variant="body1" color="#5e615f" fontWeight={400} sx={{ fontSize: '0.9rem', ml: 0.5 }}>
                                <Skeleton variant="text" width={100} />
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem', mr: 1 }}>
                        <Skeleton variant="text" width={150} />
                    </Typography>
                    <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem' }}>
                        <Skeleton variant="text" width={50} />
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontWeight: "500" }}>About Company:</Typography>
                <Typography variant="body1" sx={{ fontWeight: "400", mb: 1 }}>About Us</Typography>
                <Typography variant="body2" className="description">
                    Description:{"This is empty For now"}
                    <Skeleton variant="text" width={'50%'} />
                </Typography>

                <Box sx={{ marginBottom: 1 }}>
                    <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1 }}>Min_Exp</Typography>
                    <Typography variant="body1" color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1, mb: 1 }}>
                        <Skeleton variant="text" width={100} />
                    </Typography>
                </Box>

                <Skeleton variant="rectangular" height={50} width={'50%'} />
            </CardContent>
        </Card>
    );
}

export default CardShimmer;
