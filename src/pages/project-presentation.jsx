import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Team from '../components/team';

class ProjectPresentation extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		return (
			<div>
				<Navbar />
				<div className="page-margin">

					<div className="breadcrumb-bg">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-text-center d-align-center">
									<h2 className="title">Project<span> Presentation</span></h2>
								</div>
							</div>
						</div>
					</div>

					<section>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="blog-item">
										<div className="blog-block">
											<div className="blog-box">
												<div className="overflow-hidden">
													<a href={null}>
														<img src="../assets/images/project_presentation_header.png" alt="Project presentation" className="img-fluid" />
													</a>
												</div>
											</div>
										</div>
										<div className="blog-text">
                                            <h2 className="title"><br/>About <span>Cyberpik</span></h2>
											<div className="blog-divider"></div>
											<div className="blog-description">
												<p>Cyperpik is for technophiles who like cyberpunk, vaporwave, synthwave, etc. CyberPik allows them to have fun customising their photos in these themes.</p>
                                                <p>The idea was born in 2020 as the project to validate a developer training. This app serves also as a mean to demonstrate our technical skills and soft skills to future employers.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
                <Team/>
                <Footer/>
			</div>
		);
	}
}

export default ProjectPresentation;