import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="Cart">
        cart here
        {products.length}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ products: state.cart.products });

export default connect(mapStateToProps, null)(Cart);