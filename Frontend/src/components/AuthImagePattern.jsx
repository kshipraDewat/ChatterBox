const AuthImagePattern = ({ title, subtitle }) => {
  const heartPattern = [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-100 p-12">
      <div className="text-center">
        <div className="grid grid-cols-5 gap-3 mb-8">
          {heartPattern.flat().map((cell, i) =>
            cell ? (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-primary/10 ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ) : (
              <div key={i} />
            )
          )}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
