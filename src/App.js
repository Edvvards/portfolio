import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppNavBar, Home, Blogs, Projects, Contact, TopOfPage, AppFooter } from './components';
import '../src/stylesheets/index.css';

function App() {
  return (
    <div className="App">
      <AppNavBar />
        <section className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blogs} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
        <TopOfPage />
        </section>
        <AppFooter />
    </div>
  );
}

export default App;