import React from "react";
import "../src/NewsItem.css";

const NewsItem = ({ article }) => {
  const { title, description, url, publishedAt, author, urlToImage } = article;
  const dateofPublication = new Date(publishedAt).toLocaleDateString();

  return (
    <div className="news-content">
      <table className="news-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date of Publication</th>
            <th>Author</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={urlToImage}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "200px",
                  maxHeight: "200px",
                  backgroundColor: "white",
                }}
              />
            </td>

            <td>
              <h2>{title}</h2>
            </td>
            <td>
              <p className="description">{description}</p>
            </td>
            <td>
              <p>{dateofPublication}</p>
            </td>
            <td>
              <b>{author}</b>
            </td>
            <td>
              <a
                href={url}
                className="url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Read More</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewsItem;
