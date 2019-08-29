import React from 'react';
import APIService from '../../Utils/APIService';

import Card from '../../Components/Card/Card'
import Container from '../../Components/Container/Container';

const IN_PAGE = 2;

export default class CataloguePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalCount: 0,
      products: [],
    }
  }

  fetchCatalgoue() {
    const { page } = this.state;

    APIService.post({
      url: `/products/getFiltered?page=${page}&&inPage=${IN_PAGE}`,
    }).then((response) => {
      if (response.status === 'success') {
        const { products, filteredProductsCount: totalCount } = response.data;

        this.setState({
          totalCount,
          products: [...this.state.products, ...products]
        });
      }
    });
  }

  handleNextPage = () => {
    const { page } = this.state;
    
    this.setState({ page: page + 1 }, () => {
      this.fetchCatalgoue();
    });
  }
  
  componentDidMount() {
    this.fetchCatalgoue();
  }
  
  render() {
    const { products, page, totalCount } = this.state;

    return (
      <div className="Catalogue">
        <Container>
          {
            products.map((prdct) => <Card
              key={prdct.id}
              title={prdct.title}
              imgPath={`https://edu-online-shop.herokuapp.com${prdct.cover}`}
              cardLink={`/product/${prdct.id}`}
              />)
          }
        </Container>
        {
          products.length < totalCount && <div onClick={this.handleNextPage}>Next page</div>
        }
      </div>
    );
  }
}