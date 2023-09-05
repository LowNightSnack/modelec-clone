import SlidingIconButton from "./SlidingIconButton";
import ArrowLongRight from "./icons/ArrowLongRight";

const CatProfileBox = ({ name, url }: { name: string; url: string }) => (
  <div className="profile relative bg-[#f6f6f6] isolate overflow-hidden flex-shrink-0 rounded-xl p-14">
    <img src={url} />
    <h3 className="profileName mt-14 text-2xl">{name}</h3>
    <div className="profileBackgroundScroller flex gap-10 absolute top-20 left-0 text-8xl -z-10 text-white pointer-events-none">
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
    </div>
    <div className="profileDiscover absolute bottom-0 left-0 w-full h-20 flex justify-center">
      <SlidingIconButton
        icon={<ArrowLongRight />}
        classes="h-fit bg-[#2f3035] text-white"
        text="Discover"
      />
    </div>
  </div>
);

export default CatProfileBox;
