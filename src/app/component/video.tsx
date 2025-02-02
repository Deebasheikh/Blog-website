const VideoComponent = () => (
    <div>
      <video autoPlay loop muted 
      className="absolute top-0 left-0 w-full h-[79vh] lg:h-[78.2vh] object-cover">
        <source src="/gilgit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  
  export default VideoComponent;
  