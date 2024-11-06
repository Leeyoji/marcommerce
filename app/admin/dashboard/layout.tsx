import { ReactNode } from "react";
import DashboardNavigation from "../components/nav";
import RightMenu from "../components/right";



export default function DashboardLayout ({children}: {children: ReactNode}) {
    return (
    <div className="bg-slate-800 min-h-screen flex">
        <DashboardNavigation />
        
        <div className="bg-white flex-grow mt-2 mr-2 rounded-sm">
         <RightMenu />
         <div className="p-6">
         <main className="black">{children}</main> 
         </div>
        </div>
        
        </div>
    );
}