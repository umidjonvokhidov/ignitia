'use client';

import Logo from '@/public/icons/Logo.svg';
import Link from 'next/link';
import ChevronUp from '@/public/icons/chevron-up.svg';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Info from '@/public/icons/info.svg';
import CustomButton from '@/components/CustomButton';
import GoogleIcon from '@/public/icons/google-login.svg';
import { FRAMEWORKS, RegisterPageFeatures } from '@/lib/constants';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().min(2).max(50),
});

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <div className="flex-col justify-center bg-white/4 w-full hidden lg:flex border-r border-white/8 h-full">
        <div className="h-full flex flex-col gap-y-10 p-10">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              {FRAMEWORKS.slice(0, 3).map(({ icon: Icon, name }: Framework) => (
                <div
                  className="border-white/8 border bg-white/4 cursor-pointer group rounded-[12px] p-5 hover:border-primary-500 transition-all hover:shadow-[inset_0px_0px_16px_3px_rgba(62,111,243,0.50)]"
                  key={name}
                >
                  <Icon className="scale-150 text-neutral-500 group-hover:text-white transition-all" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {FRAMEWORKS.slice(3, 6).map(({ icon: Icon, name }: Framework) => (
                <div
                  className="border-white/8 border bg-white/4 cursor-pointer group rounded-[12px] p-5 hover:border-primary-500 transition-all hover:shadow-[inset_0px_0px_16px_3px_rgba(62,111,243,0.50)]"
                  key={name}
                >
                  <Icon className="scale-150 text-neutral-500 group-hover:text-white transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <Image
              src="/images/CodeSnippet.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
              alt="code"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 border-t border-white/8">
          {RegisterPageFeatures.map(
            ({ icon: Icon, description, title }: RegisterPageFeature) => (
              <div
                key={title}
                className="flex flex-col items-start p-10 gap-y-3 first:border-r border-white/8"
              >
                <Icon />
                <h4 className="body-text-large-semi-bold">{title}</h4>
                <p className="body-text-medium-regular">{description}</p>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full lg:px-16 gap-y-6 py-6 px-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-h5">
            Create an <span className="handwrite">account.</span>
          </h1>
          <div className="flex items-center justify-center flex-wrap">
            <p className='text-white'>Already have an account?</p>
            <Link href="/auth/login" className="flex items-center gap-x-1">
              <ChevronUp className="-rotate-90 text-primary-500" />
              <span className="text-primary-500 body-text-small-medium">
                Login Now
              </span>
              <ChevronUp className="rotate-90 text-primary-500" />
            </Link>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-y-6 max-w-[448px] justify-center z-5 md:z-0 group-hover:z-5 transition-all duration-500"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-y-1 justify-center">
                  <FormLabel className="body-text-small-medium flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="inline-block">
                        Work email{' '}
                        <span className="text-red-700 text-lg">*</span>{' '}
                        <span className="text-neutral-600">(Optional)</span>
                      </div>{' '}
                      <Info className="text-[#CACFD8]" />
                    </div>
                    <p className="text-neutral-500">Help</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g: johndoe@gmail.com"
                      className="h-10 md:h-12 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="flex items-center gap-x-1">
                    <Info className="text-[#CACFD8]" />
                    <span className="w-full">
                      We will send a text with a verification code.
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton
              type="submit"
              className="w-full h-10 rounded-[12px] md:h-12"
            >
              Create my account
            </CustomButton>
          </form>
        </Form>
        <div className="flex items-center w-full gap-x-3 max-w-[448px]">
          <div className="w-full h-[1px] bg-white/8" />
          <span className="body-text-medium-regular text-neutral-500">or</span>
          <div className="w-full h-[1px] bg-white/8" />
        </div>
        <CustomButton
          className="gap-x-2 h-10 md:h-12 !w-full max-w-[448px] max-h-10 md:max-h-12 rounded-[12px]"
          type="secondary"
          href="#"
        >
          <GoogleIcon />
          <span>Sign Up with Google</span>
        </CustomButton>
        <p className="max-w-[624px] body-text-small-regular text-center">
          By creating an account, I agree to the{' '}
          <Link
            href="/terms-services"
            className="text-white underline underline-offset-4"
          >
            Terms of service
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy-policy"
            className="text-white underline underline-offset-4"
          >
            Privacy policy.
          </Link>{' '}
          I also agree to receive emails and communication relating to Ignitia
          services and offers.
        </p>
      </div>
    </section>
  );
}
