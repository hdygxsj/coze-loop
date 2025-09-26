// Copyright (c) 2025 coze-dev Authors
// SPDX-License-Identifier: Apache-2.0
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { I18n } from '@cozeloop/i18n-adapter';
import { $notification } from '@cozeloop/api-schema';
import { useOauth } from '@cozeloop/account';
import { Toast } from '@coze-arch/coze-design';

import { LoginPanel } from '@/components';
import { debug } from 'console';


export function TrustLogin() {
  const oauth = useOauth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');
  
  useEffect(() => {
    oauth('github', code || '').then(() => {
      // console.log("111");
      navigate('/')
    }).catch(() => {
      
    })
  }, []);

  return (
    <></>
  );
}
