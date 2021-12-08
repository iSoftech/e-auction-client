import React from 'react';
import { Grid, Box, TextField, Tab, Typography, CircularProgress } from '@mui/material';
import styles from './Products.module.css';

const Products = (data) => {
    if (!data.data) {
        return "";
    }
    const { status, product, seller } = data.data;
    if (status !== 'OK') {
        return "";
    }
    if (!product) {
        return (<CircularProgress color="inherit" justifyContent="center" alignItems="center"/>);
    }
    return (
        <Grid container spacing={2} className={styles.productContainer}>
            <Grid item xs={8} className={styles.productItemContainer}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tab label="Product Information" sx={{fontWeight: 'bold', color: 'black'}} />
                    </Box>
                    <br/><br/>
                    <div style={{paddingLeft: '50px'}}>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Product Name</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.productName} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Short Description</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.shortDescription} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Detailed Description</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.detailedDescription} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Category</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.category} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Starting Price</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.startingPrice} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center" sx={{paddingBottom: '10px'}}>
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Bid End Date</Typography></Grid>
                            <Grid item xs={2}><TextField label={product.bidEndDate} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="center">
                            <Grid item xs={2}><Typography variant="h6" color="textSecondary">Seller Email</Typography></Grid>
                            <Grid item xs={2}><TextField label={seller.email} disabled size="small" sx={{width: '500px'}} /></Grid>
                        </Grid>
                    </div>
                </Box>                  
            </Grid>
        </Grid>
    );
}

export default Products;