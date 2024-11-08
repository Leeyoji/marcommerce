import { ReactNode } from "react";
import DashboardNavigation from "../components/nav";
import RightMenu from "../components/right";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';


export default async function DashboardLayout ({children}: {children: ReactNode}) {
    const {getUser} = getKindeServerSession ();
    const user = await getUser ();

    if (!user){
        return redirect("/");
    }

    return (
    <div className="bg-slate-800 min-h-screen flex">
        <DashboardNavigation />
        
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg">
         <RightMenu />
         <div className="p-6">
         <main className="black">{children}</main> 
         </div>
        </div>
        
        </div>
    );
}