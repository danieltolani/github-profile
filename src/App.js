import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home";
import GitHubRepos from "./components/portfolio";
import ErrorPage from "./components/error-page";
import SingleRepo from "./components/nestedRoutes/SingleRepo";

import "../src/styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="github-repos">
          <Route index element={<GitHubRepos />} /> // "/github-repos"
          <Route path=":repoId" element={<SingleRepo />} /> //
          "/github-repos/github-repo
        </Route>
        {/* <Route path="github-repos" element={<GitHubRepos />}>
          <Route exact path=":id" element={<TestPage />} />
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
