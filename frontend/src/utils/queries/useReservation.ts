import {useQuery} from "react-query";
import axios from "axios";
import ApiResponse from "../types/ApiResponse.ts";
import Reserva from "tableboss-shared/dist/Reserva";

const fetchReservations = async (date: string | null) => {
    const {data} = await axios.get<ApiResponse<Reserva>>(`/api/reservations${date ? `?date=${date}` : ''}`);
    if (!data.ok) {
        throw new Error(data.error);
    }
    return data.data;
};

export const useReservation = (date: string | null = null) => {
    const reservationProps = useQuery(['reservations', date], () => fetchReservations(date), {
        staleTime: 1000 * 60 * 1, // 1 minute
    });


    return {...reservationProps};
};
export default useReservation;
