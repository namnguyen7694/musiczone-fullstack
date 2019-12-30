import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pages } from '../components';
import { getChart } from '../actions/chart';

class ChartPage extends Component {
  render() {
    return (
      <Pages.ChartPage
        vpop={this.props.vpop}
        pop={this.props.pop}
        kpop={this.props.kpop}
      />
    );
  }
}

function mapStateToProps(state) {
  return state.chartState;
}

export default connect(mapStateToProps, { getChart })(ChartPage);
