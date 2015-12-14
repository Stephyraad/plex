/*
  Graph
*/

var React = require('react');
var d3 = require('d3');
var ZeroAxis = require('./ZeroAxis');
var InputAxis = require('./InputAxis');
var TimeAxis = require('./TimeAxis');
var Line = require('./Line');

var Graph = React.createClass({
  getDefaultProps: function() {
    return {
      width: 800,
      height: 300
    }
  },

  render: function() {
    //styles
    var style = {
      svg: {
        margin: 50
      }
    };

    //ordinal axis
    var x0Scale = d3.scale.ordinal()
      .domain([0])
      .range([0]);

    var x0Axis = d3.svg.axis()
      .scale(x0Scale)
      .orient('bottom');

    // logarithmic scale (x)
    var xScale = d3.scale.log()
      .domain([0.1, 1000000])
      .range([0, this.props.width - 50]);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .ticks(0, d3.format(','))
      .tickValues([100, 1000, 10000, 100000])
      .outerTickSize(0);

    // linear scale (y)
    var yScale = d3.scale.linear()
      .domain([0, 1200])
      .range([this.props.height - 50, 0]);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickValues([0, 200, 400, 600, 800, 1000])
      .outerTickSize(0);

    return (
      <svg width={this.props.width} height={this.props.height} style={style.svg}>
        <ZeroAxis data={this.props.data} width={this.props.width} height={this.props.height} x0Axis={x0Axis} />
        <InputAxis data={this.props.data} width={this.props.width} height={this.props.height} xAxis={xAxis} />
        <TimeAxis data={this.props.data} width={this.props.width} height={this.props.height} yAxis={yAxis} />
        <Line data={this.props.data} xScale={xScale} yScale={yScale}/>
      </svg>
    );
  }
});

module.exports = Graph;
