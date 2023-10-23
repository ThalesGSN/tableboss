interface ApiResponse<T> {
    data?: T;
    error?: string;
    ok: boolean;
}

export default ApiResponse;
