'use client';

import type { Metadata } from 'next';
import Logo from '@/public/icons/Logo.svg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Forgot Password',
};
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
import MailIcon from '@/public/icons/mail.svg';

const formSchema = z.object({
  email: z.string().min(2).max(50),
});

export default function ForgotPasswordPage() {
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
    <section className="flex flex-col items-center justify-center h-full lg:px-16 gap-y-6 py-6 px-4">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-h5">
          Forgot your <span className="handwrite">password?</span>
        </h1>
        <p className="max-w-[448px] text-center">
          Enter your email address you've registered with so we can send you
          password reset link.
        </p>
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
                    <div className="inline-block w-full">
                      Your registered email{' '}
                      <span className="text-red-700 text-lg">*</span>{' '}
                      <span className="text-neutral-600">(Optional)</span>
                    </div>{' '}
                    <Info className="text-[#CACFD8]" />
                  </div>
                  <p className="text-neutral-500">Help</p>
                </FormLabel>
                <FormControl>
                  <div className="w-full relative">
                    <MailIcon className="absolute scale-70 text-neutral-500 left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      placeholder="e.g: johndoe@gmail.com"
                      className="h-10 md:h-12 rounded-md pl-11"
                      {...field}
                    />
                  </div>
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
            Send Reset Instructions
          </CustomButton>
        </form>
      </Form>
      <div className="flex items-center justify-center flex-wrap">
        <p className="text-white">Or go back to</p>
        <Link href="/auth/login" className="flex items-center gap-x-1">
          <ChevronUp className="-rotate-90 text-primary-500" />
          <span className="text-primary-500 body-text-small-medium">Login</span>
          <ChevronUp className="rotate-90 text-primary-500" />
        </Link>
      </div>
    </section>
  );
}
