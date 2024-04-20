import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "../service/auth";
import { Button } from "@/components/ui/button";
import { UserInfo } from "./_components/user-info";


export default async function Page() {
   const session = await auth();

    return (
        <main className="flex items-center justify-center h-screen">
            <UserInfo user={session?.user}>

            </UserInfo>
        </main>
    )
}