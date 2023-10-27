import axios from 'axios';
import ApiResponse from '../../types/ApiResponse.ts';
import Reserva from '@tableboss/types/Reserva';

export const fetchReservations = async (date: string | null) => {
    const { data } = await axios.get<ApiResponse<Reserva[]>>(`/api/reservations${date ? `?date=${date}` : ''}`);
    if (!data.ok) {
        throw new Error(data.error);
    }
    return data.data || [];
};


export const deleteReservationCall = async (id: number) => {
    const response = await axios.delete(`/api/reservations/${id}`);
    return response.data;
};

export const updateReservationCall = async ({ id, updatedData }: any) => {
    const response = await axios.put(`/api/reservations/${id}`, updatedData);
    return response.data;
};
