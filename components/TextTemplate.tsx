const TextTemplate = ({
  children,
  className = '',
}: {
  children: JSX.Element[] | JSX.Element;
  className?: string | undefined;
}) => {
  return (
    <div
      className={`${className} z-10 flex h-1/2 w-1/3 flex-col justify-evenly text-xl`}
    >
      {children}
    </div>
  );
};

export default TextTemplate;
