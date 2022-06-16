import React, { useState, useEffect } from "react";
import BodyPrON from "./BodyPrON";
import Loading from "./Loading";
import PropTypes from "prop-types";
import TopLoadingbar from "../TopLoadingbar";
import InfiniteScroll from "react-infinite-scroll-component";
  


// `https://newsapi.org/v2/top-headlines?country=in&apiKey=baad4d7b9bb049e5b818ca15496a7be2&page=${page}&pagesize=9`

// https://newsapi.org/v2/top-headlines?country=us&apiKey=4afc0fa668554729bd1fc0737e145b86
 
// extra api 

// 1  baad4d7b9bb049e5b818ca15496a7be2
//2  4afc0fa668554729bd1fc0737e145b86
//3 ceef83eaade84aeea4371e76451d90e0

const NewBody = (props) => {
  let a = [];
  let [catchval, apnadata] = useState(a);
  let [page, epage] = useState(1);
  let [totalpg, etotlapg] = useState(0);
  let [loading, eloading] = useState(false);
  document.title = `${props.category}- Elaichi News`;


   const ApiDataFF = ()=>{
    <TopLoadingbar />
    let api_data = fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageno}`
    )
      .then((fdata, ferror) => {
        return fdata.json();
       <TopLoadingbar />

      })
      .then((sdata, serror) => {
        apnadata(sdata.articles);
        etotlapg(sdata.totalResults);
         <TopLoadingbar />

      })
      .catch((eroors) => {
        console.log(eroors);
      });

    eloading(true);

    setTimeout(() => {
      eloading(false);
    }, 1 * 1000);
   }



  useEffect(() => {

    ApiDataFF();
    
  }, []);

  const NextLoadFun = () => {
    epage(page + 1 );

    let api_data = fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageno}`
    )
      .then((fdata, ferror) => {
        return fdata.json();
      })
      .then((sdata, serror) => {
        apnadata(catchval.concat(sdata.articles));
        etotlapg(sdata.totalResults);
      })
      .catch((eroors) => {
        console.log(eroors);
      });

  };

  return (
    <>
      <h2
        style={{ color: "red", width: "100%", textAlign: "center" }}
        className="my-3"
      >
        Elaichi - News Top Headlines
      </h2>
      {loading && <Loading />}

      <InfiniteScroll
        dataLength={catchval.length}
        next={NextLoadFun}
        hasMore={ catchval.length < totalpg}
        loader={
          <div>
            {" "}
            <Loading />{" "}
          </div>
        }
      >
        <div className="container d-flex justify-content-sm-around flex-wrap mt-2">
          {
            catchval.map((curr, i) => {
              return (
                <BodyPrON
                  title={curr.title}
                  urlToImage={curr.urlToImage}
                  url={curr.url}
                  content={curr.content}
                  key={i}
                  dates={curr.publishedAt}
                  authore={curr.author}
                />
              );
            })}
        </div>
      </InfiniteScroll>
    </>
  );
};

NewBody.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
  pageno: PropTypes.number,
  category: PropTypes.string,
};

NewBody.defaultProps = {
  country: "in",
  pageno: 2,
  category: "general",
};

export default NewBody;
