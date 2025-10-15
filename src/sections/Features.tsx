'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FEATURES_ACCORDION } from '@/lib/constants';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Checkbox } from '@/components/ui/checkbox';
import CustomButton from '@/components/CustomButton';
import Facebook from '@/public/icons/Facebook.svg';
import X from '@/public/icons/X.svg';
import Google from '@/public/icons/Google.svg';
import Info from '@/public/icons/info.svg';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().min(2).max(50),
  remember: z.boolean(),
});

export default function Features() {
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
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-center px-4 py-6 gap-y-4 md:py-8 lg:py-10 border-b border-white/8">
        <h3 className="text-h6 md:text-h4 lg:text-h3 inline-block w-full max-w-[448px] text-center">
          Powerful features for <span className="handwrite">secure</span> access
        </h3>
        <p className="body-text-small-regular md:body-text-medium-regular text-center">
          Provides all the tools you need to protect your users and data.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Accordion type="multiple">
          {FEATURES_ACCORDION.map(({ description, title }: FeatureItem) => (
            <AccordionItem value={title} key={title} className="border-white/8">
              <AccordionTrigger className="h-20 md:h-24 !body-text-large-semi-bold flex items-center py-4 px-3 md:px-10 md:py-8">
                {title}
              </AccordionTrigger>
              <AccordionContent className="body-text-small-regular text-neutral-600 pb-4 px-3 md:px-10 md:pb-8">
                {description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="p-4 md:p-10 w-full flex flex-col justify-center bg-white/4 relative group">
          <Image
            src="/images/SocialsBg.svg"
            width={0}
            height={0}
            className="w-auto h-auto absolute z-3 opacity-50 left-1/2 -translate-x-1/2"
            alt="bg"
          />
          <div className="bg-[radial-gradient(68.33%_68.33%_at_50%_53.12%,_#00000038_50%,_#151616_100%)] w-full h-full absolute top-0 left-0 z-2" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col justify-center h-[360px] group-hover:z-5 transition-all duration-500"
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
                        className="h-12 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="flex items-center gap-x-1">
                      <Info className="text-[#CACFD8]" />
                      <span>This is a hint text to help user.</span>
                    </FormDescription>
                    <p className="text-center w-full my-3 md:text-left">
                      We will send a text with a verification code.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-x-3 justify-center md:justify-start">
                      <FormControl>
                        <Checkbox {...field} />
                      </FormControl>
                      <FormLabel>Remember me</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CustomButton type="submit" className="w-full max-h-12">
                Submit
              </CustomButton>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
