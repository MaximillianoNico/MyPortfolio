import React, {Component} from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './../App.css';
import myFoto from './../asset/Image_.jpg';
import Load from './../asset/ajax-loader.gif';
// import firebase from 'firebase';
import './../style/Portfolio.css';
// import config from './../vendor/firebaseConfig';
class Portfolio extends Component{
    constructor(){
        super();
        this.state={
          name:"",
          job:"",
          location:"",
          summary:``,
          isLoaded: false,
          content:[],
          education:[],
          certification:[],
          peopleView:[],
          imageView:[]
        }
        // firebase.initializeApp(config);
    }
    componentDidMount(){
        axios({
            url:'https://maximilliano-15166.firebaseio.com/.json',
            method: 'GET',})
            .then(
                (ambilData)=>{
                    console.log(ambilData.data.skill);
                    this.setState({
                        content: ambilData.data.skill,
                        isLoaded: true, /*change status boolean isLoaded from 'false' to 'true' for display database 
                                            where api success get data from firebase*/
                        name: ambilData.data.name,
                        job: ambilData.data.job,
                        summary: ambilData.data.summary,
                        education: ambilData.data.education,
                        certification: ambilData.data.Certification
                    })
            })
            .catch(
                (error)=>{
                    console.log(error);
            })
    };
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 11
      }
    render(){
        const {isLoaded, content, education, certification} = this.state;
        // looping array education 
        const edu = education.map((list,index)=>{
            return <div className="">
                        <div className="jumbotron shadow-effect col-lg-10 padding-30p">
                            <h4><b>{list.schoolName}</b></h4>
                            <h5>{list.degree}</h5>
                            <h6>{list.major}</h6>
                            <p>{list.from} - {list.until}</p>
                            <h6></h6>
                        </div>
                    </div>
        })

        // looping array certification
        const Certif = certification.map((certif,index)=>{
            return  <div className="jumbotron shadow-effect col-lg-10 padding-30p">
                        <a href="https://hacktiv8.com/verify/fwdb/maximilliano-nico-lolong/" className="link-href">
                            <h4>{certif.title}</h4>
                            <h6>offered by <b>{certif.company}</b></h6>
                        </a>
                    </div>
        })


        // looping array content
        const datalist = content.map((item,index)=>{
            // setting active carousel with if else
            if(index===0){
                var active = 'carousel-item active';
            }else{
                var active = 'carousel-item';
            }
            return  <div key={index} className={active} style={{marginTop:'60px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <i class={item.Icons} style={{fontSize:'15em'}}></i>
                                </div>
                                <div className="col-lg-6">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        });


        if(!isLoaded){
            return <div className="container" style={{textAlign:'center',marginTop:'20%'}}>
                        <img src={Load} style={{width:70, height:70}}/>
                    </div>
        }
        else{
            console.log("Success Access Firebase Database");
        }
        return(
            <div>
                <div className="container" style={{marginTop:'5%'}}>
                <div className="row">
                    <div className="col-lg-8 setMargin-container" style={{textAlign:'center'}}>
                        <div className="shadow-effect">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <div className="bgCyan">
                                        <img src={myFoto} className="img-profile"/>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 padding-7-persen">
                                    <center style={{textAlign:'left'}}>
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 setMargin">
                                            <h3>{this.state.name}</h3>
                                            <h5><b>{this.state.job}</b></h5>
                                            <h6>{this.state.location}</h6>
                                            <hr/>
                                            <div className="font-sans-pro" style={{textAlign:'none'}}>
                                                <p style={{fontSize:14}}>{this.state.summary}</p>
                                            </div>
                                            <div style={{paddingTop:'10px'}}>
                                                <a href="" className="link-icons">
                                                    <i class="material-icons" 
                                                        style={{
                                                            paddingLeft:'5px',
                                                            paddingRight:'5px'
                                                            }}>&#xE0B0;
                                                    </i>
                                                </a>
                                                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=maximillianonico8@email.com" className="link-icons">
                                                    <i class="material-icons" 
                                                        style={{
                                                            paddingLeft:'5px',
                                                            paddingRight:'5px'
                                                            }}>&#xE0BE;
                                                    </i>
                                                </a>
                                                <a href="https://www.google.co.id/maps/place/Jl.+Damarsari+II,+Jati+Padang,+Ps.+Minggu,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12540/@-6.2853731,106.8299063,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f210e4c4fb01:0x990b7b9fbfe2fdcb!8m2!3d-6.2853731!4d106.832095?hl=id" className="link-icons">
                                                    <i class="material-icons" 
                                                        style={{
                                                            paddingLeft:'5px',
                                                            paddingRight:'5px'}}>&#xE0C8;
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="shadow-effect padding-75 bg-grey">
                            <div>
                                <h5><b>People Also Viewed</b></h5>
                            </div>
                            <div className="container-fluid">
                                <div className="row" style={{marginTop:'10px'}}>
                                    <div className="col-lg-3">
                                        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIAAgDGAAAAAQAAAAAAAAviAAAAJGY2MmE3NDkzLWE5MGItNDViMS1iOTUxLTc5YTI0NDgyZDg3Yw.jpg" className="img"/>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="container">
                                            <h6>Bill Gates</h6>
                                            <p style={{fontSize:'12px'}}><b>Bill & Melinda Gates Foundation</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'20px'}}>
                                    <div className="col-lg-3">
                                        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAArZAAAAJGU5ZmM4NWUwLWY2OTItNGU2My04NGNkLWQ4NTA4NDM5MjRjOQ.jpg" className="img"/>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="container">
                                            <h6>Dara Khosrowshahi</h6>
                                            <p style={{fontSize:'12px'}}><b>CEO at Uber</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" style={{marginTop:'7em'}}>
                <h1 className="font-fira-sans" style={{textAlign:'center'}}>Experience</h1>
                <div className="container jumbotron" style={{marginTop:'30px'}}>
                <div id="carouselExampleControls" style={{}} class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        {datalist}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="fas fa-angle-left" style={{fontSize:'50px',color:'black'}} aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="fas fa-angle-right" style={{fontSize:'50px',color:'black'}} aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
               
            <div className="container"style={{marginTop:'7em'}}>
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="">Education</h1>
                        {edu}
                    </div>
                    <div className="col-lg-4">
                        <h1>Certification</h1>
                        {Certif}
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
                                <a href="https://stackoverflow.com/users/9171449/maximilliano-nico" 
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
export default Portfolio;
