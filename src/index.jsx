import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import { default as NoMatch } from './pages/404';
import ForgetPassword from './pages/forget-pwd';
import Home from './pages/home';
import ProjectPresentation from './pages/project-presentation';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
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
			  <Route path={`${process.env.PUBLIC_URL}/project-presentation`} component={ProjectPresentation}/>
			  <Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
