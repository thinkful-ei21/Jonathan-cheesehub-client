import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    this.cheeses = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>;
    });
    return (
      <div>
        <h2>WELCOME TO CheeseHub!</h2>
        <ul className="cheeseList">{this.cheeses}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
