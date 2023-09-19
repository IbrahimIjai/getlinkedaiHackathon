




import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
// const queryClientConfig = {
//     defaultOptions: {
//       queries: {
//         cacheTime: 1000 * 60 * 60 * 24, // 24 hours
//       },
//     },
//   }
export const TanstackQueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
