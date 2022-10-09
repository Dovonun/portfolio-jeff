const TextTemplate = ({
  children,
  className = '',
}: {
  children: JSX.Element[] | JSX.Element;
  className?: string | undefined;
}) => {
  return (
    <div
      className={`${className} z-10 m-4 mt-[15vh] flex h-1/2 w-1/3 flex-col justify-around pr-10 text-xl leading-normal 2xl:text-3xl`}
    >
      {children}
    </div>
  );
};

export default TextTemplate;
