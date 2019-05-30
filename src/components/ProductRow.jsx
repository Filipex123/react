import React from 'react';

export default class ProductRow extends React.Component {
  render() {
    return (
      <li>{this.props.product.name} - {this.props.product.price}</li>
    );
  }
};