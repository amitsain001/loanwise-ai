const GlassCard = ({
  children,
  className,
}) => {
  return (
    <div
      className={`
        glass
        rounded-3xl
        p-6
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;