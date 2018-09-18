import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DOMPurify from 'dompurify';

class Footer extends Component {

	render() {

		let year = new Date().getFullYear();
		let site = this.props.site.results[0] || 'Cargando ...';
		let posts = this.props.blog_post.results || 'Cargando ...';

		let siteName = site.name || 'Moby Supply';
		let siteDescription = site.description || 'Cargando ...';
		let sitePhone = site.phone || 'Cargando ...';
		let sitePhone2 = site.phone2 || 'Cargando ...';
		let siteEmail = site.email || 'Cargando ...';
		let siteEmail2 = site.email2 || 'Cargando ...';
		let siteSchedule = site.schedule || 'Cargando ...';
		let siteSchedule2 = site.schedule2 || 'Cargando ...';
		let siteWorkday = site.workday || 'Cargando ...';
		let siteAddress = site.address || 'Cargando ...';
		let siteAddress1 = site.address1 || 'Cargando ...';

		let postItems = <li className="navbar-item"> Cargando ... </li>;
		if (posts !== 'Cargando ...') {
			postItems = posts.slice(0, 5).map((post) =>
				<li className="navbar-item" key={post.id.toString()}>
					<Link to={
						post.slug
							? `/blog/${post.slug}`
							: `/blog/${post.id}`
					} className="is-uppercase has-text-white">
						{post.title}
					</Link>
				</li>
			);
		}

		return (
			<footer className="is-fullhd has-footer-background has-text-white">
				<div className="container" id="overFooter">
					<div className="columns">
						<div className="column ">
							<h2 className="is-size-4 has-text-white">
								{siteName}
							</h2>
							<p className="has-text-white">
								<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(siteDescription) }}></div>
							</p>
						</div>
						<div className="column">
							<h2 className="is-size-4 has-text-white">Artículos recientes</h2>
							<ul>
								{postItems}
							</ul>
						</div>
						<div className="column">
							<h2 className="is-size-4 has-text-white">Enlaces</h2>
							<ul>
								<li className="navbar-item">
									<Link to="/quienes-somos" className="is-uppercase has-text-white">
										¿Quienes somos?
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/contacto/f-a-q" className="is-uppercase has-text-white">
										Preguntas Frecuentes
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/contacto/terminos" className="is-uppercase has-text-white">
										Terminos y condiciones
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/contacto/privacidad" className="is-uppercase has-text-white">
										Política de privacidad
									</Link>
								</li>
								<li className="navbar-item">
									<Link to="/contacto/site.xml" className="is-uppercase has-text-white">
										Mapa de sitio
									</Link>
								</li>
							</ul>
						</div>
						<div className="column">
							<h2 className="is-size-4 has-text-white">Contacto</h2>
							<p className="has-text-white">
								{siteAddress}
							</p>
							<p className="has-text-white">
								{siteAddress1}
							</p>
							<p className="has-text-white">
								{sitePhone}
							</p>
							<p className="has-text-white">
								{sitePhone2}
							</p>
							<p className="has-text-white">
								Abierto: {siteWorkday}
							</p>
							<p className="has-text-white">
								{siteSchedule}
							</p>
							<p className="has-text-white">
								{siteSchedule2}
							</p>
							<p className="has-text-white">
								{siteEmail}
							</p>
							<p className="has-text-white">
								{siteEmail2}
							</p>
						</div>
					</div>
				</div>
				<div id="is-copyright">
					<nav className="navbar has-footer-background-dark">
						<div className="container is-centered">
							<div className="navbar-brand">
								<p className="navbar-item is-size-7 has-text-white">
									Moby Group all rights reserved {year}
									<span className="is-hidden-touch">&nbsp;|&nbsp;</span>
									<br className="is-hidden-desktop"></br>
									Website Designed & Developed by &nbsp;
									<br className="is-hidden-desktop"></br>
									<a href="https://dev2tech.xyz" className="has-text-grey"> Dev2tech</a>.
								</p>
							</div>
						</div>
					</nav>
				</div>
			</footer>
		);
	}
}

export default Footer;