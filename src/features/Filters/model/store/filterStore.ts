import { makeAutoObservable } from 'mobx';

class FilterStore {
    selectedCatogories: string[] = [];
    selectedName: string[] = [];
    selectendRole: string[] = [];
    selectIsAll: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    toggleCategory = (category: string) => {
        if (this.selectedCatogories.includes(category)) {
            this.selectedCatogories = this.selectedCatogories.filter(
                (c) => c !== category,
            );
        } else {
            this.selectedCatogories = [...this.selectedCatogories, category];
        }
    };

    toggleisAll = (name: string) => {
        if (this.selectIsAll === 'All') {
            this.selectIsAll = '';
        } else {
            this.selectIsAll = name;
        }
    };

    toggleName = (name: string) => {
        if (this.selectedName.includes(name)) {
            this.selectedName = this.selectedName.filter((n) => n !== name);
        } else {
            this.selectedName = [...this.selectedName, name];
        }
    };

    toggleRole = (role: string) => {
        if (this.selectendRole.includes(role)) {
            this.selectendRole = this.selectendRole.filter((r) => r !== role);
        } else {
            this.selectendRole = [...this.selectendRole, role];
        }
    };
}

export const filterStore = new FilterStore();
