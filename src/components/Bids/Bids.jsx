import React from 'react';
import { Grid, Box, Tab, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styles from './Bids.module.css';

const columns = [
    { field: 'bidAmount', headerName: 'Bid Amount', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Mobile', type: 'number', width: 200 },
  ];

const Bids = (data) => {
    if (!data.data) {
        return "";
    }
    const { status, bidsPlaced } = data.data;
    if (status !== 'OK') {
        return "";
    }
    const rows = [];
    if (bidsPlaced) {
        bidsPlaced.map((bid) => {
            const row = { id: bid.id,
                bidAmount: bid.bidAmount,
                name: bid.buyer.firstName,
                email: bid.buyer.email,
                phone: bid.buyer.phone};
            rows.push(row);
            return '';
        });
    }
    const bidsNotAvailable = (<Typography variant="h6" color="textSecondary">No bids placed on this product yet.</Typography>);
    const bidsDataGrid = (<div style={{ height: '400px', width: '50%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}/>
                    </div>);
    return (
        <Grid container spacing={2} className={styles.bidsContainer}>
            <Grid item xs={8} className={styles.bidsItemContainer}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tab label="Bids Placed" sx={{fontWeight: 'bold', color: 'black'}}/>
                    </Box>
                    <br/><br/>
                    <div style={{paddingLeft: '50px'}}>
                        {bidsPlaced ? bidsDataGrid : bidsNotAvailable}
                        <br/><br/>
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Bids;