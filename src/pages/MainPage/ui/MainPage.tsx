import cls from './MainPage.module.css';

import { Tabs } from '@/widgets/Tabs';

export const MainPage = () => {
    return (
        <section className={cls.mainPage}>
            <Tabs />
        </section>
    );
};
