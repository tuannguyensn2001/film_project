import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '~/modules/backend/routes';
import React, { Suspense } from 'react';
import 'antd/dist/antd.min.css';

function Backend() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={React.createElement(
                                route.layout,
                                {
                                    breadcrumbs: route.breadcrumbs,
                                },
                                React.createElement(route.component)
                            )}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Backend;
