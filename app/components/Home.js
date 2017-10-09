import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Welcome to Login!</h1>
            <p>This application demonstrates what a React-based register/login workflow </p>
         

            <p>log in with username <code>abc</code> and password <code>password</code>, then try to register new users.</p>
          </section>

          
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
