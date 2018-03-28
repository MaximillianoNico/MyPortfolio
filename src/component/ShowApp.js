import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import MobileView from './MobileView';
// import AppMobile from './../asset/mobileApp.JPG';
class ShowApp extends Component{
    render(){
        
        return(
            <div>
                <div className="container" style={{padding:"3em"}}>
                    {/* <MobileView/> */}
                    <Route exact path="*/" component={MobileView}/>
                    <div style={{display:'flex',alignItems:"center", justifyContent:'center',marginTop:50}}>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <Link to="/" class="btn btn-secondary active" >
                                <input type="radio"name="options" id="option1" autocomplete="off" checked /> Mobile
                            </Link>
                            <Link to="/web" class="btn btn-secondary">
                                <input type="radio"name="options" id="option1" autocomplete="off" checked/> WebApp
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark footer">
                    <div className="container" style={{padding:'30px'}}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <i class="fas fa-code" style={{fontSize:'35px',color:"#2787E1"}}></i> 
                                    <h3 style={{paddingLeft:"20px",color:"white"}}>Maximilliano</h3>
                                </div>
                                <p style={{color:'white'}}> is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it
                                    with desktop publishing software like Aldus PageMaker including</p>
                                <div className="container row" style={{}}>
                                    <a href="https://github.com/MaximillianoNico" 
                                        className="link-href" 
                                        style={{paddingLeft:'5px'}}>
                                        <i class="fab fa-github-square" 
                                            style={{color:'white',fontSize:"20px"}}>
                                        </i>
                                    </a>
                                    <a href="https://github.com/MaximillianoNico" 
                                        className="link-href" 
                                        style={{paddingLeft:'5px'}}>
                                        <i class="fab fa-stack-overflow" 
                                            style={{color:'white',fontSize:"20px",paddingLeft:'5px'}}>
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='google-map'>
                                <GoogleMapReact
                                defaultCenter={ this.props.center }
                                defaultZoom={ this.props.zoom }>
                                
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowApp;