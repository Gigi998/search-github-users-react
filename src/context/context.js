import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
import { useContext } from "react";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [isLoading, setIsLoading] = useState(false);
  //User input state
  const [user, setUser] = useState("");
  //API request
  const [requests, setRequests] = useState(0);
  //Error
  const [error, setError] = useState({ show: false, msg: "" });

  //Submit button function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      fetchUser(user);
    }
  };

  //Fetch requests
  const fetchRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then((response) => {
        const request = response.data.resources.core.remaining;
        setRequests(request);
        if (request === 0) {
          errorHandling(
            true,
            "Sorry, you have exceeded your hourly rate limit!"
          );
        }
      })
      .catch((err) => console.log(err));
  };

  //Error handling
  const errorHandling = (show = false, msg = "") => {
    setError({ show, msg });
  };

  //Fetch user
  const fetchUser = async (user) => {
    //Remove error
    errorHandling();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) =>
      console.log(error)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      //Render all at the same time
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((result) => {
          const [repos, followers] = result;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      errorHandling(true, "there is no user with that username");
    }
    setIsLoading(false);
    fetchRequests();
  };

  //Request useEffect
  useEffect(fetchRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        isLoading,
        user,
        setUser,
        handleSubmit,
        requests,
        error,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
