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
import { Checkbox } from '@/components/ui/checkbox';
import MailIcon from '@/public/icons/mail.svg';

const formSchema = z.object({
  email: z.string().min(2).max(50),
  remember: z.boolean(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      remember: false,
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
          Welcome <span className="handwrite">back.</span>
        </h1>
        <div className="flex items-center justify-center flex-wrap">
          <p className="text-white">You're new here?</p>
          <Link href="/auth/sign-up" className="flex items-center gap-x-1">
            <ChevronUp className="-rotate-90 text-primary-500" />
            <span className="text-primary-500 body-text-small-medium">
              Create an account
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
                  <div className="flex items-center w-full">
                    <div className="inline-block">
                      Work email <span className="text-red-700 text-lg">*</span>{' '}
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
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-x-3 justify-center md:justify-start">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">Remember me</FormLabel>
                </div>
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
      <div className="grid grid-cols-1 gap-4 w-full max-w-[448px] md:grid-cols-2">
        <CustomButton
          className="gap-x-2 col-span-1 md:col-span-2 h-10 md:h-12 !w-full max-w-[448px] max-h-10 md:max-h-12 rounded-[12px]"
          type="secondary"
          href="#"
        >
          <GoogleIcon />
          <span>Login with Google</span>
        </CustomButton>
        <CustomButton
          className="gap-x-2 h-10 md:h-12 !w-full max-w-[448px] max-h-10 md:max-h-12 rounded-[12px]"
          type="secondary"
          href="#"
        >
          Request a Demo
        </CustomButton>
        <CustomButton
          className="gap-x-2 h-10 md:h-12 !w-full max-w-[448px] max-h-10 md:max-h-12 rounded-[12px]"
          type="secondary"
          href="#"
        >
          Take a Product Tour
        </CustomButton>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <p className="text-white">Forgot your password?</p>
        <Link
          href="/auth/forgot-password"
          className="flex items-center gap-x-1"
        >
          <ChevronUp className="-rotate-90 text-primary-500" />
          <span className="text-primary-500 body-text-small-medium">
            Reset it here
          </span>
          <ChevronUp className="rotate-90 text-primary-500" />
        </Link>
      </div>
      <p className="max-w-[624px] body-text-small-regular text-center">
        By logging in, I agree to the{' '}
        <Link
          href="/terms-conditions"
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
    </section>
  );
}
