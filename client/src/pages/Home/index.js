import React, { Component } from "react";
import Helmet from "react-helmet";
// Assets
import './styles.css';

// Components
import Banner from './details/Banner';
import Categories from '../../components/Products/Categories';
import Post from '../../components/Blog';
import Services from '../../components/Services';
import Carrousel from "../../components/Carrousel";



class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }
  componentWillUpdate(){
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';
    
      var that = this;
      var delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function () {
        that.tick();
      }, delta);
    };
  
    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  };
  componentDidMount() {
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';
    
      var that = this;
      var delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Inicio"
        />
        <div className="container-fluid has-background-moby">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1" id="carousel">
                <div className="has-text-centered" id="typetxt">
                  <h1 className="is-size-1">
                    <a href="" className="typewrite" data-period="2000" 
                    data-type='[ 
                        "Moby Supply.",
                        "De todo para el evanista.",
                        "Servicios de:",
                        "- Cortes.",
                        "- Canteo.",
                        "- Perforación."
                      ]'>
                      <span className="wrap"></span>
                    </a>
                  </h1>
                </div>
                <div className="" id="homeCarousel">
                  <Carrousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Banner />
        <Services />
        <Categories />
        <Post />
      </div>
    );
  }
}

export default Home;