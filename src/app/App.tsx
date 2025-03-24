import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/RouterProvider/ui/AppRouter';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content-page">
                <Header />
                <main className="page-wrapper">
                    <AppRouter />
                </main>
            </div>
        </div>
    );
}

export default App;
