import { useState } from "react";

const CategoryItem = ({icon, name, color}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="category__box" style={
      {
        background: `linear-gradient(135deg, rgba(155,155,155,0.1) ${isHovered ? '30%' : '40%'}, rgba(${color}, 0.4) ${isHovered ? '100%' : '100%'}`, 
        filter: isHovered ? 
          `drop-shadow(1px 1px 5px rgba(${color}, 0.4))` 
          : 
          ''
      }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h1>{icon}</h1>
      <p>{name}</p>
    </div>
  );
}
 
export default CategoryItem;