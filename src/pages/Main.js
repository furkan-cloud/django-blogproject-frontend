import React from "react";
import axios from "axios";
import Card from "../components/card";
import CardList from "../components/CardList";

function Main(props) {
  const axios = require("axios");

  // Make a request for a user with a given ID
  //   async axios
  //     .get("https://djangorest-blog.herokuapp.com/")
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //       setArticleList(response.data.results)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })

  //   getUser()
  // .then(function () {
  //   // always executed
  // });

  return (
    <div>
      <CardList />
    </div>
  );
}

export default Main;
