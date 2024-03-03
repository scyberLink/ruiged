export const BASE = process.env.ENVIRONMENT !== 'production'
    ? `${window.location.protocol.includes('s:') ? 'https' : 'http'}://${window.location.hostname}:5000`
    : process.env.REACT_APP_API_URL;
export const API_VERSION = 'v1';
export const ACCEPT_TRADE = '/trade/accept';
export const LOGIN = '/user/login';
export const USER_BASE = '/user';
export const CREATE_USER = '/user';
export const SEND_VERIFICATION = '/user/send-verification-mail/';
export const VERIFY_MAIL = '/user/verify-mail/';
export const SEND_OTP = '/user/send-otp-mail/';
export const SEND_FORGET_PASSWORD_VERIFICATION = '/user/send-forget-password-mail/';
export const VERIFY_FORGET_PASSWORD_MAIL = '/user/verify-forget-password';
export const ALL_USER = '/user/all';
export const ALL_USER_PROFILE = '/user-profile/all';
export const USER_PACKAGE = '/user/package/';
export const USER_PLAN = '/user/plan/';
export const USER_AUTO_TRADE_PLAN = '/user/auto-trade-plan/';
export const USER_DETAIL = '/user/detail/';
export const CHANGE_PIN = '/user/change-pin/';
export const CHANGE_PASSWORD = '/user/change-password/';
export const TRADE = '/trade/';
export const CREATE_TRADE = '/trade';
export const ALL_TRADE = '/trade/all';
export const ALL_TRADE_TRANSACTION = '/trade-transaction/all';
export const DEPOSIT = '/deposit';
export const GENERATE_DEPOSIT = '/deposit';
export const WITHDRAW = '/withdraw';
export const REQUEST_WITHDRAW = '/withdraw';
export const NETWORK = '/network/';
export const CREATE_NETWORK = '/network';
export const ALL_NETWORK = '/network/all';
export const PACKAGE = '/package/';
export const CREATE_PACKAGE = '/package';
export const ALL_PACKAGE = '/package/all';
export const CREATE_PACKAGE_TRANSACTION = '/package-transaction';
export const RENEW_PACKAGE_TRANSACTION = '/package-transaction/renew';
export const ALL_PACKAGE_TRANSACTION = '/package-transaction/all';
export const EXCHANGER = '/exchanger/';
export const CREATE_EXCHANGER = '/exchanger';
export const ALL_EXCHANGER = '/exchanger/all';
export const ALL_EXCHANGER_TRANSACTION = '/exchanger-transaction/all';
export const OPTION = '/option/';
export const CREATE_OPTION = '/option';
export const ALL_OPTION = '/option/all';
export const TOKEN = '/token/';
export const CREATE_TOKEN = '/token';
export const ALL_TOKEN = '/token/all';
export const TRANSACTION_TOKEN = '/transaction-token/';
export const CREATE_TRANSACTION_TOKEN = '/transaction-token';
export const ALL_TRANSACTION_TOKEN = '/transaction-token/all';
export const SIGNAL = '/signal/';
export const CREATE_SIGNAL = '/signal';
export const ALL_SIGNAL = '/signal/all';
export const TRANSACTION = '/transaction/';
export const CREATE_TRANSACTION = '/transaction';
export const ALL_TRANSACTION = '/transaction/all';
export const ALL_PROFIT_TRANSACTION = '/transaction/profit/all';
export const ALL_SALES_TRANSACTION = '/sales-wallet/all';
export const ALL_COUNTRIE = '/countrie/all';
export const COUNTRIE = '/countrie/';
export const ALL_STATE = '/state/all';
export const TOKEN_NETWORK = TOKEN + 'network/';
export const LOGGED = '/user/logged';
export const WALLET_BALANCE = '/wallet/balance/';
export const PROFIT_WALLET_BALANCE = '/profit-wallet/balance/';
export const SALES_WALLET_BALANCE = '/sales-wallet/balance/';
export const WITHDRAWABLE_AMOUNT = '/wallet/withdrawable/';
export const PROFIT_WITHDRAWABLE_AMOUNT = '/profit-wallet/withdrawable/';
export const UPDATE_TRANSACTION_HASH = '/transaction/hash';
export const USER_EXCHANGERS = '/user/exchangers/';
export const LOAD_EXCHANGER = '/exchanger-transaction';
export const WITHDRAW_EXCHANGER = '/exchanger-transaction/withdraw';
export const CLEAR_EXCHANGER = '/exchanger-transaction/clear/';
export const CONFIRM_USER = '/wallet/confirm-user/';
export const TRANSFER = '/wallet/transfer';
export const PROFIT_TRANSFER = '/profit-wallet/transfer';
export const SALES_TRANSFER = '/sales-wallet/transfer';
export const PROFIT_WITHDRAW = '/profit-wallet/withdraw';
export const SALES_WITHDRAW = '/sales-wallet/withdraw';
export const DEFAULT_TOKEN = '/token/default';
export const PRIVATE_FILE = '/prf/';
export const PUBLIC_FILE = '/puf/';
export const TOP_GAINER = '/top-gainer';
export const PUBLIC_OPTIONS = '/option/publics';
export const TOP_EXCHANGER = '/top-exchanger';
export const USER_SETTINGS = '/user-setting/';
export const ALL_USER_SETTINGS = '/user-setting/all';
export const USER_SETTING = '/user-setting/';
export const USER_SETTING_RESET = '/user-setting/reset/';
export const CREATE_USER_SETTING = '/user-setting';
export const ALL_USER_SETTING = '/user-setting/all';
export const SETTING_CATEGORY = '/setting-category/';
export const CREATE_SETTING_CATEGORY = '/setting-category';
export const ALL_SETTING_CATEGORY = '/setting-category/all';
export const SETTING = '/setting/';
export const CREATE_SETTING = '/setting';
export const ALL_SETTING = '/setting/all';
export const REFERRAL_EARNING = '/referral-earning/';
export const CREATE_REFERRAL_EARNING = '/referral-earning';
export const ALL_REFERRAL_EARNING = '/referral-earning/all';
export const AUTO_TRADE_DURATION = '/auto-trade-duration/';
export const CREATE_AUTO_TRADE_DURATION = '/auto-trade-duration';
export const ALL_AUTO_TRADE_DURATION = '/auto-trade-duration/all';
export const AUTO_TRADE_PLAN = '/auto-trade-plan/';
export const CREATE_AUTO_TRADE_PLAN = '/auto-trade-plan';
export const AUTO_TRADE_PLAN_RENEWAL = '/auto-trade-plan/renew';
export const ALL_AUTO_TRADE_PLAN = '/auto-trade-plan/all';
export const AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction/';
export const CREATE_AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction';
export const ALL_AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction/all';
export const AUTO_TRADE_SETTING = '/auto-trade-setting/';
export const CREATE_AUTO_TRADE_SETTING = '/auto-trade-setting';
export const ALL_AUTO_TRADE_SETTING = '/auto-trade-setting/all';
export const USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting/';
export const CREATE_USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting';
export const ALL_USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting/all';
export const TEAM_SALES = '/team-sales/';
export const CREATE_TEAM_SALES = '/team-sales';
export const ALL_TEAM_SALES = '/team-sales/all';
export const TEAM_SALES_SUMMARY = '/team-sales/summary';
export const REFERRAL_LEVEL = '/referral-level/';
export const CREATE_REFERRAL_LEVEL = '/referral-level';
export const ALL_REFERRAL_LEVEL = '/referral-level/all';
export const BUILTIN_EXTENSION = '/builtin-extension/';
export const EXTENSION = '/extension/';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdEVuZHBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWdzL1Jlc3RFbmRwb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxLQUFLLFlBQVk7SUFDdEMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsT0FBTztJQUNwRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQTtBQUVuQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFBO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxlQUFlLENBQUE7QUFFM0MsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQTtBQUNsQyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFBO0FBQ2hDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUE7QUFDbEMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsK0JBQStCLENBQUE7QUFDaEUsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFBO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQTtBQUM5QyxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FBRyxrQ0FBa0MsQ0FBQTtBQUNuRixNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyw4QkFBOEIsQ0FBQTtBQUN6RSxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFBO0FBQ25DLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFBO0FB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LENBQUMsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUE7QUFDL0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUE7QUFFdkQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFBO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLGlCQUFpQixDQUFBO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLHFCQUFxQixDQUFBO0FBRXZELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFBO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRSA9XG4gIHByb2Nlc3MuZW52LkVOVklST05NRU5UICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmNsdWRlcygnczonKSA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OjUwMDBgXG4gICAgOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTFxuXG5leHBvcnQgY29uc3QgQVBJX1ZFUlNJT04gPSAndjEnXG5cbmV4cG9ydCBjb25zdCBBQ0NFUFRfVFJBREUgPSAnL3RyYWRlL2FjY2VwdCdcblxuZXhwb3J0IGNvbnN0IExPR0lOID0gJy91c2VyL2xvZ2luJ1xuZXhwb3J0IGNvbnN0IFVTRVJfQkFTRSA9ICcvdXNlcidcbmV4cG9ydCBjb25zdCBDUkVBVEVfVVNFUiA9ICcvdXNlcidcbmV4cG9ydCBjb25zdCBTRU5EX1ZFUklGSUNBVElPTiA9ICcvdXNlci9zZW5kLXZlcmlmaWNhdGlvbi1tYWlsLydcbmV4cG9ydCBjb25zdCBWRVJJRllfTUFJTCA9ICcvdXNlci92ZXJpZnktbWFpbC8nXG5cbmV4cG9ydCBjb25zdCBTRU5EX09UUCA9ICcvdXNlci9zZW5kLW90cC1tYWlsLydcbmV4cG9ydCBjb25zdCBTRU5EX0ZPUkdFVF9QQVNTV09SRF9WRVJJRklDQVRJT04gPSAnL3VzZXIvc2VuZC1mb3JnZXQtcGFzc3dvcmQtbWFpbC8nXG5leHBvcnQgY29uc3QgVkVSSUZZX0ZPUkdFVF9QQVNTV09SRF9NQUlMID0gJy91c2VyL3ZlcmlmeS1mb3JnZXQtcGFzc3dvcmQnXG5leHBvcnQgY29uc3QgQUxMX1VTRVIgPSAnL3VzZXIvYWxsJ1xuZXhwb3J0IGNvbnN0IEFMTF9VU0VSX1BST0ZJTEUgPSAnL3VzZXItcHJvZmlsZS9hbGwnXG5leHBvcnQgY29uc3QgVVNFUl9QQUNLQUdFID0gJy91c2VyL3BhY2thZ2UvJ1xuZXhwb3J0IGNvbnN0IFVTRVJfUExBTiA9ICcvdXNlci9wbGFuLydcbmV4cG9ydCBjb25zdCBVU0VSX0FVVE9fVFJBREVfUExBTiA9ICcvdXNlci9hdXRvLXRyYWRlLXBsYW4vJ1xuZXhwb3J0IGNvbnN0IFVTRVJfREVUQUlMID0gJy91c2VyL2RldGFpbC8nXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BJTiA9ICcvdXNlci9jaGFuZ2UtcGluLydcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkQgPSAnL3VzZXIvY2hhbmdlLXBhc3N3b3JkLydcblxuZXhwb3J0IGNvbnN0IFRSQURFID0gJy90cmFkZS8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQURFID0gJy90cmFkZSdcbmV4cG9ydCBjb25zdCBBTExfVFJBREUgPSAnL3RyYWRlL2FsbCdcbmV4cG9ydCBjb25zdCBBTExfVFJBREVfVFJBTlNBQ1RJT04gPSAnL3RyYWRlLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IERFUE9TSVQgPSAnL2RlcG9zaXQnXG5leHBvcnQgY29uc3QgR0VORVJBVEVfREVQT1NJVCA9ICcvZGVwb3NpdCdcblxuZXhwb3J0IGNvbnN0IFdJVEhEUkFXID0gJy93aXRoZHJhdydcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1dJVEhEUkFXID0gJy93aXRoZHJhdydcblxuZXhwb3J0IGNvbnN0IE5FVFdPUksgPSAnL25ldHdvcmsvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9ORVRXT1JLID0gJy9uZXR3b3JrJ1xuZXhwb3J0IGNvbnN0IEFMTF9ORVRXT1JLID0gJy9uZXR3b3JrL2FsbCdcblxuZXhwb3J0IGNvbnN0IFBBQ0tBR0UgPSAnL3BhY2thZ2UvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQUNLQUdFID0gJy9wYWNrYWdlJ1xuZXhwb3J0IGNvbnN0IEFMTF9QQUNLQUdFID0gJy9wYWNrYWdlL2FsbCdcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFDS0FHRV9UUkFOU0FDVElPTiA9ICcvcGFja2FnZS10cmFuc2FjdGlvbidcbmV4cG9ydCBjb25zdCBSRU5FV19QQUNLQUdFX1RSQU5TQUNUSU9OID0gJy9wYWNrYWdlLXRyYW5zYWN0aW9uL3JlbmV3J1xuZXhwb3J0IGNvbnN0IEFMTF9QQUNLQUdFX1RSQU5TQUNUSU9OID0gJy9wYWNrYWdlLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IEVYQ0hBTkdFUiA9ICcvZXhjaGFuZ2VyLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfRVhDSEFOR0VSID0gJy9leGNoYW5nZXInXG5leHBvcnQgY29uc3QgQUxMX0VYQ0hBTkdFUiA9ICcvZXhjaGFuZ2VyL2FsbCdcbmV4cG9ydCBjb25zdCBBTExfRVhDSEFOR0VSX1RSQU5TQUNUSU9OID0gJy9leGNoYW5nZXItdHJhbnNhY3Rpb24vYWxsJ1xuXG5leHBvcnQgY29uc3QgT1BUSU9OID0gJy9vcHRpb24vJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9PUFRJT04gPSAnL29wdGlvbidcbmV4cG9ydCBjb25zdCBBTExfT1BUSU9OID0gJy9vcHRpb24vYWxsJ1xuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAnL3Rva2VuLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnL3Rva2VuJ1xuZXhwb3J0IGNvbnN0IEFMTF9UT0tFTiA9ICcvdG9rZW4vYWxsJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVE9LRU4gPSAnL3RyYW5zYWN0aW9uLXRva2VuLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBTlNBQ1RJT05fVE9LRU4gPSAnL3RyYW5zYWN0aW9uLXRva2VuJ1xuZXhwb3J0IGNvbnN0IEFMTF9UUkFOU0FDVElPTl9UT0tFTiA9ICcvdHJhbnNhY3Rpb24tdG9rZW4vYWxsJ1xuXG5leHBvcnQgY29uc3QgU0lHTkFMID0gJy9zaWduYWwvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9TSUdOQUwgPSAnL3NpZ25hbCdcbmV4cG9ydCBjb25zdCBBTExfU0lHTkFMID0gJy9zaWduYWwvYWxsJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uJ1xuZXhwb3J0IGNvbnN0IEFMTF9UUkFOU0FDVElPTiA9ICcvdHJhbnNhY3Rpb24vYWxsJ1xuZXhwb3J0IGNvbnN0IEFMTF9QUk9GSVRfVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uL3Byb2ZpdC9hbGwnXG5leHBvcnQgY29uc3QgQUxMX1NBTEVTX1RSQU5TQUNUSU9OID0gJy9zYWxlcy13YWxsZXQvYWxsJ1xuXG5leHBvcnQgY29uc3QgQUxMX0NPVU5UUklFID0gJy9jb3VudHJpZS9hbGwnXG5leHBvcnQgY29uc3QgQ09VTlRSSUUgPSAnL2NvdW50cmllLydcblxuZXhwb3J0IGNvbnN0IEFMTF9TVEFURSA9ICcvc3RhdGUvYWxsJ1xuXG5leHBvcnQgY29uc3QgVE9LRU5fTkVUV09SSyA9IFRPS0VOICsgJ25ldHdvcmsvJ1xuXG5leHBvcnQgY29uc3QgTE9HR0VEID0gJy91c2VyL2xvZ2dlZCdcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9CQUxBTkNFID0gJy93YWxsZXQvYmFsYW5jZS8nXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0FMTEVUX0JBTEFOQ0UgPSAnL3Byb2ZpdC13YWxsZXQvYmFsYW5jZS8nXG5cbmV4cG9ydCBjb25zdCBTQUxFU19XQUxMRVRfQkFMQU5DRSA9ICcvc2FsZXMtd2FsbGV0L2JhbGFuY2UvJ1xuXG5leHBvcnQgY29uc3QgV0lUSERSQVdBQkxFX0FNT1VOVCA9ICcvd2FsbGV0L3dpdGhkcmF3YWJsZS8nXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0lUSERSQVdBQkxFX0FNT1VOVCA9ICcvcHJvZml0LXdhbGxldC93aXRoZHJhd2FibGUvJ1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQU5TQUNUSU9OX0hBU0ggPSAnL3RyYW5zYWN0aW9uL2hhc2gnXG5cbmV4cG9ydCBjb25zdCBVU0VSX0VYQ0hBTkdFUlMgPSAnL3VzZXIvZXhjaGFuZ2Vycy8nXG5leHBvcnQgY29uc3QgTE9BRF9FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbidcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbi93aXRoZHJhdydcbmV4cG9ydCBjb25zdCBDTEVBUl9FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbi9jbGVhci8nXG5cbmV4cG9ydCBjb25zdCBDT05GSVJNX1VTRVIgPSAnL3dhbGxldC9jb25maXJtLXVzZXIvJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNGRVIgPSAnL3dhbGxldC90cmFuc2ZlcidcblxuZXhwb3J0IGNvbnN0IFBST0ZJVF9UUkFOU0ZFUiA9ICcvcHJvZml0LXdhbGxldC90cmFuc2ZlcidcblxuZXhwb3J0IGNvbnN0IFNBTEVTX1RSQU5TRkVSID0gJy9zYWxlcy13YWxsZXQvdHJhbnNmZXInXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0lUSERSQVcgPSAnL3Byb2ZpdC13YWxsZXQvd2l0aGRyYXcnXG5cbmV4cG9ydCBjb25zdCBTQUxFU19XSVRIRFJBVyA9ICcvc2FsZXMtd2FsbGV0L3dpdGhkcmF3J1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT0tFTiA9ICcvdG9rZW4vZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IFBSSVZBVEVfRklMRSA9ICcvcHJmLydcbmV4cG9ydCBjb25zdCBQVUJMSUNfRklMRSA9ICcvcHVmLydcblxuZXhwb3J0IGNvbnN0IFRPUF9HQUlORVIgPSAnL3RvcC1nYWluZXInXG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfT1BUSU9OUyA9ICcvb3B0aW9uL3B1YmxpY3MnXG5cbmV4cG9ydCBjb25zdCBUT1BfRVhDSEFOR0VSID0gJy90b3AtZXhjaGFuZ2VyJ1xuXG5leHBvcnQgY29uc3QgVVNFUl9TRVRUSU5HUyA9ICcvdXNlci1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBBTExfVVNFUl9TRVRUSU5HUyA9ICcvdXNlci1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfU0VUVElORyA9ICcvdXNlci1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBVU0VSX1NFVFRJTkdfUkVTRVQgPSAnL3VzZXItc2V0dGluZy9yZXNldC8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVJfU0VUVElORyA9ICcvdXNlci1zZXR0aW5nJ1xuZXhwb3J0IGNvbnN0IEFMTF9VU0VSX1NFVFRJTkcgPSAnL3VzZXItc2V0dGluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HX0NBVEVHT1JZID0gJy9zZXR0aW5nLWNhdGVnb3J5LydcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0VUVElOR19DQVRFR09SWSA9ICcvc2V0dGluZy1jYXRlZ29yeSdcbmV4cG9ydCBjb25zdCBBTExfU0VUVElOR19DQVRFR09SWSA9ICcvc2V0dGluZy1jYXRlZ29yeS9hbGwnXG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HID0gJy9zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0VUVElORyA9ICcvc2V0dGluZydcbmV4cG9ydCBjb25zdCBBTExfU0VUVElORyA9ICcvc2V0dGluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBSRUZFUlJBTF9FQVJOSU5HID0gJy9yZWZlcnJhbC1lYXJuaW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVGRVJSQUxfRUFSTklORyA9ICcvcmVmZXJyYWwtZWFybmluZydcbmV4cG9ydCBjb25zdCBBTExfUkVGRVJSQUxfRUFSTklORyA9ICcvcmVmZXJyYWwtZWFybmluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBBVVRPX1RSQURFX0RVUkFUSU9OID0gJy9hdXRvLXRyYWRlLWR1cmF0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9EVVJBVElPTiA9ICcvYXV0by10cmFkZS1kdXJhdGlvbidcbmV4cG9ydCBjb25zdCBBTExfQVVUT19UUkFERV9EVVJBVElPTiA9ICcvYXV0by10cmFkZS1kdXJhdGlvbi9hbGwnXG5cbmV4cG9ydCBjb25zdCBBVVRPX1RSQURFX1BMQU4gPSAnL2F1dG8tdHJhZGUtcGxhbi8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX0FVVE9fVFJBREVfUExBTiA9ICcvYXV0by10cmFkZS1wbGFuJ1xuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfUExBTl9SRU5FV0FMID0gJy9hdXRvLXRyYWRlLXBsYW4vcmVuZXcnXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfUExBTiA9ICcvYXV0by10cmFkZS1wbGFuL2FsbCdcblxuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfUExBTl9UUkFOU0FDVElPTiA9ICcvYXV0by10cmFkZS1wbGFuLXRyYW5zYWN0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9QTEFOX1RSQU5TQUNUSU9OID0gJy9hdXRvLXRyYWRlLXBsYW4tdHJhbnNhY3Rpb24nXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfUExBTl9UUkFOU0FDVElPTiA9ICcvYXV0by10cmFkZS1wbGFuLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfU0VUVElORyA9ICcvYXV0by10cmFkZS1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9TRVRUSU5HID0gJy9hdXRvLXRyYWRlLXNldHRpbmcnXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfU0VUVElORyA9ICcvYXV0by10cmFkZS1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfQVVUT19UUkFERV9TRVRUSU5HID0gJy91c2VyLWF1dG8tdHJhZGUtc2V0dGluZy8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVJfQVVUT19UUkFERV9TRVRUSU5HID0gJy91c2VyLWF1dG8tdHJhZGUtc2V0dGluZydcbmV4cG9ydCBjb25zdCBBTExfVVNFUl9BVVRPX1RSQURFX1NFVFRJTkcgPSAnL3VzZXItYXV0by10cmFkZS1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0FMRVMgPSAnL3RlYW0tc2FsZXMvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9URUFNX1NBTEVTID0gJy90ZWFtLXNhbGVzJ1xuZXhwb3J0IGNvbnN0IEFMTF9URUFNX1NBTEVTID0gJy90ZWFtLXNhbGVzL2FsbCdcbmV4cG9ydCBjb25zdCBURUFNX1NBTEVTX1NVTU1BUlkgPSAnL3RlYW0tc2FsZXMvc3VtbWFyeSdcblxuZXhwb3J0IGNvbnN0IFJFRkVSUkFMX0xFVkVMID0gJy9yZWZlcnJhbC1sZXZlbC8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFRkVSUkFMX0xFVkVMID0gJy9yZWZlcnJhbC1sZXZlbCdcbmV4cG9ydCBjb25zdCBBTExfUkVGRVJSQUxfTEVWRUwgPSAnL3JlZmVycmFsLWxldmVsL2FsbCdcblxuZXhwb3J0IGNvbnN0IEJVSUxUSU5fRVhURU5TSU9OID0gJy9idWlsdGluLWV4dGVuc2lvbi8nXG5leHBvcnQgY29uc3QgRVhURU5TSU9OID0gJy9leHRlbnNpb24vJ1xuIl19