interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full max-w-full bg-gray-200 rounded-full h-1">
      <div
        className="bg-gradient-to-r from-[#305D3E] to-[#64C383] h-1 rounded-full transition-all duration-300"
        style={{ width: `${progress}%`, maxWidth: '100%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
