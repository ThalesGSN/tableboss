import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import ApiResponse from "../types/ApiResponse.ts";
import Reserva from "@tableboss/types/Reserva";

const fetchReservations = async (date: string | null) => {
    const {data} = await axios.get<ApiResponse<Reserva>>(`/api/reservations${date ? `?date=${date}` : ''}`);
    if (!data.ok) {
        throw new Error(data.error);
    }
    return data.data;
};

export const useReservation = (date: string | null = null) => {
    const queryClient = useQueryClient();
    const reservationProps = useQuery(['reservations', date], () => fetchReservations(date), {
        staleTime: 1000 * 60 * 1, // 1 minute
    });


    const updateReservationCall = async ({id, updatedData}: any) => {
        const response = await axios.put(`/api/reservations/${id}`, updatedData);
        return response.data;
    };

    const updateReservation = async (data: Partial<Reserva>) => {
        try {
            if (!data.idReserva) {
                throw new Error('Missing idReserva');
            }

            const {mesa, cliente, ...rest} = data;
            await updateMutation.mutateAsync({id: data.idReserva, updatedData: rest});
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


    return {...reservationProps, updateReservation};
};
export default useReservation;
