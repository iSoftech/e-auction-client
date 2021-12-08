import React from 'react';
import { CardContent, Grid, FormControl, NativeSelect } from '@mui/material';
import styles from './ProductPicker.module.css';

const ProductPicker = ({data, handleProductChange}) => {
    const products = data;

    const formControl = (
        products.length > 0
        ? (<FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleProductChange(e.target.value)}>
                <option value="">Select a Product</option>
                {products.map((product, i) => <option key={i} value={product.id}>{product.productName}</option>)}
            </NativeSelect>
        </FormControl>) : "Oops! Something went wrong. Please try again later."
    );

    return (
        <Grid container spacing={2} className={styles.productContainer}>
            <Grid item xs={8} className={styles.productItemContainer}>
                <CardContent>
                    {formControl}
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default ProductPicker;