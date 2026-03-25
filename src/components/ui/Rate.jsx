import React, { useState } from "react";
import Icon from "@/components/ui/Icon";

const Rate = ({ value = 0, count = 5, onChange = () => {}, allowHalf = false, interactive = false, size = 24 }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const getStarType = (index) => {
    if (interactive && hoverValue) {
      return index <= hoverValue ? "full" : "empty";
    }

    if (interactive) {
      return index <= value ? "full" : "empty";
    }

    const intPart = Math.floor(value);
    if (index <= intPart) return "full";
    if (allowHalf && index === intPart + 1 && value % 1 >= 0.5) return "half";
    return "empty";
  };

  const handleClick = (index) => {
    if (interactive) onChange(Math.ceil(index));
  };

  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => {
        const index = i + 1;
        const starType = getStarType(index);

        return (
          <span
            key={index}
            className={interactive ? "cursor-pointer" : "cursor-default"}
            onMouseEnter={() => interactive && setHoverValue(index)}
            onMouseLeave={() => interactive && setHoverValue(0)}
            onClick={() => handleClick(index)}
          >
            {starType === "full" && <Icon icon="material-symbols:star" className="text-yellow-500" width={size} />}

            {starType === "half" && <Icon icon="material-symbols:star-half" className="text-yellow-500" width={size} />}

            {starType === "empty" && <Icon icon="material-symbols:star" className="text-gray-300" width={size} />}
          </span>
        );
      })}
    </div>
  );
};

export default Rate;
