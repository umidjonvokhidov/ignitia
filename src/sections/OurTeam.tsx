import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TEAM_MEMBERS } from '@/lib/constants';
import Link from 'next/link';

export default function OurTeam() {
  return (
    <section>
      <div className="flex flex-col items-center px-4 py-6 md:py-8 lg:py-10 max-w-[350px] md:max-w-[450px] lg:max-w-[500px] mx-auto">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full text-center">
          Meet the <span className="handwrite">minds</span> behind Ignitia.
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-[1px] bg-white/4">
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
                className="flex flex-col gap-y-6 w-full items-center bg-white/4"
                key={title}
              >
                <Avatar className="size-14">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-y-1">
                  <h4>{name}</h4>
                  <h5>{title}</h5>
                </div>
                <div className="flex items-center gap-x-3">
                  {instagram && <Link href={instagram} className='rounded-[12px] bg-white/4 p-2.5'></Link>}
                  {facebook && <Link href={facebook} className='rounded-[12px] bg-white/4 p-2.5'></Link>}
                  {x && <Link href={x} className='rounded-[12px] bg-white/4 p-2.5'></Link>}
                  {linkedin && <Link href={linkedin} className='rounded-[12px] bg-white/4 p-2.5'></Link>}
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
