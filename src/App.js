import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { ProviderStore } from './stores';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <ProviderStore>
            <Router>
                <div className="App grid wide">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Pages = route.element;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Pages />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </ProviderStore>
    );
}

export default App;
