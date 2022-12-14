const Story = ({ username, img }) => {
  return (
    <div className="">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt={`Picture of ${username}`}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};
export default Story;
