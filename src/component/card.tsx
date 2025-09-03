import React from "react"

export default function Card({children}: {children: React.ReactNode}){
    return (
        <div className="border-solid border-[3px] bg-red-500 rounedd-[30px]">
            {children}
        </div>
    )


}