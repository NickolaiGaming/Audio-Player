import React from "react";
import Player from "@madzadev/audio-player";

const tracks = [
    {
      url: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
      title: "Mario Castle",
      tags: ["Game"],
    },
    {
      url: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3",
      title: "Mario Star",
      tags: ["Game"],
    },
    {
      url: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
      title: "Mario Overworld",
      tags: ["Game"],
    },
  ];



const Player1 = () => {
    return (
        <div>
            <Player 
                trackList={tracks}
            />
        </div>
    )
}

export default Player1