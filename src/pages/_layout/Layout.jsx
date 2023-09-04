import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const Layout = () => {

    const queryConfig = {
        suspense: true,
        staleTime: 5 * 60 * 1000
      };

    const queryClient = new QueryClient({suspense: true})
    return (
        <>

            <Navbar />

            <main>
                <QueryClientProvider client={queryClient} config={queryConfig}>
                    <Outlet />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </main>

            {/* <h1>footer</h1> */}
        </>
    )
}

export default Layout