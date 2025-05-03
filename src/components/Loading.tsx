type Props = {
    progress: number;
  };
  
  const LoadingScreen = ({ progress }: Props) => (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-2xl mb-4">Loading... {progress}%</div>
      <div className="w-1/2 bg-gray-700 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
  
  export default LoadingScreen;
  