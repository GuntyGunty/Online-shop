import React from 'react';
import APISerivce from '../../Utils/APIService';

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
    this.id = props.match.params.id;
  }

  componentDidMount() {
    APISerivce.post({
      url: `/products/getOne/${this.id}`,
    }).then((response) => {
      if (response.status === 'success') {
        this.setState({ product: response.data });
      }
    });
  }
  
  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div className="Product">
        <h3>{product.title}</h3>
      </div>
    )
  }
}