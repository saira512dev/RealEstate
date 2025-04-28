import { NAVBAR_HEIGHT } from "@/lib/constants";
import { N } from "framer-motion/dist/types.d-6pKw1mTI";
import React from 'react'

const Layout = ({children} : { children: React.ReactNode}) => {
  return (
    <div>
        {/* <Navbar /> */}
        navbar
        <main className={ `h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}>
            {children}
        </main>
    </div>
  )
}

export default Layout