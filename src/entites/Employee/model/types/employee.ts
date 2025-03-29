interface Department {
    value: string;
    label: string;
}

interface Status {
    value: string;
    label: string;
}

interface AdministrativePosition {
    value: string;
    type: string;
    label: string;
}

interface MedicalPosition {
    value: string;
    type: string;
    label: string;
}

export interface DataPagination {
    page: number;
    per_page: number;
    total: number;
    last_page: number;
}

export type TypeEmployeeDB = {
    id: string | number | undefined;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    phone: string;
    department: Department | null;
    status: Status | null;
    roles: [];
    administrative_position: AdministrativePosition | null;
    medical_position: MedicalPosition | null;
    hired_at: number;
    fired_at: number;
};

export interface EmployeeSchema {
    dataEmployee: TypeEmployeeDB[];
}
