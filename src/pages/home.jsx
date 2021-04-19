import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import Tilt from 'react-tilt';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';

class Home extends React.Component {

	constructor () {
	    super()
	    this.state = {
	      isOpen: false
	    }
	    this.openModal = this.openModal.bind(this)
	}

	openModal () {
	    this.setState({isOpen: true})
	}

	componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
	}

  render() {
  	document.body.classList.add('home-style');
  	document.body.classList.add('three');
  	return (
  		<div>
  			{/* Navbar Component*/}
  			<Navbar />

  			{/* Home Section Start */}
  			<section id="home" className="home home-three vertical-scrolling">
			   <div className="container">
			      <div className="row">
			         <div className="col-md-5 col-sm-12">
			            <div className="home-contain">
			               <div className="text-white">
			                  <div className="contain">
			                  <img src="assets/images/home2/logo-icon.png" alt="" />
			                  <h4 >Landing page for</h4>
			                  <h1 className="text-white">t<span className="f-bold">o</span>v<span className="f-bold">o</span>
			                     <span className="f-bold f-color text-white">app</span>
			                  </h1>
			                  <p className="slide-cap-desc">Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
			                  </div>
			                  <div className="play-button">
			                  	<ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='54298665' height={600} width={800} onClose={() => this.setState({isOpen: false})} />
			                  	<a className="popup-vimeo animated-circle" >
			                     <img src="assets/images/home2/play-button.png" alt="play-button" onClick={this.openModal} className="img-fluid" />
			                    </a>
			                  </div>
			               </div>
			            </div>
			         </div>
			         <div className="col-sm-7">
			            <div className="home-right">
			            	<Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale:1 }}>
			               		<img src="assets/images/home3/home-3-img.png" className="img-fluid" alt="slider-caption" />
			               	</Tilt>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
			{/* Home Section End */}

			{/*Subscription Component*/}
			<Subscribe />

			{/*Footer Component*/}
			<Footer />
  		</div>
  	);
  }
}

export default Home;