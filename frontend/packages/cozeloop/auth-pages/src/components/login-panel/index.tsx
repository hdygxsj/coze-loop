// Copyright (c) 2025 coze-dev Authors
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';

import { I18n } from '@cozeloop/i18n-adapter';
import { Input, Button, Typography, Divider, Row, Space } from '@coze-arch/coze-design';

import loopBanner from '@/assets/loop-banner.png';
import { ReactComponent as IconGithub } from '@/assets/github.svg';

import { SwitchLang } from '../switch-lng';

import s from './index.module.less';
import { userService } from '@cozeloop/account/src/services/user-service';
import { redirect } from 'react-router-dom';

interface Props {
  loading?: boolean;
  onLogin?: (email: string, password: string) => void;
  onRegister?: (email: string, password: string) => void;
  providers?: any
}

const { Text } = Typography;

export function LoginPanel({ loading, onLogin, onRegister,providers }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [consent, setConsent] = useState(false);
  const canSubmit = Boolean(email && password);

  const onClickRegister = () => {
    onRegister?.(email, password);
  };

  const onClickLogin = () => {
    onLogin?.(email, password);
  };



  const onJumpOAuthProvider = (provider)=>{
    debugger
    console.log(provider)
    window.location.href = `${provider.authUrl}?response_type=code&client_id=${provider.clientId}&redirect_uri=${provider.redirectUrl}
    
    `;
  }



  return (
    <div className={s.container}>
      {/* <SwitchLang className="absolute right-[12px] top-[12px]" /> */}
      <div className="flex flex-col items-center">
        <img src={loopBanner} className={s.banner} />
        <div className="text-[18px] font-medium leading-[36px] my-[20px]">
          {I18n.t('welcome_to_cozeloop')}
        </div>
      </div>
      <div className="w-full flex flex-col items-stretch">
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          placeholder={I18n.t('please_input_email')}
        />
        <Input
          className="mt-[20px]"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder={I18n.t('please_input_password')}
        />
        <div className="mt-[20px] flex justify-between items-center">
          <Button
            className="w-[49%]"
            disabled={!canSubmit}
            onClick={onClickRegister}
            loading={loading}
            color="primary"
          >
            {I18n.t('register')}
          </Button>
          <Button
            className="w-[49%]"
            disabled={!canSubmit}
            onClick={onClickLogin}
            loading={loading}
          >
            {I18n.t('login')}
          </Button>
        </div>
        {Object.keys(providers).length > 0 ?
         <><Divider margin="30px">其他方式</Divider>
          <Space align='center'> {Object.keys(providers).map?.(e=>{
          return <Button style={{width:"20%"}} onClick={()=>{
            onJumpOAuthProvider(providers[e])
          }}>{e}</Button>
         })}
         </Space>
         </>
         :<></>}
        
      </div>
      <div className={s.copyright}>
        <Text component="div" type="secondary">
          广发银行股份有限公司
        </Text>
        {/* <Text type="secondary">
          {I18n.t('deploy_info')}
          <span> · </span>
          <Text
            link={{
              href: 'https://github.com/coze-dev/coze-loop?tab=Apache-2.0-1-ov-file',
              target: '_blank',
            }}
          >
            Apache 2.0 License
          </Text>
          <span> | </span>
          <Text
            link={{
              href: 'https://github.com/coze-dev/coze-loop',
              target: '_blank',
            }}
            icon={
              <IconGithub className="w-[14px] h-[14px] translate-y-[1px]" />
            }
          >
            coze-dev/coze-loop
          </Text>
        </Text> */}
      </div>
    </div>
  );
}
