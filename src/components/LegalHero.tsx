const LegalHero = ({
  title,
  updateDate,
}: {
  title: string;
  updateDate: string;
}) => {
  return (
    <section className="flex items-center justify-center flex-col gap-y-4 md:gap-y-6 py-20 px-4 md:py-24">
      <h1 className="text-h5 md:text-h4 lg:text-h3 text-center">{title}</h1>
      <p className="body-text-medium-regular text-white">{updateDate}</p>
    </section>
  );
};

export default LegalHero;
