import { BLOG_POSTS } from '@/lib/constants';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FacebookIcon from '@/public/icons/facebook-2.svg';
import XIcon from '@/public/icons/X.svg';
import LinkIcon from '@/public/icons/Link.svg';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import Image from 'next/image';
import { cache } from 'react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return BLOG_POSTS.map(({ id }: BlogPost) => ({
    id,
  }));
}

const getBlogPost = cache(async (slug: string) => {
  return BLOG_POSTS.find((post) => post.id === slug);
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  return {
    metadataBase: new URL(process.env.BASE_URL as string),
    title: blog ? blog.title : 'Blog Post',
    description: blog ? blog.content : 'Read our latest blog post',
    openGraph: {
      images: [
        {
          url: blog?.image || '',
        },
      ],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);
  const initials = blog?.author.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <section className="flex items-start relative scroll-smooth">
      <aside className="hidden md:flex flex-col sticky top-[92px] min-w-[300px] lg:min-w-[360px]">
        <div className="p-10 flex flex-col gap-y-4">
          <h4 className="text-xs text-neutral-500 leading-4">
            TABLE OF CONTENT
          </h4>
          <div className="flex flex-col items-start">
            {blog?.tableOfContents?.map(({ id, title }: BlogToC) => (
              <Link
                className="body-text-medium-regular px-4 ease-in text-neutral-500 border-l-[3px] border-transparent hover:border-[#377AFB] hover:body-text-medium-semi-bold hover:text-white transition-all"
                key={id}
                href={`#${id}`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-10 flex flex-col gap-y-10 border-y border-white/8">
          <div className="flex flex-col items-start gap-y-4">
            <h4 className="text-xs text-neutral-500 leading-4">AUTHOR</h4>
            <div className="flex items-center gap-x-3">
              <Avatar className="size-11">
                <AvatarImage src={blog?.author.avatar} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h6 className="body-text-medium-semi-bold">
                  {blog?.author.name}
                </h6>
                <p className="body-text-small-regular">{blog?.author.handle}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-4">
            <h4 className="text-xs text-neutral-500 leading-4">PUBLISHED ON</h4>
            <h6 className="body-text-medium-semi-bold">{blog?.date}</h6>
          </div>
        </div>
        <div className="p-10 flex flex-col gap-y-4 border-b border-white/8">
          <h4 className="text-xs text-neutral-500 leading-4">SHARE</h4>
          <div className="flex items-center gap-x-3">
            {blog?.author.socialMedia.map(({ link, title }: SocialM) => (
              <Link
                key={title}
                href={link}
                target="_blank"
                className="rounded-[12px] bg-white/4 hover:bg-white border border-white/8 group p-2.5"
              >
                {(() => {
                  switch (title) {
                    case 'Facebook':
                      return (
                        <FacebookIcon className="group-hover:text-neutral-500" />
                      );

                    case 'Link':
                      return (
                        <LinkIcon className="group-hover:text-neutral-500" />
                      );

                    case 'LinkedIn':
                      return (
                        <LinkedInIcon className="group-hover:text-neutral-500" />
                      );

                    case 'X':
                      return <XIcon className="group-hover:text-neutral-500" />;

                    case 'instagram':
                      return (
                        <InstagramIcon className="group-hover:text-neutral-500" />
                      );
                  }
                })()}
              </Link>
            ))}
          </div>
        </div>
      </aside>
      <main className="border-l border-white/8 scroll-smooth">
        <div className="flex flex-col gap-y-4 p-6 md:p-8 lg:p-10">
          <h5 className="text-sm handwrite not-italic">{blog?.category}</h5>
          <h1 className="text-h6 md:text-h5 lg:text-h4">{blog?.title}</h1>
        </div>
        <div className="border-y border-white/8 bg-[#0B0C0C] relative p-6 md:p-8 lg:p-10">
          <div className="absolute w-full bg-white/4 h-full top-0 left-0" />
          {blog?.image && (
            <Image
              src={blog.image}
              width={0}
              height={0}
              alt={blog?.title ?? 'Blog image'}
              sizes="100vw"
              className="w-full h-[215px] md:h-[400px] object-cover rounded-lg"
            />
          )}
        </div>
        <div className="p-6 md:p-8 lg:p-10 ">
          {blog?.rawHtml && (
            <div
              className="prose prose-headings:text-white w-full max-w-full prose-a:text-white prose-strong:text-white prose-p:text-neutral-500 prose-li:text-neutral-500 prose-h2:scroll-mt-[100px] prose-h2:text-h6 lg:prose-h2:text-h5 md:prose-strong:body-text-medium-medium prose-strong:body-text-small-medium prose-p:body-text-small-regular md:prose-p:body-text-medium-regular"
              dangerouslySetInnerHTML={{ __html: blog.rawHtml }}
            />
          )}
        </div>
      </main>
    </section>
  );
}
