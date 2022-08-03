import { join } from 'path';
import telescope from '@osmonauts/telescope';

const outPath = join(__dirname, '../src/proto');

telescope({
  protoDirs: [
    'third_party',
    './source/cosmos-sdk/proto',
    './source/cosmos-sdk/third_party/proto',
    './source/wasmd/proto',
    './source/wasmd/third_party/proto',
    './proto'
  ],
  outPath,
  options: {
    includePackageVar: false,
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
    typingsFormat: {
      duration: 'duration',
      timestamp: 'date',
      useExact: false
    }
  }
});
