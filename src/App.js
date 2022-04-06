import logo from "./logo.svg";
import "./App.css";
import VideoJs from "./VideoJs";
import video from "./video.mp4";

const App = () => {
  const videoJsOptions = {
    // autoplay=false,
    controls: true,
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  };
  return (
    <div className="App">
      <VideoJs options={videoJsOptions} />
    </div>
  );
};

export default App;
