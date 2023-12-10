import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [filterAuthor, setFilterAuthor] = useState("");

  useEffect(() => {
    const apiUrl =
      "https://newsapi.org/v2/everything?q=keyword&apiKey=8d83ca63f54b4736899267b8fad9dba4";

    axios
      .get(apiUrl)
      .then((response) => {
        const filteredArticles = response.data.articles.filter(
          (article) =>
            article.title &&
            article.description &&
            article.url &&
            article.author
        );

        setNewsArticles(filteredArticles);
        console.log(filteredArticles);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilterAuthor(event.target.value);
  };

  const filteredArticles =
    filterAuthor === ""
      ? newsArticles
      : newsArticles.filter((article) =>
          article.author.toLowerCase().includes(filterAuthor.toLowerCase())
        );

  return (
    <div>
      <h2
        style={{
          backgroundColor: "darkblue",
          padding: "20px",
          textAlign: "center",
        }}
      >
        News Dashboard
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label>Filter by Author: </label>
        <input type="text" value={filterAuthor} onChange={handleFilterChange} />
      </div>

      <NewsList articles={filteredArticles} />
    </div>
  );
};

export default App;
