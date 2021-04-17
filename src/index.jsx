import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import { default as NoMatch, default as PageNotFound } from './pages/404';
import Faq from './pages/faq';
import ForgetPassword from './pages/forget-pwd';
import Home from './pages/home';
import Review from './pages/review';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ThankYou from './pages/thank-you';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
			  <Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn}/>
			  <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp}/>
			  <Route path={`${process.env.PUBLIC_URL}/forget-password`} component={ForgetPassword}/>
			  <Route path={`${process.env.PUBLIC_URL}/thank-you`} component={ThankYou}/>
			  <Route path={`${process.env.PUBLIC_URL}/review`} component={Review}/>
			  <Route path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
			  <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq}/>
			  <Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
