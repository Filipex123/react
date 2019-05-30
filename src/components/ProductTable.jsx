import React from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  render() {
    let rows
    if (this.props.products.length <= 0) {
      rows = <li>Nenhum item encontrado</li>
    } else {
      rows = this.props.products.map((product) => {
        return <ProductRow key={product.name} product={product} />;
      })
    }

    return (
      <div>
        <ol>
          {rows}
        </ol>
      </div>
    );
  }
}