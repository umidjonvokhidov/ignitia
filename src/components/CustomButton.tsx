import { ReactNode, MouseEventHandler } from 'react';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type ButtonType = 'primary' | 'secondary' | 'submit';

interface CustomButtonProps {
  type?: ButtonType;
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const CustomButton = ({
  type = 'primary',
  children,
  href,
  onClick,
  className,
}: CustomButtonProps) => {
  const primaryButtonClassName =
    'bg-primary-500 hover:bg-primary-700 active:bg-primary-800 focus:bg-primary-500 focus:shadow-[inset_0_0_0_1px_rgba(62,111,243,1),_0_0_0_3px_rgba(62,111,243,0.1)] disabled:bg-primary-300 text-white cursor-pointer rounded-sm';
  const secondaryButtonClassName =
    'bg-neutral-950 border border-neutral-800 text-white hover:bg-neutral-700 active:bg-neutral-800 focus:shadow-[inset_0_0_0_1px_rgba(14,18,27,1),_0_0_0_3px_rgba(153,160,174,0.1)] disabled:bg-neutral-300 cursor-pointer rounded-sm focus:neutral-950';
  const buttonClassName =
    'sm:body-text-small-semi-bold md:body-text-medium-semi-bold px-5 py-2 min-h-9 w-full flex-1 lg:flex-none lg:w-auto flex items-center gap-x-1 flex items-center justify-center';

  return href ? (
    <Link
      className={twMerge(
        buttonClassName,
        type == 'primary' ? primaryButtonClassName : secondaryButtonClassName,
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <Button
      onClick={onClick}
      type={type == 'submit' ? 'submit' : 'button'}
      className={twMerge(
        buttonClassName,
        type == 'primary' || type == 'submit'
          ? primaryButtonClassName
          : secondaryButtonClassName,
        className,
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
