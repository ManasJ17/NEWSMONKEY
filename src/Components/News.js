import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import imagenotfound from './imagenotfound.png'; // Import the image for not found

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `News Monkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    
    const fetchInitialData = async () => {
      setLoading(true); // ✅ Show spinner before fetching

      let pagesizeLocal = props.pagesize || 6;
      let pageLocal = 1;
      let url = 
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3ff5de7b2b954da98541eae3b52e5a16&pageSize=${pagesizeLocal}&page=${pageLocal}`;

      let data = await fetch(url);
      let parsedata = await data.json();

      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      setLoading(false); // ✅ Hide spinner after fetching
    };

    fetchInitialData();
  }, [props.country, props.category, props.pagesize]);

  // handlePrevClick = async () =>{
  //     console.log("Previous");
  //     const {pagesize} = this.state;
  //     let url = 
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ff5de7b2b954da98541eae3b52e5a16&pageSize=${pagesize}&page=${this.state.page-1}`;
  //   let data = await fetch(url);
  //    this.setState({Loading:true});
  //   let parsedata = await data.json();
   
  //     this.setState({
        
  //       page: this.state.page - 1, 
  //       articles: parsedata.articles,
  //       totalResults: parsedata.totalResults,
  //       Loading:false
  //     })
  //   }

  //   handleNextClick = async () =>{
  //     console.log("Next");
  //     const {pagesize} = this.state;
  //      let url =
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ff5de7b2b954da98541eae3b52e5a16&pageSize=${pagesize}&page=${this.state.page+1}` ;
  //   let data = await fetch(url);
  //   this.setState({Loading:true});
  //   let parsedata = await data.json();
    
  //     this.setState({
  //       page: this.state.page+1,
  //       articles: parsedata.articles,
  //       totalResults: parsedata.totalResults,
  //       Loading:false
  //     })
  //   }

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3ff5de7b2b954da98541eae3b52e5a16&pageSize=${props.pagesize}&page=${nextPage}`;
    
    const data = await fetch(url);
    const parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div style={{paddingTop:'80px'}}>
        <h1 className="text-center my-4" style={{ marginTop: '80px' , marginBottom:'35px' }}>
        <strong>News Monkey - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</strong>
      </h1>

      {loading && <Spinner />}

      <div className="card h-100 d-flex flex-column">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!loading && articles.map((element) => {
                return (
                  <div className="col-lg-4 col-md-6 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 50) + "..." : ""}
                      description={element.description ? element.description.slice(0, 88) + "..." : ""}
                      imageUrl={
                          element.urlToImage && !element.urlToImage.includes("cdn.videocardz.com")
                          ? element.urlToImage
                          : imagenotfound
            }
                      // imageUrl={element.urlToImage ? element.urlToImage : imagenotfound} - this is not working for some images
                      newsUrl={element.url}
                      author={element.author ? element.author : "'Unknown'"}
                      date={new Date(element.publishedAt).toGMTString()}
                      source={element.source.name ? element.source.name : "Unknown"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>

      {/* commetnt the below code to use the pagination buttons */}
      {/* 
      <div className="d-flex justify-content-between">
        <button type="button" disabled={page === 1} onClick={handlePrevClick} className="btn btn-dark"> &larr; Previous </button>
        <button type="button" disabled={page + 1 > Math.ceil(totalResults / pagesize)} onClick={handleNextClick} className="btn btn-dark">Next &rarr; </button>
      </div> 
      */}
      </div>

      
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pagesize: 6,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
};

export default News;
