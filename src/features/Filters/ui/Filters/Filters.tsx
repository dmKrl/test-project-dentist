import { FilterItem } from '../FilterItem/FilterItem';
import cls from './Filters.module.css';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { filterStore } from '../../model/store/filterStore';
import { observer } from 'mobx-react-lite';

export const Filters = observer(() => {
    return (
        <div className={cls.filters}>
            <div className={cls.filtersCheckboxes}>
                <FilterItem
                    key={'filter-1'}
                    categoryLabel={'Выбрать всех'}
                    category={'All'}
                    handleCheckboxChange={filterStore.toggleCategory}
                    selectedCategories={filterStore.selectedCatogories}
                />
                <FilterItem
                    key={'filter-2'}
                    categoryLabel={'Отображать уволенных'}
                    category={'Уволен'}
                    handleCheckboxChange={filterStore.toggleCategory}
                    selectedCategories={filterStore.selectedCatogories}
                />
                <FilterItem
                    key={'filter-3'}
                    categoryLabel={'Отображать заблокированных'}
                    category={'All'}
                    handleCheckboxChange={filterStore.toggleCategory}
                    selectedCategories={filterStore.selectedCatogories}
                />
            </div>
            <Button disabled buttonTheme={ButtonTheme.BUTTON_DISABLED_SEC}>
                Удалить
            </Button>
        </div>
    );
});
