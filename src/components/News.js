import React, { useState, useEffect } from "react";
import Axios from "axios";
import Newscard from "./NewsCard";

export const News = () => {
  const [json, setJson] = useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/news",
    }).then((res) => {
      console.log(res);
      const {
        data: {
          msg: { articles },
        },
      } = res;
      setJson([...articles]);
    });
  }, []);
  const saveArticle = (event) =>{
    Axios({
        method: "PUT",
        data: {
          email: sessionStorage.getItem('user'),
          sourcename: event.target.value,
        },
        withCredentials: true,
        url: "http://localhost:5000/save",
      }).then((res) => {
        //  if(res.data.success === true){
        //     //  sessionStorage.setItem('user',res.data.email);
        //     //  return history.push('/news')
        //  }
        console.log(res);
    });
};
    const fetchArticles = () =>{
        Axios({
            method: "POST",
            data: {
              email: sessionStorage.getItem('user'),
            },
            withCredentials: true,
            url: "http://localhost:5000/savedarticles",
          }).then((res) => {
            
            console.log(res);
        });
        };
  return (
    <div>
      <div className="row">
        <navbar className="navbar-news">
          <h3> Welcome to the Daily Updates</h3>
          <div className="search-text">
            <input type="text" className="search" placeholder = "Enter any sourceName here"/>
            <button type = "submit" className="btn" >Search</button>
          </div>
          <div className="saved">
              <div className="saved-tag" onClick = {fetchArticles}>Saved Articles</div>
          </div>
        </navbar>
        <div className="container-grid">
          {json &&
            json.length > 0 &&
            json.map((skill) => (
              <>
                {console.log(skill)}
                <Newscard key = {skill.source.name} skill={skill} saveArticle={saveArticle}/>
                
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
