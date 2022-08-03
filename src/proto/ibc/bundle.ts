import * as _201 from "./applications/interchain_accounts/controller/v1/controller";
import * as _202 from "./applications/interchain_accounts/controller/v1/query";
import * as _203 from "./applications/interchain_accounts/host/v1/host";
import * as _204 from "./applications/interchain_accounts/host/v1/query";
import * as _205 from "./applications/interchain_accounts/v1/account";
import * as _206 from "./applications/interchain_accounts/v1/genesis";
import * as _207 from "./applications/interchain_accounts/v1/metadata";
import * as _208 from "./applications/interchain_accounts/v1/packet";
import * as _209 from "./applications/transfer/v1/genesis";
import * as _210 from "./applications/transfer/v1/query";
import * as _211 from "./applications/transfer/v1/transfer";
import * as _212 from "./applications/transfer/v1/tx";
import * as _213 from "./applications/transfer/v2/packet";
import * as _214 from "./core/channel/v1/channel";
import * as _215 from "./core/channel/v1/genesis";
import * as _216 from "./core/channel/v1/query";
import * as _217 from "./core/channel/v1/tx";
import * as _218 from "./core/client/v1/client";
import * as _219 from "./core/client/v1/genesis";
import * as _220 from "./core/client/v1/query";
import * as _221 from "./core/client/v1/tx";
import * as _222 from "./core/commitment/v1/commitment";
import * as _223 from "./core/connection/v1/connection";
import * as _224 from "./core/connection/v1/genesis";
import * as _225 from "./core/connection/v1/query";
import * as _226 from "./core/connection/v1/tx";
import * as _227 from "./core/types/v1/genesis";
import * as _228 from "./lightclients/localhost/v1/localhost";
import * as _229 from "./lightclients/solomachine/v1/solomachine";
import * as _230 from "./lightclients/solomachine/v2/solomachine";
import * as _231 from "./lightclients/tendermint/v1/tendermint";
import * as _282 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _283 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _284 from "./applications/transfer/v1/query.rpc.query";
import * as _285 from "./core/channel/v1/query.rpc.query";
import * as _286 from "./core/client/v1/query.rpc.query";
import * as _287 from "./core/connection/v1/query.rpc.query";
import * as _288 from "./applications/transfer/v1/tx.rpc.msg";
import * as _289 from "./core/channel/v1/tx.rpc.msg";
import * as _290 from "./core/client/v1/tx.rpc.msg";
import * as _291 from "./core/connection/v1/tx.rpc.msg";
import * as _296 from "./rpc.query";
import * as _297 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._201,
          ..._202,
          ..._282
        };
      }
      export namespace host {
        export const v1 = { ..._203,
          ..._204,
          ..._283
        };
      }
      export const v1 = { ..._205,
        ..._206,
        ..._207,
        ..._208
      };
    }
    export namespace transfer {
      export const v1 = { ..._209,
        ..._210,
        ..._211,
        ..._212,
        ..._284,
        ..._288
      };
      export const v2 = { ..._213
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._214,
        ..._215,
        ..._216,
        ..._217,
        ..._285,
        ..._289
      };
    }
    export namespace client {
      export const v1 = { ..._218,
        ..._219,
        ..._220,
        ..._221,
        ..._286,
        ..._290
      };
    }
    export namespace commitment {
      export const v1 = { ..._222
      };
    }
    export namespace connection {
      export const v1 = { ..._223,
        ..._224,
        ..._225,
        ..._226,
        ..._287,
        ..._291
      };
    }
    export namespace types {
      export const v1 = { ..._227
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._228
      };
    }
    export namespace solomachine {
      export const v1 = { ..._229
      };
      export const v2 = { ..._230
      };
    }
    export namespace tendermint {
      export const v1 = { ..._231
      };
    }
  }
  export const ClientFactory = { ..._296,
    ..._297
  };
}