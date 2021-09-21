import type { Principal } from '@dfinity/principal';
export interface Account {
  'id' : AccountId,
  'alias' : [] | [string],
  'plugAddress' : [] | [Principal],
  'stoicAddress' : [] | [Principal],
  'primaryWallet' : Player,
  'flavorText' : [] | [string],
  'avatar' : [] | [string],
}
export interface AccountDetails {
  'id' : AccountId,
  'alias' : [] | [string],
  'flavorText' : [] | [string],
  'avatar' : [] | [string],
}
export type AccountId = bigint;
export type AuthenticationRequest = { 'authenticate' : Player } |
  { 'link' : [Player, Player] };
export type AuthenticationResponse = {
    'ok' : { 'message' : string, 'account' : Account }
  } |
  { 'err' : { 'message' : string } } |
  { 'forbidden' : null } |
  { 'pendingConfirmation' : { 'message' : string } };
export type DetailedScore = [AccountDetails, bigint];
export type GamePrincipal = Principal;
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export interface Metadata {
  'name' : string,
  'playUrl' : string,
  'flavorText' : [] | [string],
}
export interface Metascore {
  'addAdmin' : (arg_0: Principal) => Promise<undefined>,
  'authenticateAccount' : (arg_0: AuthenticationRequest) => Promise<
      AuthenticationResponse
    >,
  'cron' : () => Promise<undefined>,
  'getAccount' : (arg_0: AccountId) => Promise<Result_2>,
  'getAccountDetails' : (arg_0: AccountId) => Promise<Result_1>,
  'getDetailedGameScores' : (
      arg_0: GamePrincipal,
      arg_1: [] | [bigint],
      arg_2: [] | [bigint],
    ) => Promise<Array<DetailedScore>>,
  'getDetailedMetascores' : (
      arg_0: [] | [bigint],
      arg_1: [] | [bigint],
    ) => Promise<Array<DetailedScore>>,
  'getGameScores' : (
      arg_0: GamePrincipal,
      arg_1: [] | [bigint],
      arg_2: [] | [bigint],
    ) => Promise<Array<Score__1>>,
  'getGames' : () => Promise<Array<[GamePrincipal, Metadata]>>,
  'getMetascore' : (arg_0: GamePrincipal, arg_1: AccountId) => Promise<bigint>,
  'getMetascores' : (arg_0: [] | [bigint], arg_1: [] | [bigint]) => Promise<
      Array<Score__1>
    >,
  'getOverallMetascore' : (arg_0: AccountId) => Promise<bigint>,
  'getPercentile' : (arg_0: AccountId) => Promise<[] | [number]>,
  'getPercentileMetascore' : (arg_0: number) => Promise<bigint>,
  'getPlayerCount' : () => Promise<bigint>,
  'getRanking' : (arg_0: GamePrincipal, arg_1: AccountId) => Promise<
      [] | [bigint]
    >,
  'getScoreCount' : () => Promise<bigint>,
  'getTop' : (arg_0: bigint) => Promise<Array<Score__1>>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'isAdmin' : (arg_0: Principal) => Promise<boolean>,
  'register' : (arg_0: GamePrincipal) => Promise<Result>,
  'registerGame' : (arg_0: Metadata) => Promise<undefined>,
  'removeAdmin' : (arg_0: Principal) => Promise<undefined>,
  'scoreUpdate' : (arg_0: Array<Score>) => Promise<undefined>,
  'unregister' : (arg_0: GamePrincipal) => Promise<undefined>,
  'updateAccount' : (arg_0: UpdateRequest) => Promise<UpdateResponse>,
}
export type Player = { 'plug' : Principal } |
  { 'stoic' : Principal };
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = { 'ok' : AccountDetails } |
  { 'err' : null };
export type Result_2 = { 'ok' : Account } |
  { 'err' : null };
export type Score = [Player, bigint];
export type Score__1 = [AccountId, bigint];
export interface StreamingCallbackHttpResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
}
export interface StreamingCallbackToken {
  'key' : string,
  'sha256' : [] | [Array<number>],
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : [Principal, string],
    }
  };
export interface UpdateRequest {
  'alias' : [] | [string],
  'primaryWallet' : [] | [Player],
  'flavorText' : [] | [string],
  'avatar' : [] | [string],
}
export type UpdateResponse = { 'ok' : Account } |
  { 'err' : string };
export interface _SERVICE extends Metascore {}
