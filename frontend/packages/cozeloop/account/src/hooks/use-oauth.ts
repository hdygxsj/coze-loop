// Copyright (c) 2025 coze-dev Authors
// SPDX-License-Identifier: Apache-2.0
import { useMemoizedFn } from 'ahooks';

import { useUserStore } from '../stores/user-store';
import { userService } from '../services/user-service';

export function useOauth() {
    const patch = useUserStore(s => s.patch);

  const oauth = useMemoizedFn(async (provider: string, code: string) => {
    try {
      patch({ settling: true });
      const resp = await userService.oauth(provider, code);

      console.log(resp.user_info);
      resp.user_info
        ? patch({ userInfo: resp.user_info, settling: false })
        : patch({ settling: false });

      
    } catch (e) {
      
    }
  });

  return oauth;
}
