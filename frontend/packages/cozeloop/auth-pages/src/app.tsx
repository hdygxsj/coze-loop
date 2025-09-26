// Copyright (c) 2025 coze-dev Authors
// SPDX-License-Identifier: Apache-2.0
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, TrustLogin } from './pages';
import { AuthFrame, Logo } from './components';

export function App() {
  return (
    <AuthFrame brand={<Logo className="scale-[125%] origin-top-left" />}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="trustLogin/oidc" element={<TrustLogin />} />
        <Route path="*" element={<Navigate to="login" replace={true} />} />
      </Routes>
    </AuthFrame>
  );
}
