import { FC, useState } from 'react';
import { FilterItem } from '../FilterItem/FilterItem';
import cls from './Filters.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';

interface FiltersProps {
    categories?: string[];
}

export const Filters: FC<FiltersProps> = ({ categories }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCheckboxChange = (category: string) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category)) {
                return prevSelected.filter((c) => c !== category);
            } else {
                return [...prevSelected, category];
            }
        });
    };
    return (
        <div className={cls.filters}>
            <div className={cls.filtersCheckboxes}>
                {categories?.map((category) => {
                    return (
                        <FilterItem
                            key={category}
                            category={category}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedCategories={selectedCategories}
                        />
                    );
                })}
            </div>
            <Button disabled buttonTheme={ButtonTheme.BUTTON_DISABLED_SEC}>
                Удалить
            </Button>
        </div>
    );
};
