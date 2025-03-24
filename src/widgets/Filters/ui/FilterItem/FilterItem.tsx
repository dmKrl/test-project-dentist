import { FC } from 'react';
import { Input, InputTheme } from '@/shared/Input';

interface FilterItemProps {
    category: string;
    selectedCategories: string[];
    handleCheckboxChange: (category: string) => void;
}

export const FilterItem: FC<FilterItemProps> = ({
    category,
    handleCheckboxChange,
    selectedCategories,
}) => {
    return (
        <Input
            type="checkbox"
            value={category}
            labelInput={category}
            inputTheme={InputTheme.CHECKBOX_INPUT}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
        />
    );
};
