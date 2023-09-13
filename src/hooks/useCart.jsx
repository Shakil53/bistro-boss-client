import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';





const useCart = () => {
    const { user } = useContext(AuthContex)



    const { refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        },
    })
    return [cart, refetch]


}


export default useCart;