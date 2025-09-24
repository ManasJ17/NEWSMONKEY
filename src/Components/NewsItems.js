import React from "react";

const NewsItems = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="card h-100 shadow-sm position-relative">
      {/* Badge */}

      <div>
        <span className="badge rounded-pill bg-danger" style={{ display: 'flex' , justifyContent:'flex-end' , position:'absolute', right:'0' }}>{source}</span>
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        className="card-img-top"
        alt="news"
        style={{ width: "100%", maxHeight: "150px", objectFit: "cover" }}
      />

      {/* Card Body */}
      <div className="my-3">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-dark">
              By <strong>{author}</strong> on <strong>{date}</strong>
            </small>
          </p>
          {/* <a href={newsUrl} className="btn btn-sm btn-dark mt-auto">
            Read More
          </a> */}
          <div className="d-grid gap-2">
            <a className="btn btn-dark" href={newsUrl} type="button">
            Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
