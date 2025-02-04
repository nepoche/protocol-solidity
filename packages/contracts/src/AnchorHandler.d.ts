/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AnchorHandlerInterface extends ethers.utils.Interface {
  functions: {
    "_bridgeAddress()": FunctionFragment;
    "_contractAddressToResourceID(address)": FunctionFragment;
    "_contractWhitelist(address)": FunctionFragment;
    "_resourceIDToContractAddress(bytes32)": FunctionFragment;
    "executeProposal(bytes32,bytes)": FunctionFragment;
    "migrateBridge(address)": FunctionFragment;
    "setResource(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_bridgeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_contractAddressToResourceID",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_contractWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_resourceIDToContractAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateBridge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResource",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_bridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_contractAddressToResourceID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_contractWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_resourceIDToContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setResource",
    data: BytesLike
  ): Result;

  events: {};
}

export class AnchorHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AnchorHandlerInterface;

  functions: {
    _bridgeAddress(overrides?: CallOverrides): Promise<[string]>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _bridgeAddress(overrides?: CallOverrides): Promise<string>;

  _contractAddressToResourceID(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _resourceIDToContractAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  executeProposal(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateBridge(
    newBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResource(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateBridge(newBridge: string, overrides?: CallOverrides): Promise<void>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
