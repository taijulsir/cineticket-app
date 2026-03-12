function CardSkeletonWrapper(props: any) {
  const { children } = props || {};
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-8 w-full mx-auto"
    >
      {children}
    </div>
  );
}

export default CardSkeletonWrapper;
