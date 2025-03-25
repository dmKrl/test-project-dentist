export type TypeEmployee = {
    id: string;
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
}

export interface EmployeeSchema {
    dataEmployee: TypeEmployee[],
}