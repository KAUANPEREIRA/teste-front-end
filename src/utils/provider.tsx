import { ReactNode } from "react"
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"
import axios from "axios"

type Props={
    children:ReactNode

}
export const Providers = ({children}:Props) =>{
    const queryClient = new QueryClient()
   
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
