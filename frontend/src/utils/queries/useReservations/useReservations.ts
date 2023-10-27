import { useMutation, useQuery, useQueryClient } from 'react-query';
import Reserva from '@tableboss/types/Reserva';
import { deleteReservationCall, fetchReservations, updateReservationCall } from './requests.ts';


export const useReservations = (date: string | null = null) => {
    const queryClient = useQueryClient();
    const reservationProps = useQuery<Reserva[]>(['reservations', date], () => fetchReservations(date), {
        staleTime: 1000 * 60 * 2, // 2 minutes
    });


    const updateReservation = async (data: Partial<Reserva>) => {
        try {
            if (!data.idReserva) {
                throw new Error('Missing idReserva');
            }

            const { mesa, cliente, ...rest } = data;
            await updateMutation.mutateAsync({ id: data.idReserva, updatedData: rest });
            console.log('Reservation updated!');
        } catch (error) {
            console.error('Error updating reservation', error);
        }
    };


    const updateMutation = useMutation(updateReservationCall, {
        onSuccess: () => {
            return queryClient.invalidateQueries('reservations');
        },
    });

    const deleteMutation = useMutation(deleteReservationCall, {
        onSuccess: () => {
            // Invalidate and refetch reservations after a reservation is deleted
            return queryClient.invalidateQueries('reservations');
        },
        // You might want to handle errors as well
        onError: (error) => {
            console.error('Error deleting the reservation', error);
        },
    });

    const deleteReservation = async (reservationId: number) => {
        try {
            await deleteMutation.mutateAsync(reservationId);
            console.log('Reservation deleted!');
        } catch (error) {
            console.error('Error deleting reservation', error);
        }
    };


    return {
        ...reservationProps,
        reservations: reservationProps.data || [],
        emptyReservations: !reservationProps.data || reservationProps.data.length === 0,
        deleteReservation,
        deleteMutation,
        updateReservation,
        updateMutation
    };
};
export default useReservations;
