import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Calculator.css';
import NumberBtn from "../../components/Calculator/NumberBtn";

class Calculator extends Component {
  render() {
    return (
      <div id='calc-contain' className="Calculator">
          <form name="calculator">
            <input type="text" name="answer" onChange={this.props.updateInput} pattern="[0-9\-\*\+\/\.]" value={this.props.result || this.props.expression}/>
            <br/>
            <NumberBtn name='1' label='1' onClick={this.props.updateExpression}/>
            <NumberBtn name='2' label='2' onClick={this.props.updateExpression}/>
            <NumberBtn name='3' label='3' onClick={this.props.updateExpression}/>
            <NumberBtn name='4' label='4' onClick={this.props.updateExpression}/>
            <br/>
            <NumberBtn name='4' label='4' onClick={this.props.updateExpression}/>
            <NumberBtn name='5' label='5' onClick={this.props.updateExpression}/>
            <NumberBtn name='6' label='6' onClick={this.props.updateExpression}/>
            <NumberBtn name='-' label='-' onClick={this.props.updateExpression}/>
            <br/>
            <NumberBtn name='7' label='7' onClick={this.props.updateExpression}/>
            <NumberBtn name='8' label='8' onClick={this.props.updateExpression}/>
            <NumberBtn name='9' label='9' onClick={this.props.updateExpression}/>
            <NumberBtn name='*' label='x' onClick={this.props.updateExpression}/>
            <br/>
            <NumberBtn name='0' label='0' onClick={this.props.updateExpression}/>
            <NumberBtn name='.' label='.' onClick={this.props.updateExpression}/>
            <NumberBtn name='+' label='+' onClick={this.props.updateExpression}/>
            <NumberBtn name='/' label='/' onClick={this.props.updateExpression}/>
            <br/>
            <NumberBtn name='c' label='clear' onClick={this.props.updateExpression}/>
            <NumberBtn name='=' label='=' onClick={this.props.calculate}/>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: state.expression,
    result: state.result
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateExpression: (e) => dispatch({type: 'UPDATE_EXPRESSION', value: e.target.name}),
    calculate: () => dispatch({type: 'CALCULATE'}),
    updateInput: (e) => {
      return dispatch({
          type: 'UPDATE_EXPRESSION_FROM_INPUT', value: e.target.value
        }
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
