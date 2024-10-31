interface DiamondImageProps {
  src: string;
  alt: string;
  className?: string;
}

const DiamondImage = (props: DiamondImageProps) => {
  return (
    <div
      className={`relative overflow-hidden ${props.className} w-auto h-auto`}
    >
      <div className="absolute inset-0 transform bg-transparent">
        <img
          src={props.src}
          alt={props.alt}
          className="absolute inset-0 w-full h-full object-cover "
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
};

export default DiamondImage;
