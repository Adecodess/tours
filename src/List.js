import React, {useState} from "react";


const List = ({ id, img, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  const [card, setCard] = useState(true);

  const removeTour = () => {
    console.log("click");
    setCard(false);
  };

  return (
    <React.Fragment>
      {card && (
        <article className="single tour">
          <div className="wrap">
            <img src={img} alt={name}></img>
            <footer>
              <div className="tour-info">
                <h1>{name}</h1>
                <h2 className="tour-price">${price}</h2>
              </div>

              <p>{readMore ? info : `${info.substring(0, 400)}...`}</p>
              <button className="btn" onClick={() => setReadMore(!readMore)}>
                {" "}
                {readMore ? "Show Less" : "Read More"}{" "}
              </button>
            </footer>
            <button className="dbtn" onClick={removeTour}>
              Not Interested
            </button>
          </div>
        </article>
      )}
    </React.Fragment>
  );
};

export default List;
