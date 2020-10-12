import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [images, setimages] = useState([]);
  const [input, setinput] = useState("dogs");
  const [count, setcount] = useState(10);
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   },
  // }));
  // const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=18671218-994ed45afa93d10fd5be08e94&per_page=${count}&q=${input}`
      )
      .then((e) => setimages(e.data.hits))
      .catch((e) => console.log(e));
  }, [input, count]);

  return (
    <div className="App container p-4">
      <h1>Images</h1>
      <div className="form-row">
        <input
          className="form-control col-md-10"
          placeholder="Search your images"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        {/* &nbsp; <button className="btn btn-primary btn-sm">Search</button> */}
        <input
          className="form-control col-md-2"
          placeholder="Max Results"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />
      </div>
      <hr />
      <div className="row">
        {images.map((image) => (
          <div className="col-md-3 custom-div">
            <div className="card">
              <img
                className="img-fluid custom-img"
                key={image.id}
                alt={image.tags}
                src={image.webformatURL}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
