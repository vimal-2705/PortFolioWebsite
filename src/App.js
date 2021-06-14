import React from 'react';
import './App.css';
import About from './components/About';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import RecomSection from './components/RecomSection';
import SkillSection from './components/SkillSection';
import Title from './components/Title';
import WriteRecom from './components/WriteRecom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import { Provider } from './Context';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Title name="VIMAL" leadText="I am a freelancer developer" />
            <RecomSection />
            <SkillSection />
            <ProjectSection />
            <About />
            <BlogSection />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/write-a-recommendation" component={WriteRecom} />
          <Route exact path="/allprojects" component={AllProjects} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/allblogs" component={AllBlogs} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
