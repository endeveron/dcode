import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { Layout } from 'components';
import { Feed, Login, Signup } from 'pages';
import { RequireAuth } from './RequireAuth';

const Routes = () => (
  <BrowserRouter basename="/dcode">
    <ReactRoutes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </ReactRoutes>
  </BrowserRouter>
);

export { Routes };
