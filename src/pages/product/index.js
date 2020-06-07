import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
  state = {
    product: {}
  }

  async componentDidMount() {
    const { url } = this.props.match;
    
    const response = await api.get(url);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return(
      <div className="product-info">
        <h1> {product.title} </h1>
        <p> {product.description} </p>

        <p>
          <a href={product.url}> {product.url} </a>
        </p>
      </div>
    );
  }
}