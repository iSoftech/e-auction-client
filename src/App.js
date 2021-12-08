import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { Header, MenuBar, ProductPicker, Products, Bids } from './components';
import styles from './App.module.css';
import { fetchProducts, fetchProduct } from './api';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor: '#b6c2db',
  color: theme.palette.text.secondary,
}));

class App extends React.Component {

  state = {
    products: {},
    productBids: {},
    productId: ''
  }

  async componentDidMount() {
    const fetchedProducts = await fetchProducts();
    if (fetchedProducts) {
      this.setState({
        products: fetchedProducts.products
      });
    }
  }

  handleProductChange = async (productId) => {
    const fetchedProduct = await fetchProduct(productId);
    this.setState({
      productBids: fetchedProduct,
      productId: productId,
    });
  }

  render () {
    const { products, productBids } = this.state;
    return (
      <div className={styles.container}>
        <Stack spacing={5}>
          <Item><Header /></Item>
          <Item><MenuBar /></Item>
          <Item sx={{backgroundColor: '#dde2ed', height: '1050px'}}>
            <ProductPicker data={products} handleProductChange={this.handleProductChange}/>
            <Products data={productBids} /><br/><br/>
            <Bids data={productBids} />
          </Item>
        </Stack>
      </div>
    );
  }
}

export default App;
