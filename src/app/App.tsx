import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar/ui/Sidebar/Sidebar';
import { AppRouter } from './providers/RouterProvider/ui/AppRouter';
import './styles/App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content-page">
                <Sidebar />
                <div className="page-wrapper">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
