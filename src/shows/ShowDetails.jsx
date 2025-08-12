import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!show) {
    return (
      <div className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to learn more.</p>
      </div>
    )
  }
  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <EpisodeList episodes={show.episodes} setSelectedEpisode={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  )
}