import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { twMerge } from 'tailwind-merge';

const TestimonialCard = ({
  Testimonial,
  className,
}: {
  Testimonial: Testimonial;
  className?: string;
}) => {
  const { avatar, company, name, quote, title } = Testimonial;

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  return (
    <div
      key={name}
      className={twMerge("flex flex-col gap-y-6 p-6 rounded-xl border border-white/8 bg-white/4 shadow-[0px_2px_4px_-1px_rgba(14,18,27,0.08)]", className)}
    >
      <div className="flex items-center gap-x-3">
        <Avatar className="size-11">
          <AvatarImage src={avatar} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-y-0.5 items-start">
          <h3 className="body-text-small-semi-bold">{name}</h3>
          <p>
            {title}, {company}
          </p>
        </div>
      </div>
      <blockquote className="body-text-large-medium">
        &quot;{quote}&quot;
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
