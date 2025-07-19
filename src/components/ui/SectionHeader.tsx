function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl lg:text-5xl font-black pb-5 gradient-text">
        {title}
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto">{description}</p>
    </div>
  );
}

export default SectionHeader;
