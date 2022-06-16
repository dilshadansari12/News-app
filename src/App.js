import React , {useState} from "react";
import Nav from "./Component/Nav";
import NewBody from "./Component/NewBody";
import { Route, Routes } from "react-router-dom";
import TopLoadingbar from "./TopLoadingbar";

function App() {

  let [apikey , eapikey]=useState("baad4d7b9bb049e5b818ca15496a7be2");

  // baad4d7b9bb049e5b818ca15496a7be2
  return (
    <div className="App">
      <Nav />
      
     <TopLoadingbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <NewBody
              key="general"
              pageno={9}
              country={"in"}
              category={"general"}
              apikey={apikey}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <NewBody
              key="business"
              pageno={9}
              country={"in"}
              category={"business"}
              apikey={apikey}

              
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <NewBody
              key="entertainment"
              pageno={9}
              country={"in"}
              category={"entertainment"}
              apikey={apikey}

            />
          }
        />
        <Route
          exact
          path="sport"
          element={
            <NewBody key="sport" pageno={9} country={"in"} category={"sport"}  
            apikey={apikey}

            />
          }
        />
        <Route
          exact
          path="health"
          element={
            <NewBody
              key="health"
              pageno={9}
              country={"in"}
              category={"health"}
              apikey={apikey}

            />
          }
        />
        <Route
          exact
          path="science"
          element={
            <NewBody
              key="science"
              pageno={9}
              country={"in"}
              category={"science"}
              apikey={apikey}

            />
          }
        />
        <Route
          exact
          path="technology"
          element={
            <NewBody
              key="technology"
              pageno={9}
              country={"in"}
              category={"technology"}
              apikey={apikey}

            />
          }
        />
        <Route
          exact
          path="*"
          element={
            <NewBody
              key="general"
              pageno={9}
              country={"in"}
              category={"general"}
              apikey={apikey}

            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
