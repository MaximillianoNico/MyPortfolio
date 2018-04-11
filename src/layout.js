import React,{Component} from 'react';
import Navigation from './module/common/component/Navigation';
import frontPageMenu from './module/common/atribute/frontPageMenu';
class layout extends Component{
    render(){
        return(
            <div>
                <Navigation menu={frontPageMenu}/>
            </div>
        )
    }
}

export default layout;