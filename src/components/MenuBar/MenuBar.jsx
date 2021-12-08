import React from 'react';

import { Typography, Breadcrumbs, Link } from '@mui/material';

import styles from './MenuBar.module.css';

function MenuBar() {
    return(
        <div role="presentation" className={styles.breadcrumb}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">Seller</Link>
                <Link underline="hover" color="inherit" href="/">Products</Link>
                <Typography color="text.primary" fontWeight="bold">Product Bids</Typography>
            </Breadcrumbs>
        </div>
    );
}

export default MenuBar;