export type TypeCreateEmployee = {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    phone: string;
    department: string;
    administrative_position: string;
    medical_position: string;
    is_simple_digital_sign_enabled: false;
    hired_at: number | Date | null;
};
