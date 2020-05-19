import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppNavBar, Home, Blogs, BlogSpecific, Projects, ProjectSpecific, Contact, TopOfPage, AppFooter } from './components';
import '../src/stylesheets/index.css';

function App() {
 
  return (
    <div className="App">
      <AppNavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blogs} exact />
          <Route path="/blog/:id" component={BlogSpecific} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:id" component={ProjectSpecific} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
        <TopOfPage />
        <AppFooter />
    </div>
  );
}

export default App;