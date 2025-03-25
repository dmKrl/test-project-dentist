import { FC } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';
import cls from './CustomTooltip.module.css';

interface CustomTooltipProps {
    id: string;
    place: PlacesType;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({ id, place }) => {
    return <Tooltip id={id} place={place} className={cls.employeeTooltip} />;
};
