import React from "react";

const Newscard = ({skill,saveArticle}) => 
  <div className= "news-card">
      
    <div className="source">
        <h3>{skill.source.name}</h3>
    </div>
    <div className="author">
        <h4>{skill.author}</h4>
    </div>
    <div className="title">
        <h5>{skill.title}</h5>
    </div>
    <div className="description">
        <h6>{skill.description}</h6>
    </div>
    <div className="link-tag">
        <a href={skill.url} className="abcd">Original Source</a>
    </div>
    <div className="image-url">
        <img src={skill.urlToImage} alt="source" className="image"/>
    </div>
    <div className="publishedAt">
        <h6>{skill.publishedAt}</h6>
    </div>
    <div className="content">
        <h5>{skill.content}</h5>
    </div>
    <button className= "btn" value={skill.source.name} onClick= {saveArticle}>Save Article</button>

  </div>;

export default Newscard;
