const SlidingIconButton = ({
  icon,
  classes,
  text,
}: {
  icon: React.ReactNode;
  classes: string;
  text: string;
}) => (
  <button
    className={`slidingContainer relative overflow-hidden flex gap-4 items-center p-3 rounded-lg ${classes}`}
  >
    <span className="slidingIconLeft absolute">{icon}</span>
    <span className="slidingText">{text}</span>
    <span className="slidingIconRight">{icon}</span>
  </button>
);

export default SlidingIconButton;
