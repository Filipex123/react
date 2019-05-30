import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
      filteredProducts: [],
      filteredName: '',
      products: []
    }
    this.toggleStock = this.toggleStock.bind(this)
    this.filterByName = this.filterByName.bind(this)
  }

  componentDidMount(){
    fetch('http://www.mocky.io/v2/5ce317f13400001d8677389d')
      .then(res => res.json())
      .then(res => {
          this.setState({
            products: res.products
          })
      })
  }

  toggleStock() {
    const filtered = this.state.products.filter(({ stocked }) => stocked)
    this.setState({
      isChecked: !this.state.isChecked,
      filteredProducts: filtered
    })
  }

  filterByName(filteredName) {
    const filtered = this.state.products.filter(({ name }) => { 
      return name.toLocaleLowerCase().includes(filteredName.toLocaleLowerCase()) 
    })
    this.setState({
      filteredName: filteredName,
      filteredProducts: filtered
    })
  }

  render() {
    let products = {}
    if (this.state.isChecked || this.state.filteredName !== '') {
      products = this.state.filteredProducts
    } else {
      products = this.state.products
    }

    return (
      <div>
        <SearchBar filterByName={this.filterByName} toggleStock={this.toggleStock} inStock={this.state.isChecked}/>
        <ProductTable products={products}/>
      </div>
    );
  }

};