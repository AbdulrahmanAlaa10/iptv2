import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Login";

class Paid extends Component {

    render() {
        return(

            <Router>
            <section className="sece text-center">
            <div className="hhhhhh">
              <h1 className="hshow">
              🤗 SUBSCRIPTIONS 🤗
              </h1>
            </div>
      
            <div className="container">
              <div className="row">
      
                <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                  <div className="box">
                  <h1>24 HOURS</h1>
                  <p>0$</p>
                  <ul className="seceul list-unstyled">
                  <li>Pay as You go</li>
                  <li>5000 channels</li>
                  <li>2000 vods (AR, non)</li>
                  <li>4k, FHD.HD,SO Quality</li>
                  <li>NO SETUPS REQUIRED</li>
                  <li>ALL IPTV RECIVERS</li>
                  <li>99.9% Uptime</li>
                  </ul>
                  <br />
                  <h3 className="paypay">send to Paypal: med.benzbair@gmail.com</h3>
                  <a href="https://www.paypal.com/eg/webapps/mpp/send-money-online" target="_blank"><button className="btn btn-outline-warning"><i class="fab fa-5 fa-paypal"></i>Pay Now</button></a>


                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                <div className="box">
                  <h1>3 MONTHS</h1>
                  <p>15$</p>
                  <ul className="seceul list-unstyled">
                  <li>Pay as You go</li>
                  <li>5000 channels</li>
                  <li>2000 vods (AR, non)</li>
                  <li>4k, FHD.HD,SO Quality</li>
                  <li>NO SETUPS REQUIRED</li>
                  <li>ALL IPTV RECIVERS</li>
                  <li>99.9% Uptime</li>
                  </ul>
                  <br />
                  <h3 className="paypay">send to Paypal: med.benzbair@gmail.com</h3>
                  <a href="https://www.paypal.com/eg/webapps/mpp/send-money-online" target="_blank"><button className="btn btn-outline-warning"><i class="fab fa-5 fa-paypal"></i>Pay Now</button></a>

                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                <div className="box">
                  <h1>6 MONTHS</h1>
                  <p>25$</p>
                  <ul className="seceul list-unstyled">
                  <li>Pay as You go</li>
                  <li>5000 channels</li>
                  <li>2000 vods (AR, non)</li>
                  <li>4k, FHD.HD,SO Quality</li>
                  <li>NO SETUPS REQUIRED</li>
                  <li>ALL IPTV RECIVERS</li>
                  <li>99.9% Uptime</li>
                  </ul>
                  <br />
                  <h3 className="paypay">send to Paypal: med.benzbair@gmail.com</h3>
                  <a href="https://www.paypal.com/eg/webapps/mpp/send-money-online" target="_blank"><button className="btn btn-outline-warning"><i class="fab fa-5 fa-paypal"></i>Pay Now</button></a>

                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
                <div className="box">
                  <h1>12 MONTHS</h1>
                  <p>40$</p>
                  <ul className="seceul list-unstyled">
                  <li>Pay as You go</li>
                  <li>5000 channels</li>
                  <li>2000 vods (AR, non)</li>
                  <li>4k, FHD.HD,SO Quality</li>
                  <li>NO SETUPS REQUIRED</li>
                  <li>ALL IPTV RECIVERS</li>
                  <li>99.9% Uptime</li>
                  </ul>
                  <br />
                  <h3 className="paypay">send to Paypal: med.benzbair@gmail.com</h3>
                  <a href="https://www.paypal.com/eg/webapps/mpp/send-money-online" target="_blank"><button className="btn btn-outline-warning"><i class="fab fa-5 fa-paypal"></i>Pay Now</button></a>


                  </div>
                </div>
              </div>
            </div>

          </section>



          <section className="EMAIL">
            <h1 className="EMAILUS">
            📧 EMAIL US 📧
            </h1>
            <Login />

            <section className="footer">
            <div className="copyright">
              Copyright &copy; 2020 <span>Welcome To IPTV</span>

            </div>
          </section>

          </section>
          

          </Router>


        )
    }
}



export default Paid;