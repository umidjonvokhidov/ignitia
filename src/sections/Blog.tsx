import CustomButton from '@/components/CustomButton';
import { BLOG_POSTS } from '@/lib/constants';
import Image from 'next/image';

export default function Blog() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 p-6 md:p-8 lg:p-10 text-center md:text-start">
        <h2 className="text-h5 md:text-h3 lg:text-[56px] lg:leading-[64px]">
          Ignitia <span className="handwrite">blog.</span>
        </h2>
        <p className="body-text-medium-regular">
          From security tips to in-depth guides, explore everything you need to
          know about managing secure user access with Ignitia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white/8 gap-0.25 border-y border-white/8 ">
        {BLOG_POSTS.slice(0, 1).map(
          ({ category, title, date, image }: BlogPost) => (
            <div key={title} className="grid-cols-2 col-span-2 hidden md:grid">
              <div className="p-10  border border-white/8 border-y-0 bg-[#0B0C0C] relative">
                <div className="absolute w-full bg-white/4 h-full top-0 left-0" />
                <Image
                  src={image}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full rounded-[8px]"
                  alt={title}
                />
              </div>
              <div className="flex flex-col items-start gap-y-6 p-10 lg:p-20 lg:gap-y-10 bg-[#0B0C0C]">
                <div className="flex flex-col items-start gap-y-4">
                  <h6 className="handwrite text-sm not-italic">{category}</h6>
                  <h4 className="text-h5 lg:text-h4">{title}</h4>
                </div>
                <p className="body-text-small-medium">{date}</p>
              </div>
            </div>
          ),
        )}
        {BLOG_POSTS.slice(0, 1).map(
          ({ category, title, date, image }: BlogPost) => (
            <div
              className="grid grid-cols-1 p-4 md:p-6 lg:p-10 gap-y-6 md:hidden lg:grid-cols-2 gap-x-6 bg-[#0B0C0C]"
              key={title}
            >
              <Image
                src={image}
                width={400}
                height={200}
                className="object-cover w-full h-full rounded-[8px]"
                alt={title}
              />
              <div className="flex flex-col items-start gap-y-6">
                <div className="flex flex-col items-start gap-y-4">
                  <h6 className="handwrite text-sm not-italic">{category}</h6>
                  <h4 className="text-h6">{title}</h4>
                </div>
                <p className="body-text-small-medium">{date}</p>
              </div>
            </div>
          ),
        )}
        {BLOG_POSTS.slice(1).map(
          ({ category, title, date, image }: BlogPost) => (
            <div
              className="grid grid-cols-1 p-4 md:p-6 lg:p-10 gap-y-6 lg:grid-cols-2 gap-x-6 bg-[#0B0C0C]"
              key={title}
            >
              <Image
                src={image}
                width={400}
                height={200}
                className="object-cover w-full h-full rounded-[8px]"
                alt={title}
              />
              <div className="flex flex-col items-start gap-y-6">
                <div className="flex flex-col items-start gap-y-4">
                  <h6 className="handwrite text-sm not-italic">{category}</h6>
                  <h4 className="text-h6">{title}</h4>
                </div>
                <p className="body-text-small-medium">{date}</p>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="flex items-center justify-between gap-2 flex-col md:flex-row p-6 md:px-10">
        <span className="body-text-small-medium">Page: 01/19</span>
        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap **:md:h-10">
          <CustomButton type="secondary">Previous</CustomButton>
          <CustomButton>Next</CustomButton>
        </div>
      </div>
    </section>
  );
}
