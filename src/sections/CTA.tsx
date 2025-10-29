import CustomButton from '@/components/CustomButton';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const avatars = [
  'images/AvatarCTA.png',
  'images/AvatarCTA1.png',
  'images/AvatarCTA2.png',
  'images/AvatarCTA3.png',
];

export default function CTA() {
  return (
    <section className="py-8 px-6 gap-y-6 flex items-center flex-col">
      <div className="*:data-[slot=avatar]:ring-[##0B0C0C] flex -space-x-2 *:data-[slot=avatar]:ring-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="size-12">
            <AvatarImage src={avatar} alt="avatar" />
          </Avatar>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full text-center">
          Have <span className="handwrite">custom</span> requirements?
        </h3>
        <p className="body-text-medium-regular text-center max-w-[400px]">
          Contact us to give your organization the exact control, and support
          you need.
        </p>
      </div>
      <CustomButton className="h-8 md:h-12 w-auto" href='/contact-us'>Contact Us</CustomButton>
    </section>
  );
}
