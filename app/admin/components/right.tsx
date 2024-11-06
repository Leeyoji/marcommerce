import { ModeToggle } from "./switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function RightMenu () {
    return (
        <div className="shadow-sm">
       <div className="flex flex-row-reverse gap-4 pr-6 pt-6 pb-6">  
         <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<ModeToggle />

       </div>
       </div> 
    );
} 