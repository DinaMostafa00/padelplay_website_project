export default function loadingInviteArenasPage() {
  return (
    <div className="my-24 text-center">
      <h1 className="text-2xl flex justify-center items-center"></h1>
      <div className="my-12 animate-pulse">
        {Array.from({ length: 1 }, (loading, i) => (
          <div
            className="text-white flex flex-col justify-center items-center my-12"
            key={i}
          >
            <div className="bg-gray-700/50 my-6 px-6 "></div>
            <div className="w-full lg:w-1/2 bg-gray-700/50 h-48 lg:h-96 "></div>
          </div>
        ))}
      </div>
    </div>
  );
}
