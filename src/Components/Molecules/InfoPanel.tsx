import React from 'react';
import { Box, Typography, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';

interface InfoPanelProps {
    openingHours: string[];
    contactInfo: string[];
    title: string;
    backgroundImage?: string;
}
function InfoPanel({ openingHours, contactInfo, title,backgroundImage }:InfoPanelProps) {
    const theme = useTheme();
    // Use media queries for responsiveness
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: isMobile ? 1 : 4, // padding adjusted for mobile
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // color: 'white',
                // height: '100vh', // full height of the viewport
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    m: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // semi-transparent white background
                    backdropFilter: 'blur(10px)', // if you want to have a blur effect on the background
                    width: '100%', // full width of the container
                    maxWidth: '800px', // maximum width of the paper
                }}
            >
                <Grid container spacing={isMobile ? 1 : 4}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div" gutterBottom>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" component="div">
                            WORKING HOURS
                        </Typography>
                        {openingHours.map((line, index) => (
                            <Typography key={index} variant="body1">
                                {line}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" component="div">
                            CONTACT
                        </Typography>
                        {contactInfo.map((line, index) => (
                            <Typography key={index} variant="body1">
                                {line}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default InfoPanel;
