import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const navLinks = [
    {
      href: "/login",
      label: "Log In",
      className: cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white"
      ),
      isButton: true
    },
    { href: "/", label: "Home" },
    { href: "/form", label: "Get Started" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com",
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
        <div className="max-w-[100rem] border border-red-500 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-2xl text-blue-700">
                renu.
              </Link>
            </div>
            <NavigationMenu className="ml-auto">
              <NavigationMenuList className="gap-6">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.isButton ? (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={link.className}>
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-2",
                          link.className
                        )}
                        aria-current={link.href === "/" ? "page" : undefined}
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
                          <span className="text-sm font-medium">{link.label}</span>
                        ) : (
                          link.label
                        )}
                      </Link>
                    )}
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

