import React from "react";
import { Layout } from "antd";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Error from "./Error.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const { Header, Footer, Content } = Layout;
const App = () => {
  var content = {
    background: "#fff",
    padding: 24,
    minHeight: 500
  };
  var footer = {
    bottom: 0
  };
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Header>
            <NavBar />
          </Header>

          <Content style={content}>
            <Redirect exact path="/" to="/about" />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Content>

          <Footer style={footer}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
