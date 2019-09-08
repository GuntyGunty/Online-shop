import React from 'react';

const defaultMapScreenToProps = (width, height) => ({ width, height });

export default (mapScreenToProps = defaultMapScreenToProps) => function withScreenSize(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    
    componentDidMount() {
      window.addEventListener('resize', this.handleScreenResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleScreenResize);
    }
    
    handleScreenResize = () => {
      const { innerWidth: width, innerHeight: height } = window;

      this.setState({ width, height });
    }

    render() {
      const { width, height } = this.state;
      const mappedScreen = mapScreenToProps(width, height);

      return <WrappedComponent {...this.props} {...mappedScreen} />
    };
  };
}