import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { products, user } = this.props;

    return (
      <div className="Cart">
        <p>User: {user.email}</p>
        <p>Items count in cart: {products.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  user: state.user,
});

export default connect(mapStateToProps, null)(Cart);