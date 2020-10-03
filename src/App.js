import React from "react";
import "./style/style.css";
import "./App.css";
import imgSrc from "./assets/imageInSrc.jpg";

function App() {
  return (
    <div>
      <div
        style={{
          border: "solid 1px black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="title red" style={{ marginBottom: 0 }}>
          Hela Sassi
        </h1>

        <br></br>

        <img src={imgSrc} style={{ height: 500, width: 350 }} alt="natureImg" />

        <br></br>

        <img
          src={"../images/imageInPublic.jpg"}
          style={{ height: 500, width: 350 }}
          alt="seaImg"
        />

        <video style={{ width: 320, height: 240, margin: 15 }} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
