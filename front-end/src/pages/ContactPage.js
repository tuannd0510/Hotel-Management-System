import React, {Component} from "react";
import Banner from "../components/Banner";
import {MyContext} from '../Context';

export default class ContactPage extends Component {
  static contextType = MyContext;
  render () {
      return (
      <div className='contact'>
      <Banner
        title="Contact us"
      >
        <ul className='contact-infor'>
        <li>Address: 1st Dai Co Viet, Hai Ba Trung, Ha Noi</li>
        <li>Email: hotelCalifornia@gmail.com</li>
        <li>Phone: +84 1234 5678</li>
        <li>Facebook: hotelCalifornia/facebook.com</li>
        </ul>
      </Banner> 
      </div>
      );
  }
}