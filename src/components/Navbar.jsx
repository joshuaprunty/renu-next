"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/form", label: "Get Started" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com/joshuaprunty/renu-next",
      label: "GitHub",
      icon: {
        src: "/github.svg",
        alt: "GitHub",
        width: 16,
        height: 16,
        className: "navbar-nav-svg"
      }
    }
  ];

  return (
    <div>
      <div className="border-b bg-background fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className={cn(
                "font-semibold text-3xl",
                pathname === "/" && "text-primary"
              )}>
                renu.
              </Link>
            </div>
            <NavigationMenu className="ml-auto">
              <NavigationMenuList className="gap-6">
                <Link
                  href="/login"
                  className={cn(
                    "flex items-center gap-2",
                    pathname === "/login" && "font-semibold"
                  )}
                >
                  <Button>Log In</Button>
                </Link>
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-2",
                        pathname === link.href && "font-semibold",
                        link.className
                      )}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.icon && (
                        <img
                          src={link.icon.src}
                          alt={link.icon.alt}
                          width={link.icon.width}
                          height={link.icon.height}
                          className={link.icon.className}
                        />
                      )}
                      {link.icon ? (
                        <span className={cn(
                          "text-sm",
                          pathname === link.href ? "font-semibold" : "font-medium"
                        )}>
                          {link.label}
                        </span>
                      ) : (
                        link.label
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

