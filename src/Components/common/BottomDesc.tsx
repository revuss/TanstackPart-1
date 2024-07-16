import React from "react";
import { Link } from "react-router-dom";

interface BottomDescProps {
  description: string;
  title: string;
  link: string;
}

const BottomDesc: React.FC<BottomDescProps> = ({
  description,
  title,
  link,
}) => {
  return (
    <>
      <p className="text-center text-sm text-gray-500">
        {description}
        <Link
          to={link}
          className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
        >
          {title}
        </Link>
        .
      </p>
    </>
  );
};

export default BottomDesc;
