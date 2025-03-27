import { FC } from 'react';
import { Input, InputTheme } from '@/shared/Input';

interface FilterItemProps {
    category: string;
    categoryLabel: string;
    selectedCategories: string[];
    handleCheckboxChange: (category: string) => void;
    className?: string;
}

export const FilterItem: FC<FilterItemProps> = ({
    category,
    categoryLabel,
    handleCheckboxChange,
    selectedCategories,
    className,
}) => {
    return (
        <Input
            type="checkbox"
            value={category}
            labelInput={categoryLabel}
            inputTheme={InputTheme.CHECKBOX_INPUT}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
            className={className}
        />
    );
};
