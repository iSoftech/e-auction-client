import React from 'react';
import { CardContent, Typography, Grid } from '@mui/material';
import styles from './Header.module.css';
import logo from '../../images/e-auction.png';


function Header() {
    return (
        <Grid container spacing={2} className={styles.headerContainer}>
            <Grid item xs={1} className={styles.logoContainer}>
                <CardContent><img src={logo} className={styles.logo} alt="e-Auction" /> </CardContent>
            </Grid>
            <Grid item xs={6} className={styles.titleContainer}>
                <CardContent><Typography className={styles.header} variant="h2" color="textSecondary">e-Auction</Typography></CardContent>
            </Grid>
            <Grid item xs={2} className={styles.welcomeCcontainer}>
                <CardContent>
                    <Typography color="textSecondary" sx={{fontWeight: 'bold'}}>Welcome Mohamed Yusuff!</Typography>
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default Header;