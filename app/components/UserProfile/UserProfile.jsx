import React ,{Component} from 'react';

export default class UserProfile extends Component {
  render(){
    return(
      <div>
        <p>基本信息</p>
        <p>姓名：{this.props.username}</p>
        <p>介绍：{this.props.bio.name}</p>
      </div>
    )
  }
}
