import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TEAM_MEMBERS } from '@/lib/constants';
import Link from 'next/link';
import FacebookIcon from '@/public/icons/facebook-2.svg';
import XIcon from '@/public/icons/X.svg';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import PlusCircleIcon from '@/public/icons/plus-circle.svg';

export default function OurTeam() {
  return (
    <section>
      <div className="flex flex-col items-center px-4 py-6 md:py-8 lg:py-10 max-w-[350px] md:max-w-[450px] lg:max-w-[500px] mx-auto">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full text-center">
          Meet the <span className="handwrite">minds</span> behind Ignitia.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 border-t border-white/8 bg-white/4">
        {TEAM_MEMBERS.map(
          ({
            avatar,
            name,
            socialMedia: { facebook, instagram, linkedin, x },
            title,
          }: TeamMember) => {
            const initials = name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();
            return (
              <div
                className="flex flex-col gap-y-6 w-full p-6 items-center bg-white/4"
                key={title}
              >
                <Avatar className="size-14">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-y-1">
                  <h4 className="body-text-large-semi-bold text-center">
                    {name}
                  </h4>
                  <h5 className="body-text-medium-regular text-neutral-500 text-center">
                    {title}
                  </h5>
                </div>
                <div className="flex items-center gap-x-3">
                  {instagram && (
                    <Link
                      href={instagram}
                      target="_blank"
                      className="rounded-[12px] bg-white/4 hover:bg-white group p-2.5"
                    >
                      <InstagramIcon className="group-hover:text-neutral-500" />
                    </Link>
                  )}
                  {facebook && (
                    <Link
                      href={facebook}
                      target="_blank"
                      className="rounded-[12px] bg-white/4 p-2.5 hover:bg-white group"
                    >
                      <FacebookIcon className="group-hover:text-neutral-500" />
                    </Link>
                  )}
                  {x && (
                    <Link
                      href={x}
                      target="_blank"
                      className="rounded-[12px] bg-white/4 p-2.5 hover:bg-white group"
                    >
                      <XIcon className="group-hover:text-neutral-500" />
                    </Link>
                  )}
                  {linkedin && (
                    <Link
                      href={linkedin}
                      target="_blank"
                      className="rounded-[12px] bg-white/4 p-2.5 hover:bg-white group"
                    >
                      <LinkedInIcon className="group-hover:text-neutral-500" />
                    </Link>
                  )}
                </div>
              </div>
            );
          },
        )}
        <Link href="#" className="flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1 p-6 gap-x-6 cursor-pointer bg-white/4">
          <PlusCircleIcon />
          <h5 className="body-text-large-semi-bold">Join to our team</h5>
        </Link>
      </div>
    </section>
  );
}
