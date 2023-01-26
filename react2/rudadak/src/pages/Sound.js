import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';




const Player = () => (
    <AudioPlayer
      autoPlay
      src="../audio/tts.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );

  export default Player;