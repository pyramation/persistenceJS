import * as _195 from "./wasm/v1/genesis";
import * as _196 from "./wasm/v1/ibc";
import * as _197 from "./wasm/v1/proposal";
import * as _198 from "./wasm/v1/query";
import * as _199 from "./wasm/v1/tx";
import * as _200 from "./wasm/v1/types";
import * as _280 from "./wasm/v1/query.rpc.query";
import * as _281 from "./wasm/v1/tx.rpc.msg";
import * as _294 from "./rpc.query";
import * as _295 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._280,
      ..._281
    };
  }
  export const ClientFactory = { ..._294,
    ..._295
  };
}