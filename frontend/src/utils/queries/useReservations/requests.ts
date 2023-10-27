import ApiResponse from '../../types/ApiResponse.ts';
import Reserva from '@tableboss/types/Reserva';
import api from '../../api.ts';

export const fetchReservations = async (date: string | null) => {
    console.log('fetchReservations')
    const { data } = await api.get<ApiResponse<Reserva[]>>(`/reserva${date ? `?date=${date}` : ''}`);
    if (!data.ok) {
        throw new Error(data.error);
    }
    return data.data || [];
};


export const deleteReservationCall = async (id: number) => {
    const response = await api.delete(`/reserva/${id}`);
    return response.data;
};


export interface UpdateReservationCallProps {
    id: number;
    updatedData: Partial<Reserva>;
}

export const updateReservationCall = async ({ id, updatedData }: UpdateReservationCallProps) => {
    const response = await api.put(`/reserva/${id}`, updatedData);
    return response.data;
};
