'use client';

import Lottie from 'lottie-react';
import Loader from '@/public/lotties/Loader.json';

const Loading = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Lottie
        animationData={Loader}
        loop={true}
        autoPlay={true}
        className="size-[200px]"
      />
    </section>
  );
};

export default Loading;
