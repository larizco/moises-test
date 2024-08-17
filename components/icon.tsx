import Image from "next/image";

interface IconProps {
  name: 'heart' | 'filled-heart' | 'play'
  size: 'small' | 'large'
};

export default function Icon({ name, size }: IconProps) {
  const sizeNumber = size === 'small' ? 16 : 64;

  return (
    <Image src={`/assets/icons/${name}.svg`} width={sizeNumber} height={sizeNumber} alt={name}/>
  );
};