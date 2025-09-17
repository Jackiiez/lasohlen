

const Video = ({ src}) => {
  return (
    <>
   
      <video controls width="500">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </>
  );
};

export default Video
