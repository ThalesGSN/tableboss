enum StatusVIPEnum {
    BRONZE = "Bronze",
    PRATA = "Prata",
    OURO = "Ouro",
    PLATINA = "Platina"
}

export interface StatusVIP {
    idStatusVip: number;
    status: StatusVIPEnum;
}

export default StatusVIP;
