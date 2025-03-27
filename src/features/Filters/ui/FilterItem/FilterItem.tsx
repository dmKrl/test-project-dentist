import { FC } from 'react';
import { Input, InputTheme } from '@/shared/Input';

interface FilterItemProps {
    category: string;
    categoryLabel: string;
    selectedData: string[];
    handleCheckboxChange: (category: string) => void;
    className?: string;
}

export const FilterItem: FC<FilterItemProps> = ({
    category,
    categoryLabel,
    handleCheckboxChange,
    selectedData,
    className,
}) => {
    return (
        <Input
            type="checkbox"
            value={category}
            labelInput={categoryLabel}
            inputTheme={InputTheme.CHECKBOX_INPUT}
            checked={selectedData.includes(category)}
            onChange={() => handleCheckboxChange(category)}
            className={className}
        />
    );
};
