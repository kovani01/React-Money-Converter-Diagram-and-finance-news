import React, { Component } from 'react'


class Header extends Component {
 
    render() {
        return (
           
          <nav>
          <a class="navbar-brand" href="#">IT STEP Financy</a>
          
          <div>
            <ul>
              <li class="active">
                <a href="/">Converter <span ></span></a>
              </li>
              <li >
                <a href="/diagram">Diagram</a>
              </li>
              <li >
                <a href="/news">News</a>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}
export default Header


