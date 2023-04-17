import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export const Page404 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h1">
                            404
                        </Typography>
                        <Typography variant="h6">
                            The page you’re looking for doesn’t exist.
                        </Typography>
                        <Button variant="contained" href={"/"}>Back Home</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                alt=""
                                width={500} height={250}
                            />
                        </Box>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <img
                                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                alt=""
                                width={250} height={250}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

