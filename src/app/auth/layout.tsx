export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative mx-auto w-full grid grid-cols-[20px_1fr_20px] md:grid-cols-[80px_1fr_80px] xl:grid-cols-[120px_1fr_120px] max-w-[1536px] h-screen overflow-x-hidden">
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
      <div className="w-[1018px] h-[563px] absolute blur-[150px] opacity-70 bg-[linear-gradient(180deg,rgba(55,122,251,0.15)_25%,rgba(255,255,255,0.04)_100%)] top-1/2 left-1/2 -translate-1/2 -z-5" />
      <div className="w-full min-w-0 flex flex-col border-y border-white/8 my-8 md:my-14 lg:my-20">
        {children}
      </div>
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
    </main>
  );
}
