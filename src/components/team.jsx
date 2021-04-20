import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Team extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {
      // OwlCarousel Options
      const options = {
         loop: false,
         rewind: true,
         0: {
            items: 1,
            margin: 5,
         },
         600: {
            items: 1,
            margin: 5,
         },
         768: {
            items: 2,
         },
         992: {
            items: 2,
         },
         1000: {
            items: 2,
         }
      };

      let data = [
         { name: 'Antoine François', designation: 'developer', photo: 'antoine.jpg', linkedin: 'https://www.linkedin.com/in/valentin-cochin/', github: 'https://github.com/valentin-cochin'},
         { name: 'Valentin Cochin', designation: 'developer', photo: 'valentin.jpg', linkedin: 'https://www.linkedin.com/in/francois-antoine3/', github: 'https://github.com/AntoineFran'}
      ];

      // Data Loop
      let DataList = data.map((val, i) => {
         return (
            <div className="team-item" key={i}>
               <div className="team-block">
                  <div className="team-box">
                     <div className="team-avtar">
                        <img src={`assets/images/avatar/${val.photo}`} alt="" />
                     </div>
                     <div className="team-text">
                        <h3>{val.name}</h3>
                        <h6>{val.designation}</h6>
                     </div>
                     <div className="overlay">
                        <ul className="team-social">
                           <li><a href={val.linkedin} target="_blank"><i className="fa fa-linkedin"></i></a></li>
                           <li><a href={val.github} target="_blank"><i className="fa fa-github"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         );
      });

      return (
         <section id="team" className="team">
            <div className="team-decor">
               <div className="team-circle1"><img src="assets/images/team1.png" alt="" /></div>
               <div className="team-circle2"><img src="assets/images/team3.png" alt="" /></div>
               <div className="team-circle3"><img src="assets/images/team.png" alt="" /></div>
            </div>
            <div className="container">
               <div className="row ">
                  <div className="col-sm-12">
                     <h2 className="title">our <span>team</span></h2>
                  </div>
                  <div className="col-sm-12">
                     <div>
                        <OwlCarousel
                           className="team-carousel owl-carousel owl-theme"
                           loop={true}
                           margin={30}
                           nav={false}
                           dots={true}
                           responsive={options}
                        >
                           {DataList}
                        </OwlCarousel>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Team;