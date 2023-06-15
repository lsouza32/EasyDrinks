interface ButtonProps {
  border?: string;
  color?: string;
  height?: string;
  onClick: () => void;
  radius?: string
  width?: string;
  background?: string;
  placeholder: string;
}

export function Button({border, color, height, onClick, radius, width, background, placeholder}: ButtonProps){
  return(

    <button
      onClick={onClick}
      style={{
        backgroundColor: background,
        border,
        borderRadius: radius,
        height,
        width,
        color: color
      }}
    >
      <text style={{color:color}}>{placeholder}</text>
    </button>

  );
}
