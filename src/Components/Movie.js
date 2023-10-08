
const Movie = (props) => {
  return (
    <div className="col">
      {console.log(props.poster)}

      <div className="card" style={{ width: "18rem" }}>
        <img src={props.poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <div className="card-body">
          <a href="/#" className="card-link">
            Year : {props.year}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
