import React from 'react';

interface SkeletonProps {
  height?: any;
  mdHeight?: any;
  lgHeight?: any;
  width?: any;
  mdWidth?: any;
  lgWidth?: any;
}

function Skeleton({ height, mdHeight, lgHeight, width, mdWidth, lgWidth }: SkeletonProps) {
  return (
    <div
      className={`
        ${height ? `h-[${height}]` : ''}
        ${mdHeight ? `md:h-[${mdHeight}]` : height ? `md:h-[${height}]` : ''}
        ${lgHeight ? `lg:h-[${lgHeight}]` : mdHeight ? `lg:h-[${mdHeight}]` : height ? `lg:h-[${height}]` : ""}

        ${width ? `w-[${width}]` : ''}
        ${mdWidth ? `md:w-[${mdWidth}]` : width ? `md:w-[${width}]` : ''}
        ${lgWidth ? `lg:w-[${lgWidth}]` : mdWidth ? `lg:w-[${mdWidth}]` :  width ? `lg:w-[${width}]` : ""}

        bg-red-300 rounded skeleton-gradient
      `}
    ></div>
  );
}

export default Skeleton;
