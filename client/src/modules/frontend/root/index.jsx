import LayoutFrontend from '~/modules/frontend/layouts';
import { Suspense, createElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '~/modules/frontend/routes';

function Frontend() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={createElement(
                                route.layout,
                                {},
                                createElement(route.component)
                            )}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Frontend;
