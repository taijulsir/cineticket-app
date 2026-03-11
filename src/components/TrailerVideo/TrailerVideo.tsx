
function TrailerVideo({ link }) {

  function getVideoId(url) {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v");
    }
    return videoId;
  }

  const videoId = getVideoId(link);

  return (
    <div className="">
      <iframe
        className="rounded-2xl w-full md:w-[600px] h-[300px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width={900}
        title={"title"}
      ></iframe>
    </div>
  );
}

export default TrailerVideo; 
