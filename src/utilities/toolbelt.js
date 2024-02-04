function formatReleaseDate(date) {
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos(videoDataArray) {
  //site = "Youtube"
  //type - "Trailer"
  return videoDataArray.filter((videoData) => {
    return videoData.site === "YouTube" && videoData.type === "Trailer";
  });
}

function formatText(overview) {
  
  if(overview.length > 140) {
    return overview.substring(0, 175) + '...';
  }

  return overview;
}


export { formatReleaseDate, filterVideos, formatText };
