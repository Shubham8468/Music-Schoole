
'use client';
// if i want on use React hook in case i want to add "use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem } from "./ul/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 dark", className)}>
      <Menu setActive={setActive}>
        <div onClick={() => handleNavigation("/")} className="cursor-pointer">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </div>
        <div onClick={() => handleNavigation("/course")} className="cursor-pointer">
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            {/* <div className="flex gap-12">
              <HoveredLink href="/course" > All Course</HoveredLink>
              <HoveredLink href="/course" > Basic Music Theory</HoveredLink>
              <HoveredLink href="/course" >Advanced Compositio</HoveredLink>
              <HoveredLink href="/course" >Songwriting</HoveredLink>
              <HoveredLink href="/course" >Music Production</HoveredLink>
            </div> */}
          </MenuItem>



        </div>
        <div onClick={() => handleNavigation("/contact")} className="cursor-pointer">
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </div>
      </Menu>
    </div>
  )
}
export default Navbar;