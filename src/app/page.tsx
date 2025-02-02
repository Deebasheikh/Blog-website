import VideoComponent from "./component/video"
export default function Home () {
  return (
    <>
    
    <div className="flex flex-col h-[79vh] lg:h-[78.2vh] overflow-hidden">
      <div className="relative w-full flex-1 bg-blend-overlay overflow-hidden">
        <VideoComponent />
      </div>
     
      {/* <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Landing Page</h1>
        <p className="text-xl mt-4">Explore our content below</p>
      </div> */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    </div>


    </>
  );
};
