import React from "react";

export default function BookCard() {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img
        className="card-img-top"
        src="./no-img.png"
        alt="Card image"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title">Нэр</h4>
        <p className="card-text">
            Зохиолч:
        </p>
        <p className="card-text">
        Үнэ:
        </p>
        <a href="#" className="btn btn-primary">
          Түрээслэх
        </a>
      </div>
    </div>
  );
}
