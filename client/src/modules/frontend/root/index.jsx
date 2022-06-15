import { createElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '~/modules/frontend/routes';
import '~/styles/tailwind.scss';

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
