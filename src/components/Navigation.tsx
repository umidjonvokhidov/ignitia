'use client';

import {
  NAVIGATION_LINKS,
  PRODUCTS_DROPDOWN,
  SOLUTIONS_DROPDOWN,
} from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useEffect, useRef, useState } from 'react';
import HamburgerMenu from '@/public/lotties/HamburgerMenu.json';
import Lottie from 'lottie-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/NavMenuAccordion';
import CustomButton from './CustomButton';

export default function Navigation() {
  const lottieRef = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const FPS = 60;
  const OPEN_SEGMENT: [number, number] = [1, 57];
  const CLOSE_SEGMENT: [number, number] = [57, 1];
  const OPEN_DURATION_SEC = 0.3;
  const CLOSE_DURATION_SEC = 0.3;

  const setSpeedForDuration = (segment: [number, number], seconds: number) => {
    if (!lottieRef.current || !seconds) return;
    const frames = Math.abs(segment[1] - segment[0]);
    const speed = frames / (FPS * seconds);
    lottieRef.current.setSpeed?.(speed);
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop?.(0, true);
    }
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (open) {
      setSpeedForDuration(OPEN_SEGMENT, OPEN_DURATION_SEC);
      lottieRef.current.playSegments?.(OPEN_SEGMENT, true);
    } else {
      setSpeedForDuration(CLOSE_SEGMENT, CLOSE_DURATION_SEC);
      lottieRef.current.playSegments?.(CLOSE_SEGMENT, true);
    }
  }, [open]);

  return (
    <nav className="flex items-center justify-between z-10 bg-[#0B0C0C] h-[92px] sticky top-0 p-6 border-y border-white/[0.08]">
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <Image
            src="icons/Logo-full.svg"
            alt="Logo"
            width={0}
            height={0}
            className="w-[90px] h-[32px] object-contain md:w-[115px] md:h-[36px] lg:mr-[28px]"
          />
        </Link>
        <div className="hidden lg:block w-[1px] h-[24px] bg-[#262626]" />
        <NavigationMenu viewport={true} className="hidden lg:block">
          <NavigationMenuList className="gap-x-0">
            {NAVIGATION_LINKS.map(({ href, label, hasDropdown }: NavLink) => (
              <NavigationMenuItem key={label}>
                {hasDropdown ? (
                  <NavigationMenuTrigger className="bg-transparent">
                    {label}
                  </NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={href}
                      key={label}
                      className="text-sm font-medium"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                )}
                {hasDropdown && (
                  <NavigationMenuContent className="border-white/[0.08]">
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {href === '/products' &&
                        PRODUCTS_DROPDOWN.items.map(
                          ({ title, description, href }: DropdownItem) => (
                            <ListItem key={title} title={title} href={href}>
                              {description}
                            </ListItem>
                          ),
                        )}
                      {href === '/solutions' &&
                        SOLUTIONS_DROPDOWN.items.map(
                          ({ title, description, href }: DropdownItem) => (
                            <ListItem key={title} title={title} href={href}>
                              {description}
                            </ListItem>
                          ),
                        )}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden lg:flex items-center gap-x-2">
        <CustomButton type="secondary">Login</CustomButton>
        <CustomButton>Request a Demo</CustomButton>
      </div>
      <Lottie
        lottieRef={lottieRef}
        animationData={HamburgerMenu}
        autoplay={false}
        loop={false}
        className="size-8 lg:hidden block cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      <Accordion
        type="single"
        collapsible
        className="absolute left-0 w-full top-[90px]"
        value={open ? 'item-1' : undefined}
      >
        <AccordionItem value="item-1">
          <AccordionContent className="flex flex-col bg-[#0B0C0C] w-full gap-y-6 py-8 top-[92px] transition-all duration-1000 overflow-hidden">
            <Accordion type="single" className="flex flex-col" collapsible>
              {NAVIGATION_LINKS.map(({ href, label, hasDropdown }: NavLink) =>
                hasDropdown ? (
                  <AccordionItem
                    value={label}
                    key={label}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-sm font-medium rounded-none h-12 flex items-center justify-center gap-1.5 hover:bg-gray-900 transition-colors">
                      {label}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col bg-gray-950">
                      {href === '/products' &&
                        PRODUCTS_DROPDOWN.items.map(
                          ({ title, href }: DropdownItem) => (
                            <Link
                              key={title}
                              href={href}
                              className="h-12 cursor-pointer flex items-center justify-center text-sm font-medium hover:bg-gray-900 transition-colors"
                            >
                              {title}
                            </Link>
                          ),
                        )}
                      {href === '/solutions' &&
                        SOLUTIONS_DROPDOWN.items.map(
                          ({ title, href }: DropdownItem) => (
                            <Link
                              key={title}
                              href={href}
                              className="h-12 cursor-pointer flex items-center justify-center text-sm font-medium hover:bg-gray-900 transition-colors"
                            >
                              {title}
                            </Link>
                          ),
                        )}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="h-12 cursor-pointer flex items-center justify-center text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    {label}
                  </Link>
                ),
              )}
            </Accordion>
            <div className="flex items-center flex-col gap-y-2 w-3/5 mx-auto">
              <CustomButton type="secondary">Login</CustomButton>
              <CustomButton>Request a Demo</CustomButton>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
