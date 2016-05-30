import React ,{Component} from 'react';

export default class Notes extends Component {
  render(){
    console.log('notes:', this.props.notes);
    return(
      <div>
        <p>评论</p>
        <p>Notes：{this.props.notes}</p>
      </div>
    )
  }
}
