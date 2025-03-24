import { FC, useState } from 'react';
import { FilterItem } from '../FilterItem/FilterItem';
import cls from './Filters.module.css';

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
    );
};
