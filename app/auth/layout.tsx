import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <div className="">
           
                {children}
           
        </div>
    )
}