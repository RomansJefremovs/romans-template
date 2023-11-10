import React from 'react';
import { Box, Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';

interface ReservationFormProps {
    backgroundColor?: string;
}
const ReservationForm = ({backgroundColor}:ReservationFormProps) => {
    return (

    <Container maxWidth="md">
            <Paper elevation={0} sx={{ my: 6, p: { xs: 3, sm: 8 }, backgroundColor: backgroundColor??'transparent' }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
                    Book your table now
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                fullWidth
                                label="Person"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                fullWidth
                                label="Timing"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type="date"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' },
                                    shrink: true,
                                }}
                                InputProps={{
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" size="large" sx={{ width: '100%' }}>
                                Book a Table
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default ReservationForm;
