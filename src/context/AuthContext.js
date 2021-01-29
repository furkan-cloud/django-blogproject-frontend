import React, { createContext, useState, useEffect } from "react";
// import firebase from "../firebase/firebase.utils";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     firebase?.firebaseAuth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//   }, []);

const data = {
  username: "furkan@gmail.com",
  password: "ft123456",
};


  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://djangorest-blog.herokuapp.com/auth/login",
      );
      console.log("response", response);
    //   setArticleList(response?.data?.results);
          // setCurrentUser(user);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
    // value={{ currentUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;




// const data = {
//   grant_type: USER_GRANT_TYPE,
//   client_id: CLIENT_ID,
//   client_secret: CLIENT_SECRET,
//   scope: SCOPE_INT,
//   username: DEMO_EMAIL,
//   password: DEMO_PASSWORD
// };



// axios.post(TOKEN_URL, Querystring.stringify(data))   
// .then(response => {
//   console.log(response.data);
//   USER_TOKEN = response.data.access_token;
//   console.log('userresponse ' + response.data.access_token); 
// })   
// .catch((error) => {
//   console.log('error ' + error);   
// });



// const AuthStr = 'Bearer '.concat(USER_TOKEN); 
// axios.get(URL, { headers: { Authorization: AuthStr } })
// .then(response => {
//  // If request is good...
//  console.log(response.data);
// })
// .catch((error) => {
//  console.log('error ' + error);
// });