import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/v1beta1/authz";
import * as _17 from "./bank/v1beta1/bank";
import * as _18 from "./bank/v1beta1/genesis";
import * as _19 from "./bank/v1beta1/query";
import * as _20 from "./bank/v1beta1/tx";
import * as _21 from "./bank/v1beta1/authz";
import * as _22 from "./bank/v1beta1/bank";
import * as _23 from "./bank/v1beta1/genesis";
import * as _24 from "./bank/v1beta1/query";
import * as _25 from "./bank/v1beta1/tx";
import * as _26 from "./base/abci/v1beta1/abci";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/kv/v1beta1/kv";
import * as _29 from "./base/kv/v1beta1/kv";
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v1beta1/reflection";
import * as _33 from "./base/reflection/v1beta1/reflection";
import * as _34 from "./base/reflection/v2alpha1/reflection";
import * as _35 from "./base/reflection/v2alpha1/reflection";
import * as _36 from "./base/snapshots/v1beta1/snapshot";
import * as _37 from "./base/snapshots/v1beta1/snapshot";
import * as _38 from "./base/store/v1beta1/commit_info";
import * as _39 from "./base/store/v1beta1/listening";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/store/v1beta1/snapshot";
import * as _43 from "./base/tendermint/v1beta1/query";
import * as _44 from "./base/tendermint/v1beta1/query";
import * as _45 from "./base/v1beta1/coin";
import * as _46 from "./base/v1beta1/coin";
import * as _47 from "./capability/v1beta1/capability";
import * as _48 from "./capability/v1beta1/genesis";
import * as _49 from "./capability/v1beta1/capability";
import * as _50 from "./capability/v1beta1/genesis";
import * as _51 from "./crisis/v1beta1/genesis";
import * as _52 from "./crisis/v1beta1/tx";
import * as _53 from "./crisis/v1beta1/genesis";
import * as _54 from "./crisis/v1beta1/tx";
import * as _55 from "./crypto/ed25519/keys";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/multisig/keys";
import * as _58 from "./crypto/multisig/keys";
import * as _59 from "./crypto/secp256k1/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./crypto/secp256r1/keys";
import * as _63 from "./distribution/v1beta1/distribution";
import * as _64 from "./distribution/v1beta1/genesis";
import * as _65 from "./distribution/v1beta1/query";
import * as _66 from "./distribution/v1beta1/tx";
import * as _67 from "./distribution/v1beta1/distribution";
import * as _68 from "./distribution/v1beta1/genesis";
import * as _69 from "./distribution/v1beta1/query";
import * as _70 from "./distribution/v1beta1/tx";
import * as _71 from "./evidence/v1beta1/evidence";
import * as _72 from "./evidence/v1beta1/genesis";
import * as _73 from "./evidence/v1beta1/query";
import * as _74 from "./evidence/v1beta1/tx";
import * as _75 from "./evidence/v1beta1/evidence";
import * as _76 from "./evidence/v1beta1/genesis";
import * as _77 from "./evidence/v1beta1/query";
import * as _78 from "./evidence/v1beta1/tx";
import * as _79 from "./feegrant/v1beta1/feegrant";
import * as _80 from "./feegrant/v1beta1/genesis";
import * as _81 from "./feegrant/v1beta1/query";
import * as _82 from "./feegrant/v1beta1/tx";
import * as _83 from "./feegrant/v1beta1/feegrant";
import * as _84 from "./feegrant/v1beta1/genesis";
import * as _85 from "./feegrant/v1beta1/query";
import * as _86 from "./feegrant/v1beta1/tx";
import * as _87 from "./genutil/v1beta1/genesis";
import * as _88 from "./genutil/v1beta1/genesis";
import * as _89 from "./gov/v1beta1/genesis";
import * as _90 from "./gov/v1beta1/gov";
import * as _91 from "./gov/v1beta1/query";
import * as _92 from "./gov/v1beta1/tx";
import * as _93 from "./gov/v1beta1/genesis";
import * as _94 from "./gov/v1beta1/gov";
import * as _95 from "./gov/v1beta1/query";
import * as _96 from "./gov/v1beta1/tx";
import * as _97 from "./mint/v1beta1/genesis";
import * as _98 from "./mint/v1beta1/mint";
import * as _99 from "./mint/v1beta1/query";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./params/v1beta1/params";
import * as _104 from "./params/v1beta1/query";
import * as _105 from "./params/v1beta1/params";
import * as _106 from "./params/v1beta1/query";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./slashing/v1beta1/genesis";
import * as _112 from "./slashing/v1beta1/query";
import * as _113 from "./slashing/v1beta1/slashing";
import * as _114 from "./slashing/v1beta1/tx";
import * as _115 from "./staking/v1beta1/authz";
import * as _116 from "./staking/v1beta1/genesis";
import * as _117 from "./staking/v1beta1/query";
import * as _118 from "./staking/v1beta1/staking";
import * as _119 from "./staking/v1beta1/tx";
import * as _120 from "./staking/v1beta1/authz";
import * as _121 from "./staking/v1beta1/genesis";
import * as _122 from "./staking/v1beta1/query";
import * as _123 from "./staking/v1beta1/staking";
import * as _124 from "./staking/v1beta1/tx";
import * as _125 from "./tx/signing/v1beta1/signing";
import * as _126 from "./tx/signing/v1beta1/signing";
import * as _127 from "./tx/v1beta1/service";
import * as _128 from "./tx/v1beta1/tx";
import * as _129 from "./tx/v1beta1/service";
import * as _130 from "./tx/v1beta1/tx";
import * as _131 from "./upgrade/v1beta1/query";
import * as _132 from "./upgrade/v1beta1/upgrade";
import * as _133 from "./upgrade/v1beta1/query";
import * as _134 from "./upgrade/v1beta1/upgrade";
import * as _135 from "./vesting/v1beta1/tx";
import * as _136 from "./vesting/v1beta1/vesting";
import * as _137 from "./vesting/v1beta1/tx";
import * as _138 from "./vesting/v1beta1/vesting";
import * as _232 from "./auth/v1beta1/query.rpc.query";
import * as _233 from "./authz/v1beta1/query.rpc.query";
import * as _234 from "./bank/v1beta1/query.rpc.query";
import * as _235 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _236 from "./distribution/v1beta1/query.rpc.query";
import * as _237 from "./evidence/v1beta1/query.rpc.query";
import * as _238 from "./feegrant/v1beta1/query.rpc.query";
import * as _239 from "./gov/v1beta1/query.rpc.query";
import * as _240 from "./mint/v1beta1/query.rpc.query";
import * as _241 from "./params/v1beta1/query.rpc.query";
import * as _242 from "./slashing/v1beta1/query.rpc.query";
import * as _243 from "./staking/v1beta1/query.rpc.query";
import * as _244 from "./tx/v1beta1/service.rpc.svc";
import * as _245 from "./upgrade/v1beta1/query.rpc.query";
import * as _246 from "./auth/v1beta1/query.rpc.query";
import * as _247 from "./authz/v1beta1/query.rpc.query";
import * as _248 from "./bank/v1beta1/query.rpc.query";
import * as _249 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _250 from "./distribution/v1beta1/query.rpc.query";
import * as _251 from "./evidence/v1beta1/query.rpc.query";
import * as _252 from "./feegrant/v1beta1/query.rpc.query";
import * as _253 from "./gov/v1beta1/query.rpc.query";
import * as _254 from "./mint/v1beta1/query.rpc.query";
import * as _255 from "./params/v1beta1/query.rpc.query";
import * as _256 from "./slashing/v1beta1/query.rpc.query";
import * as _257 from "./staking/v1beta1/query.rpc.query";
import * as _258 from "./tx/v1beta1/service.rpc.svc";
import * as _259 from "./upgrade/v1beta1/query.rpc.query";
import * as _260 from "./authz/v1beta1/tx.rpc.msg";
import * as _261 from "./bank/v1beta1/tx.rpc.msg";
import * as _262 from "./crisis/v1beta1/tx.rpc.msg";
import * as _263 from "./distribution/v1beta1/tx.rpc.msg";
import * as _264 from "./evidence/v1beta1/tx.rpc.msg";
import * as _265 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _266 from "./gov/v1beta1/tx.rpc.msg";
import * as _267 from "./slashing/v1beta1/tx.rpc.msg";
import * as _268 from "./staking/v1beta1/tx.rpc.msg";
import * as _269 from "./vesting/v1beta1/tx.rpc.msg";
import * as _270 from "./authz/v1beta1/tx.rpc.msg";
import * as _271 from "./bank/v1beta1/tx.rpc.msg";
import * as _272 from "./crisis/v1beta1/tx.rpc.msg";
import * as _273 from "./distribution/v1beta1/tx.rpc.msg";
import * as _274 from "./evidence/v1beta1/tx.rpc.msg";
import * as _275 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _276 from "./gov/v1beta1/tx.rpc.msg";
import * as _277 from "./slashing/v1beta1/tx.rpc.msg";
import * as _278 from "./staking/v1beta1/tx.rpc.msg";
import * as _279 from "./vesting/v1beta1/tx.rpc.msg";
import * as _292 from "./rpc.query";
import * as _293 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._232,
      ..._246
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._233,
      ..._247,
      ..._260,
      ..._270
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._234,
      ..._248,
      ..._261,
      ..._271
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._26,
        ..._27
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._28,
        ..._29
      };
    }
    export namespace query {
      export const v1beta1 = { ..._30,
        ..._31
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._32,
        ..._33
      };
      export const v2alpha1 = { ..._34,
        ..._35
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._36,
        ..._37
      };
    }
    export namespace store {
      export const v1beta1 = { ..._38,
        ..._39,
        ..._40,
        ..._41,
        ..._42
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._43,
        ..._44,
        ..._235,
        ..._249
      };
    }
    export const v1beta1 = { ..._45,
      ..._46
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._49,
      ..._50
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._262,
      ..._272
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._55,
      ..._56
    };
    export const multisig = { ..._57,
      ..._58
    };
    export const secp256k1 = { ..._59,
      ..._60
    };
    export const secp256r1 = { ..._61,
      ..._62
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._236,
      ..._250,
      ..._263,
      ..._273
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._237,
      ..._251,
      ..._264,
      ..._274
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._238,
      ..._252,
      ..._265,
      ..._275
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._87,
      ..._88
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._239,
      ..._253,
      ..._266,
      ..._276
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._240,
      ..._254
    };
  }
  export namespace params {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._241,
      ..._255
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._242,
      ..._256,
      ..._267,
      ..._277
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._243,
      ..._257,
      ..._268,
      ..._278
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._125,
        ..._126
      };
    }
    export const v1beta1 = { ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._244,
      ..._258
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._245,
      ..._259
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._269,
      ..._279
    };
  }
  export const ClientFactory = { ..._292,
    ..._293
  };
}