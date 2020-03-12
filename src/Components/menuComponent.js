import React, {Component} from 'react';

class menuComponent extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div class="top_menu_bar">
	<div class="container">      
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="top_nav">
              	<li class="menu-tag select-sec flip">
                	<a href="#" ><i class="fa fa-bars" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" class="graphic">Graphic Design</a></li>
                <li><a href="#" class="print">Print</a></li>
                <li><a href="#" class="signs">Signs</a></li>
                <li><a href="#" class="apparel">Apparel</a></li>
                <li><a href="#" class="website">Website</a></li>
                <li><a href="#" class="direct-mail">Direct Mail</a></li>
                <li><a href="#" class="promotional padd_right_no">Promotional</a></li>
            </ul>
            </div>
          </div>
        </nav>
    </div>
</div>
            </React.Fragment>

          );
    }
}
 
export default menuComponent;