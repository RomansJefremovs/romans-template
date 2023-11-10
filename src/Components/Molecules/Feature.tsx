import { Card, CardContent, Typography, Grid } from '@mui/material';
import React from 'react';

interface FeatureProps {
    icon: React.ReactNode; // Expect an MUI icon or similar to be passed in
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <Grid item xs={12} sm={6} md={3}>
        <Card>
            <CardContent>
                <Typography component="div" variant="h5" gutterBottom>
                    {icon} {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
);

export default Feature;
