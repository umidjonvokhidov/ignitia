export default function Heading() {
  return (
    <section className="p-4 md:p-8 lg:p-10 flex flex-col gap-y-4 items-center border-b border-white/8 relative overflow-visible">
      <div className="w-[1000px] h-[500px] left-1/2 -translate-x-1/2 -bottom-[400px] absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px] z-5" />
      <h3 className="text-h5 md:text-h4 lg:text-h3 max-w-[600px] text-center">
        Every journey begins with the <span className="handwrite">user</span>
      </h3>
      <p className="body-text-small-regular text-center max-w-[650px]">
        Ignitia is on a mission to solve user management once and for all. We
        are a globally distributed team dedicated to providing the best
        developer experience with obsessive attention to every detail.
      </p>
    </section>
  );
}
