import { FilterItem } from '../FilterItem/FilterItem';
import { Button } from '@/shared/Button';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import { filterStore } from '../../model/store/filterStore';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import cls from './FiltersDismissal.module.css';

export const FiltersDismissal = observer(() => {
    return (
        <div className={cls.filters}>
            <div className={cls.filtersCheckboxes}>
                <FilterItem
                    key={uuidv4()}
                    categoryLabel={'Выбрать всех'}
                    category={'All'}
                    handleCheckboxChange={filterStore.toggleCategory}
                    selectedCategories={filterStore.selectedCatogories}
                />
                <FilterItem
                    key={uuidv4()}
                    categoryLabel={'Отображать уволенных'}
                    category={'Уволен'}
                    handleCheckboxChange={filterStore.toggleCategory}
                    selectedCategories={filterStore.selectedCatogories}
                />
                <FilterItem
                    key={uuidv4()}
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
