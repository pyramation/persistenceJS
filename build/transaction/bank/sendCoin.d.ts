import { Persistence } from "../../utilities/persistenceJS";
export declare class bank extends Persistence {
    sendCoin: (address: string, chain_id: string, mnemonic: string, denom: string, amount: string, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createSendCoinMsg: (address: string, chain_id: string, mnemonic: string, denom: string, amount: string, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
