export type TypeEmployee = {
    id: string | number | undefined;
    fullName: string;
    phone: string;
    mail: string;
    password: string;
    jobPosition: string;
    role: string;
    status: string;
    pap: string | boolean;
    dateJoin: string;
    dateQuit: string | null;
};

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

export interface EmployeeSchema {
    dataEmployee: TypeEmployee[];
}

export type TypeEmployeeDB = {
    id: string | number | undefined;
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    phone: string;
    department: Department;
    status: Status;
    roles: [];
    administrative_position: AdministrativePosition;
    medical_position: MedicalPosition;
    hired_at: number;
    fired_at: number;
};
