import React, {Component} from "react";
import {MyContext} from '../Context';
import Banner from "../components/Banner";
import Services from "../components/Services";
export default class HomePage extends Component {
  static contextType = MyContext;
  render () {
      return (
        <div className="homepage" >
      <Banner
        title="Welcome to Hotel California"
      >
      </Banner> 
      <Services/>
      </div> 
      );
    }
    
}
