import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar/ui/Sidebar/Sidebar';
import { AppRouter } from './providers/RouterProvider/ui/AppRouter';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content-page">
                <Header />
                <div className="page-wrapper">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
