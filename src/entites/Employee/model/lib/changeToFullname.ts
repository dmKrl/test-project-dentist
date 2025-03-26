export function changeToFullname(
    surname: string | undefined,
    name: string | undefined,
    patronymic: string | undefined

): string {
    if (!surname || !name || !patronymic) {
        return 'Иванов Иван Иванович'
    }
    return `${surname} ${name} ${patronymic}`
} 