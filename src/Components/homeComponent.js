import React, {Component} from 'react';
import Header from './headerComponent';
import Footer from './footerComponent';
import Menus from './menuComponent';
import Body from './bodyComponent';

class homeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Menus />
                <Body />
                <Footer />
            </React.Fragment>

         );
    }
}
 
export default homeComponent;