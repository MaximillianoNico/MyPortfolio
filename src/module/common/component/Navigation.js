import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
          linkedin:"https://www.linkedin.com/in/maximilliano-nico-lolong-3b976b136/"}
          
      }
    render(){
        let MainMenu = this.props.menu;
        return(
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Maximilliano</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            {MainMenu.map((item,key)=>{
                                return  (<li className="nav-item">
                                            <a className="nav-link" href={item.path}>{item.name}</a>
                                        </li>)
                            })}
                        </ul>
                        <span className="navbar-text">
                        <a href={this.state.linkedin} className="link"> Go to LinkedIn Profile <span> <a style={{fontSize:'30px'}} class="fab fa-linkedin"></a></span></a>
                        </span>
                    </div>
                </nav>
        )
    }
}
export default withRouter(Navigation);