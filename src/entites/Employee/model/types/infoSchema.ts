//Department Types
export interface Department {
    value: string;
    label: string;
}

export interface Departments {
    items: Department[];
}

export interface DepartmentsDB {
    message: string;
    data: Departments;
}

//Role Types
export interface Role {
    name: string;
    label: string;
}

export interface Roles {
    items: Role[];
}

export interface RolesDB {
    message: string;
    data: Roles;
}

//Position Types
export interface Position {
    value: string;
    type: string;
    label: string;
}

export interface Positions {
    items: Position[];
}

export interface PositionsDB {
    message: string;
    data: Positions;
}
