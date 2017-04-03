import React from 'react'

// State - Less

// export const Login = (props) => (
//   <div>
//     <form>
//       <label>Username</label>
//       <input type="text" name="username" />
//       <br/>
//       <label>Password</label>
//       <input type="password" name="password" />
//       <br/>
//       <button>Submit</button>
//     </form>
//   </div>
// )
//
// Login.propTypes = {
//   username     : React.PropTypes.string.isRequired,
//        : React.PropTypes.string.isRequired
// }
//
// export default Counter


// State - full

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    return false
  }

  render () {
    const { username, password } = this.state
    const { message } = this.props
    return (
      <div>
        {message ? <div className="col-lg-6 ">{message}</div> : null}
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input type='text' name='username' value={username} onChange={this.onChangeUsername} />
          <br />
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={this.onChangePassword} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
