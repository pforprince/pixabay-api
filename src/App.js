import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [images, setimages] = useState([]);
  const [input, setinput] = useState("dogs");
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
        `https://pixabay.com/api/?key=18671218-994ed45afa93d10fd5be08e94&per_page=5&q=${input}`
      )
      .then((e) => setimages(e.data.hits))
      .catch((e) => console.log(e));
  }, [input]);

  return (
    <div className="App container">
      <h1>Images</h1>
      <input value={input} onChange={(e) => setinput(e.target.value)} />
      <button className="btn btn-primary">Search</button>

      <div className="row">
          {images.map((image) => (
            <div className="col-md-3">
              <img
                className="img-fluid"
                key={image.id}
                alt={image.tags}
                src={image.webformatURL}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default App;
