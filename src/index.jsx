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
import Import from './pages/import';
import GeneralConditions from './pages/general-conditions';
import registerServiceWorker from './registerServiceWorker';
import { FORGET_PASSWORD, GENERAL_CONDITIONS, HOME_PAGE, PROJECT_PRESENTATION, SIGN_IN, SIGN_UP, IMPORT, THANK_YOU, PROFILE, PROFILE_MANAGER } from '../config/url-constants';
import UserAccountView from './pages/user-account-view';
import UserAccountModify from './pages/user-account-modify';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}${HOME_PAGE}`} component={Home}/>
			  <Route path={`${process.env.PUBLIC_URL}${SIGN_IN}`} component={SignIn}/>
			  <Route path={`${process.env.PUBLIC_URL}${SIGN_UP}`} component={SignUp}/>
			  <Route path={`${process.env.PUBLIC_URL}${PROFILE}`} component={UserAccountView}/>
			  <Route path={`${process.env.PUBLIC_URL}${PROFILE_MANAGER}`} component={UserAccountModify}/>
			  <Route path={`${process.env.PUBLIC_URL}${FORGET_PASSWORD}`} component={ForgetPassword}/>
			  <Route path={`${process.env.PUBLIC_URL}${PROJECT_PRESENTATION}`} component={ProjectPresentation}/>
			  <Route path={`${process.env.PUBLIC_URL}${IMPORT}`} component={Import}/>
			  <Route path={`${process.env.PUBLIC_URL}${GENERAL_CONDITIONS}`} component={GeneralConditions}/>
			  <Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
