import { ModeToggle } from "./switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function RightMenu () {
    return (
        <div className="shadow-sm">
       <div className="flex flex-row-reverse gap-4 pr-9 pt-4 pb-4">  
         <DropdownMenu>
           <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon' className="rounded-full">
                <Avatar className="h-[2rem] w-[2rem]">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutLink>Sign Out</LogoutLink>
                </DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu>
  
<ModeToggle/>


       </div>
       </div> 
    );
} 