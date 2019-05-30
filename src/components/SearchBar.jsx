import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleClick(){
    this.props.toggleStock()
  }

  handleFilter(event){
    this.props.filterByName(event.currentTarget.value)
  }

  render() {

    return (
      <div>
        <input onChange={this.handleFilter} type="text"></input><br />
        <input onChange={this.handleClick} type="checkbox" checked={this.props.inStock}></input>Filtrar em estoque
      </div>
    );
  }

};