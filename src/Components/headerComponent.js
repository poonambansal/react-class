import React, {Component} from 'react';

class headerComponent extends Component {
    state = {  }
    render() { 
        return ( 
           <React.Fragment> 
        <div className="container">
        <header className="pad_t10">
            <div className="logo"><a href="/"><img src="img/dreamscape_logo.svg" alt="" width="200" /></a></div>
            <div className="respo"><a href="#" className="button floatRight"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart</a></div>
            <div className="right_side">
                <a href="#" className="button floatRight desktop"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping Cart</a>
                <div className="clr"></div>
                <ul className="header-menu">
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Custom Quote</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Templates</a></li>
                </ul>
                <div className="search">
                    <a href="#" id="ancMenuButton"><i className="fa fa-search" aria-hidden="true"></i></a>
                    <div id="divMenu" className="search-bar">
                        <div className="search-box"><input name="" type="text" /></div> <button className="button1">search</button>
                    </div>
                </div>
            </div>
        </header>
    </div> 
    </React.Fragment>
    );
    }
}
 
export default headerComponent;
