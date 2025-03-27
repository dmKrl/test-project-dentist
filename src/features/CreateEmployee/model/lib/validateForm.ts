export const validateForm = (
    surname: string,
    name: string,
    patronymic: string,
    adminPosition: string,
    medPosition: string,
    department: string,
    phone: string,
    email: string,
    hiredDate: Date | null,
) => {
    if (
        !surname &&
        !name &&
        !patronymic &&
        !adminPosition &&
        !medPosition &&
        !department &&
        !phone &&
        !email &&
        !hiredDate
    ) {
        return false;
    }
    return true;
};
