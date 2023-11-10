import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeroSectionProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    height?: string | number;
    color?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
                                                     backgroundImage,
                                                     title,
                                                     subtitle,
                                                     height = '75vh',
                                                     color = 'white'
                                                 }) => {
    return (
        <Box
            sx={{
                height: height,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: color,
                textAlign: 'center',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="p">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default HeroSection;
