"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNAL = exports.ALL_TRANSACTION_TOKEN = exports.CREATE_TRANSACTION_TOKEN = exports.TRANSACTION_TOKEN = exports.ALL_TOKEN = exports.CREATE_TOKEN = exports.TOKEN = exports.ALL_OPTION = exports.CREATE_OPTION = exports.OPTION = exports.ALL_EXCHANGER_TRANSACTION = exports.ALL_EXCHANGER = exports.CREATE_EXCHANGER = exports.EXCHANGER = exports.ALL_PACKAGE_TRANSACTION = exports.RENEW_PACKAGE_TRANSACTION = exports.CREATE_PACKAGE_TRANSACTION = exports.ALL_PACKAGE = exports.CREATE_PACKAGE = exports.PACKAGE = exports.ALL_NETWORK = exports.CREATE_NETWORK = exports.NETWORK = exports.REQUEST_WITHDRAW = exports.WITHDRAW = exports.GENERATE_DEPOSIT = exports.DEPOSIT = exports.ALL_TRADE_TRANSACTION = exports.ALL_TRADE = exports.CREATE_TRADE = exports.TRADE = exports.CHANGE_PASSWORD = exports.CHANGE_PIN = exports.USER_DETAIL = exports.USER_AUTO_TRADE_PLAN = exports.USER_PLAN = exports.USER_PACKAGE = exports.ALL_USER_PROFILE = exports.ALL_USER = exports.VERIFY_FORGET_PASSWORD_MAIL = exports.SEND_FORGET_PASSWORD_VERIFICATION = exports.SEND_OTP = exports.VERIFY_MAIL = exports.SEND_VERIFICATION = exports.CREATE_USER = exports.USER_BASE = exports.LOGIN = exports.ACCEPT_TRADE = exports.API_VERSION = exports.BASE = void 0;
exports.AUTO_TRADE_DURATION = exports.ALL_REFERRAL_EARNING = exports.CREATE_REFERRAL_EARNING = exports.REFERRAL_EARNING = exports.ALL_SETTING = exports.CREATE_SETTING = exports.SETTING = exports.ALL_SETTING_CATEGORY = exports.CREATE_SETTING_CATEGORY = exports.SETTING_CATEGORY = exports.ALL_USER_SETTING = exports.CREATE_USER_SETTING = exports.USER_SETTING_RESET = exports.USER_SETTING = exports.ALL_USER_SETTINGS = exports.USER_SETTINGS = exports.TOP_EXCHANGER = exports.PUBLIC_OPTIONS = exports.TOP_GAINER = exports.PUBLIC_FILE = exports.PRIVATE_FILE = exports.DEFAULT_TOKEN = exports.SALES_WITHDRAW = exports.PROFIT_WITHDRAW = exports.SALES_TRANSFER = exports.PROFIT_TRANSFER = exports.TRANSFER = exports.CONFIRM_USER = exports.CLEAR_EXCHANGER = exports.WITHDRAW_EXCHANGER = exports.LOAD_EXCHANGER = exports.USER_EXCHANGERS = exports.UPDATE_TRANSACTION_HASH = exports.PROFIT_WITHDRAWABLE_AMOUNT = exports.WITHDRAWABLE_AMOUNT = exports.SALES_WALLET_BALANCE = exports.PROFIT_WALLET_BALANCE = exports.WALLET_BALANCE = exports.LOGGED = exports.TOKEN_NETWORK = exports.ALL_STATE = exports.COUNTRIE = exports.ALL_COUNTRIE = exports.ALL_SALES_TRANSACTION = exports.ALL_PROFIT_TRANSACTION = exports.ALL_TRANSACTION = exports.CREATE_TRANSACTION = exports.TRANSACTION = exports.ALL_SIGNAL = exports.CREATE_SIGNAL = void 0;
exports.EXTENSION = exports.BUILTIN_EXTENSION = exports.ALL_REFERRAL_LEVEL = exports.CREATE_REFERRAL_LEVEL = exports.REFERRAL_LEVEL = exports.TEAM_SALES_SUMMARY = exports.ALL_TEAM_SALES = exports.CREATE_TEAM_SALES = exports.TEAM_SALES = exports.ALL_USER_AUTO_TRADE_SETTING = exports.CREATE_USER_AUTO_TRADE_SETTING = exports.USER_AUTO_TRADE_SETTING = exports.ALL_AUTO_TRADE_SETTING = exports.CREATE_AUTO_TRADE_SETTING = exports.AUTO_TRADE_SETTING = exports.ALL_AUTO_TRADE_PLAN_TRANSACTION = exports.CREATE_AUTO_TRADE_PLAN_TRANSACTION = exports.AUTO_TRADE_PLAN_TRANSACTION = exports.ALL_AUTO_TRADE_PLAN = exports.AUTO_TRADE_PLAN_RENEWAL = exports.CREATE_AUTO_TRADE_PLAN = exports.AUTO_TRADE_PLAN = exports.ALL_AUTO_TRADE_DURATION = exports.CREATE_AUTO_TRADE_DURATION = void 0;
exports.BASE = process.env.ENVIRONMENT !== 'production'
    ? `${window.location.protocol.includes('s:') ? 'https' : 'http'}://${window.location.hostname}:5000`
    : process.env.REACT_APP_API_URL;
exports.API_VERSION = 'v1';
exports.ACCEPT_TRADE = '/trade/accept';
exports.LOGIN = '/user/login';
exports.USER_BASE = '/user';
exports.CREATE_USER = '/user';
exports.SEND_VERIFICATION = '/user/send-verification-mail/';
exports.VERIFY_MAIL = '/user/verify-mail/';
exports.SEND_OTP = '/user/send-otp-mail/';
exports.SEND_FORGET_PASSWORD_VERIFICATION = '/user/send-forget-password-mail/';
exports.VERIFY_FORGET_PASSWORD_MAIL = '/user/verify-forget-password';
exports.ALL_USER = '/user/all';
exports.ALL_USER_PROFILE = '/user-profile/all';
exports.USER_PACKAGE = '/user/package/';
exports.USER_PLAN = '/user/plan/';
exports.USER_AUTO_TRADE_PLAN = '/user/auto-trade-plan/';
exports.USER_DETAIL = '/user/detail/';
exports.CHANGE_PIN = '/user/change-pin/';
exports.CHANGE_PASSWORD = '/user/change-password/';
exports.TRADE = '/trade/';
exports.CREATE_TRADE = '/trade';
exports.ALL_TRADE = '/trade/all';
exports.ALL_TRADE_TRANSACTION = '/trade-transaction/all';
exports.DEPOSIT = '/deposit';
exports.GENERATE_DEPOSIT = '/deposit';
exports.WITHDRAW = '/withdraw';
exports.REQUEST_WITHDRAW = '/withdraw';
exports.NETWORK = '/network/';
exports.CREATE_NETWORK = '/network';
exports.ALL_NETWORK = '/network/all';
exports.PACKAGE = '/package/';
exports.CREATE_PACKAGE = '/package';
exports.ALL_PACKAGE = '/package/all';
exports.CREATE_PACKAGE_TRANSACTION = '/package-transaction';
exports.RENEW_PACKAGE_TRANSACTION = '/package-transaction/renew';
exports.ALL_PACKAGE_TRANSACTION = '/package-transaction/all';
exports.EXCHANGER = '/exchanger/';
exports.CREATE_EXCHANGER = '/exchanger';
exports.ALL_EXCHANGER = '/exchanger/all';
exports.ALL_EXCHANGER_TRANSACTION = '/exchanger-transaction/all';
exports.OPTION = '/option/';
exports.CREATE_OPTION = '/option';
exports.ALL_OPTION = '/option/all';
exports.TOKEN = '/token/';
exports.CREATE_TOKEN = '/token';
exports.ALL_TOKEN = '/token/all';
exports.TRANSACTION_TOKEN = '/transaction-token/';
exports.CREATE_TRANSACTION_TOKEN = '/transaction-token';
exports.ALL_TRANSACTION_TOKEN = '/transaction-token/all';
exports.SIGNAL = '/signal/';
exports.CREATE_SIGNAL = '/signal';
exports.ALL_SIGNAL = '/signal/all';
exports.TRANSACTION = '/transaction/';
exports.CREATE_TRANSACTION = '/transaction';
exports.ALL_TRANSACTION = '/transaction/all';
exports.ALL_PROFIT_TRANSACTION = '/transaction/profit/all';
exports.ALL_SALES_TRANSACTION = '/sales-wallet/all';
exports.ALL_COUNTRIE = '/countrie/all';
exports.COUNTRIE = '/countrie/';
exports.ALL_STATE = '/state/all';
exports.TOKEN_NETWORK = exports.TOKEN + 'network/';
exports.LOGGED = '/user/logged';
exports.WALLET_BALANCE = '/wallet/balance/';
exports.PROFIT_WALLET_BALANCE = '/profit-wallet/balance/';
exports.SALES_WALLET_BALANCE = '/sales-wallet/balance/';
exports.WITHDRAWABLE_AMOUNT = '/wallet/withdrawable/';
exports.PROFIT_WITHDRAWABLE_AMOUNT = '/profit-wallet/withdrawable/';
exports.UPDATE_TRANSACTION_HASH = '/transaction/hash';
exports.USER_EXCHANGERS = '/user/exchangers/';
exports.LOAD_EXCHANGER = '/exchanger-transaction';
exports.WITHDRAW_EXCHANGER = '/exchanger-transaction/withdraw';
exports.CLEAR_EXCHANGER = '/exchanger-transaction/clear/';
exports.CONFIRM_USER = '/wallet/confirm-user/';
exports.TRANSFER = '/wallet/transfer';
exports.PROFIT_TRANSFER = '/profit-wallet/transfer';
exports.SALES_TRANSFER = '/sales-wallet/transfer';
exports.PROFIT_WITHDRAW = '/profit-wallet/withdraw';
exports.SALES_WITHDRAW = '/sales-wallet/withdraw';
exports.DEFAULT_TOKEN = '/token/default';
exports.PRIVATE_FILE = '/prf/';
exports.PUBLIC_FILE = '/puf/';
exports.TOP_GAINER = '/top-gainer';
exports.PUBLIC_OPTIONS = '/option/publics';
exports.TOP_EXCHANGER = '/top-exchanger';
exports.USER_SETTINGS = '/user-setting/';
exports.ALL_USER_SETTINGS = '/user-setting/all';
exports.USER_SETTING = '/user-setting/';
exports.USER_SETTING_RESET = '/user-setting/reset/';
exports.CREATE_USER_SETTING = '/user-setting';
exports.ALL_USER_SETTING = '/user-setting/all';
exports.SETTING_CATEGORY = '/setting-category/';
exports.CREATE_SETTING_CATEGORY = '/setting-category';
exports.ALL_SETTING_CATEGORY = '/setting-category/all';
exports.SETTING = '/setting/';
exports.CREATE_SETTING = '/setting';
exports.ALL_SETTING = '/setting/all';
exports.REFERRAL_EARNING = '/referral-earning/';
exports.CREATE_REFERRAL_EARNING = '/referral-earning';
exports.ALL_REFERRAL_EARNING = '/referral-earning/all';
exports.AUTO_TRADE_DURATION = '/auto-trade-duration/';
exports.CREATE_AUTO_TRADE_DURATION = '/auto-trade-duration';
exports.ALL_AUTO_TRADE_DURATION = '/auto-trade-duration/all';
exports.AUTO_TRADE_PLAN = '/auto-trade-plan/';
exports.CREATE_AUTO_TRADE_PLAN = '/auto-trade-plan';
exports.AUTO_TRADE_PLAN_RENEWAL = '/auto-trade-plan/renew';
exports.ALL_AUTO_TRADE_PLAN = '/auto-trade-plan/all';
exports.AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction/';
exports.CREATE_AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction';
exports.ALL_AUTO_TRADE_PLAN_TRANSACTION = '/auto-trade-plan-transaction/all';
exports.AUTO_TRADE_SETTING = '/auto-trade-setting/';
exports.CREATE_AUTO_TRADE_SETTING = '/auto-trade-setting';
exports.ALL_AUTO_TRADE_SETTING = '/auto-trade-setting/all';
exports.USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting/';
exports.CREATE_USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting';
exports.ALL_USER_AUTO_TRADE_SETTING = '/user-auto-trade-setting/all';
exports.TEAM_SALES = '/team-sales/';
exports.CREATE_TEAM_SALES = '/team-sales';
exports.ALL_TEAM_SALES = '/team-sales/all';
exports.TEAM_SALES_SUMMARY = '/team-sales/summary';
exports.REFERRAL_LEVEL = '/referral-level/';
exports.CREATE_REFERRAL_LEVEL = '/referral-level';
exports.ALL_REFERRAL_LEVEL = '/referral-level/all';
exports.BUILTIN_EXTENSION = '/builtin-extension/';
exports.EXTENSION = '/extension/';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdEVuZHBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3J1aWcvc3JjL2NvbmZpZ3MvUmVzdEVuZHBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFhLFFBQUEsSUFBSSxHQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxLQUFLLFlBQVk7SUFDdEMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsT0FBTztJQUNwRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQTtBQUV0QixRQUFBLFdBQVcsR0FBRyxJQUFJLENBQUE7QUFFbEIsUUFBQSxZQUFZLEdBQUcsZUFBZSxDQUFBO0FBRTlCLFFBQUEsS0FBSyxHQUFHLGFBQWEsQ0FBQTtBQUNyQixRQUFBLFNBQVMsR0FBRyxPQUFPLENBQUE7QUFDbkIsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFBO0FBQ3JCLFFBQUEsaUJBQWlCLEdBQUcsK0JBQStCLENBQUE7QUFDbkQsUUFBQSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7QUFFbEMsUUFBQSxRQUFRLEdBQUcsc0JBQXNCLENBQUE7QUFDakMsUUFBQSxpQ0FBaUMsR0FBRyxrQ0FBa0MsQ0FBQTtBQUN0RSxRQUFBLDJCQUEyQixHQUFHLDhCQUE4QixDQUFBO0FBQzVELFFBQUEsUUFBUSxHQUFHLFdBQVcsQ0FBQTtBQUN0QixRQUFBLGdCQUFnQixHQUFHLG1CQUFtQixDQUFBO0FBQ3RDLFFBQUEsWUFBWSxHQUFHLGdCQUFnQixDQUFBO0FBQy9CLFFBQUEsU0FBUyxHQUFHLGFBQWEsQ0FBQTtBQUN6QixRQUFBLG9CQUFvQixHQUFHLHdCQUF3QixDQUFBO0FBQy9DLFFBQUEsV0FBVyxHQUFHLGVBQWUsQ0FBQTtBQUM3QixRQUFBLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQTtBQUNoQyxRQUFBLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQTtBQUUxQyxRQUFBLEtBQUssR0FBRyxTQUFTLENBQUE7QUFDakIsUUFBQSxZQUFZLEdBQUcsUUFBUSxDQUFBO0FBQ3ZCLFFBQUEsU0FBUyxHQUFHLFlBQVksQ0FBQTtBQUN4QixRQUFBLHFCQUFxQixHQUFHLHdCQUF3QixDQUFBO0FBRWhELFFBQUEsT0FBTyxHQUFHLFVBQVUsQ0FBQTtBQUNwQixRQUFBLGdCQUFnQixHQUFHLFVBQVUsQ0FBQTtBQUU3QixRQUFBLFFBQVEsR0FBRyxXQUFXLENBQUE7QUFDdEIsUUFBQSxnQkFBZ0IsR0FBRyxXQUFXLENBQUE7QUFFOUIsUUFBQSxPQUFPLEdBQUcsV0FBVyxDQUFBO0FBQ3JCLFFBQUEsY0FBYyxHQUFHLFVBQVUsQ0FBQTtBQUMzQixRQUFBLFdBQVcsR0FBRyxjQUFjLENBQUE7QUFFNUIsUUFBQSxPQUFPLEdBQUcsV0FBVyxDQUFBO0FBQ3JCLFFBQUEsY0FBYyxHQUFHLFVBQVUsQ0FBQTtBQUMzQixRQUFBLFdBQVcsR0FBRyxjQUFjLENBQUE7QUFDNUIsUUFBQSwwQkFBMEIsR0FBRyxzQkFBc0IsQ0FBQTtBQUNuRCxRQUFBLHlCQUF5QixHQUFHLDRCQUE0QixDQUFBO0FBQ3hELFFBQUEsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUE7QUFFcEQsUUFBQSxTQUFTLEdBQUcsYUFBYSxDQUFBO0FBQ3pCLFFBQUEsZ0JBQWdCLEdBQUcsWUFBWSxDQUFBO0FBQy9CLFFBQUEsYUFBYSxHQUFHLGdCQUFnQixDQUFBO0FBQ2hDLFFBQUEseUJBQXlCLEdBQUcsNEJBQTRCLENBQUE7QUFFeEQsUUFBQSxNQUFNLEdBQUcsVUFBVSxDQUFBO0FBQ25CLFFBQUEsYUFBYSxHQUFHLFNBQVMsQ0FBQTtBQUN6QixRQUFBLFVBQVUsR0FBRyxhQUFhLENBQUE7QUFFMUIsUUFBQSxLQUFLLEdBQUcsU0FBUyxDQUFBO0FBQ2pCLFFBQUEsWUFBWSxHQUFHLFFBQVEsQ0FBQTtBQUN2QixRQUFBLFNBQVMsR0FBRyxZQUFZLENBQUE7QUFFeEIsUUFBQSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQTtBQUN6QyxRQUFBLHdCQUF3QixHQUFHLG9CQUFvQixDQUFBO0FBQy9DLFFBQUEscUJBQXFCLEdBQUcsd0JBQXdCLENBQUE7QUFFaEQsUUFBQSxNQUFNLEdBQUcsVUFBVSxDQUFBO0FBQ25CLFFBQUEsYUFBYSxHQUFHLFNBQVMsQ0FBQTtBQUN6QixRQUFBLFVBQVUsR0FBRyxhQUFhLENBQUE7QUFFMUIsUUFBQSxXQUFXLEdBQUcsZUFBZSxDQUFBO0FBQzdCLFFBQUEsa0JBQWtCLEdBQUcsY0FBYyxDQUFBO0FBQ25DLFFBQUEsZUFBZSxHQUFHLGtCQUFrQixDQUFBO0FBQ3BDLFFBQUEsc0JBQXNCLEdBQUcseUJBQXlCLENBQUE7QUFDbEQsUUFBQSxxQkFBcUIsR0FBRyxtQkFBbUIsQ0FBQTtBQUUzQyxRQUFBLFlBQVksR0FBRyxlQUFlLENBQUE7QUFDOUIsUUFBQSxRQUFRLEdBQUcsWUFBWSxDQUFBO0FBRXZCLFFBQUEsU0FBUyxHQUFHLFlBQVksQ0FBQTtBQUV4QixRQUFBLGFBQWEsR0FBRyxhQUFLLEdBQUcsVUFBVSxDQUFBO0FBRWxDLFFBQUEsTUFBTSxHQUFHLGNBQWMsQ0FBQTtBQUV2QixRQUFBLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQTtBQUVuQyxRQUFBLHFCQUFxQixHQUFHLHlCQUF5QixDQUFBO0FBRWpELFFBQUEsb0JBQW9CLEdBQUcsd0JBQXdCLENBQUE7QUFFL0MsUUFBQSxtQkFBbUIsR0FBRyx1QkFBdUIsQ0FBQTtBQUU3QyxRQUFBLDBCQUEwQixHQUFHLDhCQUE4QixDQUFBO0FBRTNELFFBQUEsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUE7QUFFN0MsUUFBQSxlQUFlLEdBQUcsbUJBQW1CLENBQUE7QUFDckMsUUFBQSxjQUFjLEdBQUcsd0JBQXdCLENBQUE7QUFDekMsUUFBQSxrQkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQTtBQUN0RCxRQUFBLGVBQWUsR0FBRywrQkFBK0IsQ0FBQTtBQUVqRCxRQUFBLFlBQVksR0FBRyx1QkFBdUIsQ0FBQTtBQUV0QyxRQUFBLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQTtBQUU3QixRQUFBLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQTtBQUUzQyxRQUFBLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQTtBQUV6QyxRQUFBLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQTtBQUUzQyxRQUFBLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQTtBQUV6QyxRQUFBLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQTtBQUVoQyxRQUFBLFlBQVksR0FBRyxPQUFPLENBQUE7QUFDdEIsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFBO0FBRXJCLFFBQUEsVUFBVSxHQUFHLGFBQWEsQ0FBQTtBQUUxQixRQUFBLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQTtBQUVsQyxRQUFBLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQTtBQUVoQyxRQUFBLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQTtBQUNoQyxRQUFBLGlCQUFpQixHQUFHLG1CQUFtQixDQUFBO0FBRXZDLFFBQUEsWUFBWSxHQUFHLGdCQUFnQixDQUFBO0FBQy9CLFFBQUEsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUE7QUFDM0MsUUFBQSxtQkFBbUIsR0FBRyxlQUFlLENBQUE7QUFDckMsUUFBQSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQTtBQUV0QyxRQUFBLGdCQUFnQixHQUFHLG9CQUFvQixDQUFBO0FBQ3ZDLFFBQUEsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUE7QUFDN0MsUUFBQSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQTtBQUU5QyxRQUFBLE9BQU8sR0FBRyxXQUFXLENBQUE7QUFDckIsUUFBQSxjQUFjLEdBQUcsVUFBVSxDQUFBO0FBQzNCLFFBQUEsV0FBVyxHQUFHLGNBQWMsQ0FBQTtBQUU1QixRQUFBLGdCQUFnQixHQUFHLG9CQUFvQixDQUFBO0FBQ3ZDLFFBQUEsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUE7QUFDN0MsUUFBQSxvQkFBb0IsR0FBRyx1QkFBdUIsQ0FBQTtBQUU5QyxRQUFBLG1CQUFtQixHQUFHLHVCQUF1QixDQUFBO0FBQzdDLFFBQUEsMEJBQTBCLEdBQUcsc0JBQXNCLENBQUE7QUFDbkQsUUFBQSx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQTtBQUVwRCxRQUFBLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQTtBQUNyQyxRQUFBLHNCQUFzQixHQUFHLGtCQUFrQixDQUFBO0FBQzNDLFFBQUEsdUJBQXVCLEdBQUcsd0JBQXdCLENBQUE7QUFDbEQsUUFBQSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQTtBQUU1QyxRQUFBLDJCQUEyQixHQUFHLCtCQUErQixDQUFBO0FBQzdELFFBQUEsa0NBQWtDLEdBQUcsOEJBQThCLENBQUE7QUFDbkUsUUFBQSwrQkFBK0IsR0FBRyxrQ0FBa0MsQ0FBQTtBQUVwRSxRQUFBLGtCQUFrQixHQUFHLHNCQUFzQixDQUFBO0FBQzNDLFFBQUEseUJBQXlCLEdBQUcscUJBQXFCLENBQUE7QUFDakQsUUFBQSxzQkFBc0IsR0FBRyx5QkFBeUIsQ0FBQTtBQUVsRCxRQUFBLHVCQUF1QixHQUFHLDJCQUEyQixDQUFBO0FBQ3JELFFBQUEsOEJBQThCLEdBQUcsMEJBQTBCLENBQUE7QUFDM0QsUUFBQSwyQkFBMkIsR0FBRyw4QkFBOEIsQ0FBQTtBQUU1RCxRQUFBLFVBQVUsR0FBRyxjQUFjLENBQUE7QUFDM0IsUUFBQSxpQkFBaUIsR0FBRyxhQUFhLENBQUE7QUFDakMsUUFBQSxjQUFjLEdBQUcsaUJBQWlCLENBQUE7QUFDbEMsUUFBQSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQTtBQUUxQyxRQUFBLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQTtBQUNuQyxRQUFBLHFCQUFxQixHQUFHLGlCQUFpQixDQUFBO0FBQ3pDLFFBQUEsa0JBQWtCLEdBQUcscUJBQXFCLENBQUE7QUFFMUMsUUFBQSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQTtBQUN6QyxRQUFBLFNBQVMsR0FBRyxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRSA9XG4gIHByb2Nlc3MuZW52LkVOVklST05NRU5UICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmNsdWRlcygnczonKSA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OjUwMDBgXG4gICAgOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTFxuXG5leHBvcnQgY29uc3QgQVBJX1ZFUlNJT04gPSAndjEnXG5cbmV4cG9ydCBjb25zdCBBQ0NFUFRfVFJBREUgPSAnL3RyYWRlL2FjY2VwdCdcblxuZXhwb3J0IGNvbnN0IExPR0lOID0gJy91c2VyL2xvZ2luJ1xuZXhwb3J0IGNvbnN0IFVTRVJfQkFTRSA9ICcvdXNlcidcbmV4cG9ydCBjb25zdCBDUkVBVEVfVVNFUiA9ICcvdXNlcidcbmV4cG9ydCBjb25zdCBTRU5EX1ZFUklGSUNBVElPTiA9ICcvdXNlci9zZW5kLXZlcmlmaWNhdGlvbi1tYWlsLydcbmV4cG9ydCBjb25zdCBWRVJJRllfTUFJTCA9ICcvdXNlci92ZXJpZnktbWFpbC8nXG5cbmV4cG9ydCBjb25zdCBTRU5EX09UUCA9ICcvdXNlci9zZW5kLW90cC1tYWlsLydcbmV4cG9ydCBjb25zdCBTRU5EX0ZPUkdFVF9QQVNTV09SRF9WRVJJRklDQVRJT04gPSAnL3VzZXIvc2VuZC1mb3JnZXQtcGFzc3dvcmQtbWFpbC8nXG5leHBvcnQgY29uc3QgVkVSSUZZX0ZPUkdFVF9QQVNTV09SRF9NQUlMID0gJy91c2VyL3ZlcmlmeS1mb3JnZXQtcGFzc3dvcmQnXG5leHBvcnQgY29uc3QgQUxMX1VTRVIgPSAnL3VzZXIvYWxsJ1xuZXhwb3J0IGNvbnN0IEFMTF9VU0VSX1BST0ZJTEUgPSAnL3VzZXItcHJvZmlsZS9hbGwnXG5leHBvcnQgY29uc3QgVVNFUl9QQUNLQUdFID0gJy91c2VyL3BhY2thZ2UvJ1xuZXhwb3J0IGNvbnN0IFVTRVJfUExBTiA9ICcvdXNlci9wbGFuLydcbmV4cG9ydCBjb25zdCBVU0VSX0FVVE9fVFJBREVfUExBTiA9ICcvdXNlci9hdXRvLXRyYWRlLXBsYW4vJ1xuZXhwb3J0IGNvbnN0IFVTRVJfREVUQUlMID0gJy91c2VyL2RldGFpbC8nXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BJTiA9ICcvdXNlci9jaGFuZ2UtcGluLydcbmV4cG9ydCBjb25zdCBDSEFOR0VfUEFTU1dPUkQgPSAnL3VzZXIvY2hhbmdlLXBhc3N3b3JkLydcblxuZXhwb3J0IGNvbnN0IFRSQURFID0gJy90cmFkZS8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQURFID0gJy90cmFkZSdcbmV4cG9ydCBjb25zdCBBTExfVFJBREUgPSAnL3RyYWRlL2FsbCdcbmV4cG9ydCBjb25zdCBBTExfVFJBREVfVFJBTlNBQ1RJT04gPSAnL3RyYWRlLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IERFUE9TSVQgPSAnL2RlcG9zaXQnXG5leHBvcnQgY29uc3QgR0VORVJBVEVfREVQT1NJVCA9ICcvZGVwb3NpdCdcblxuZXhwb3J0IGNvbnN0IFdJVEhEUkFXID0gJy93aXRoZHJhdydcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1dJVEhEUkFXID0gJy93aXRoZHJhdydcblxuZXhwb3J0IGNvbnN0IE5FVFdPUksgPSAnL25ldHdvcmsvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9ORVRXT1JLID0gJy9uZXR3b3JrJ1xuZXhwb3J0IGNvbnN0IEFMTF9ORVRXT1JLID0gJy9uZXR3b3JrL2FsbCdcblxuZXhwb3J0IGNvbnN0IFBBQ0tBR0UgPSAnL3BhY2thZ2UvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9QQUNLQUdFID0gJy9wYWNrYWdlJ1xuZXhwb3J0IGNvbnN0IEFMTF9QQUNLQUdFID0gJy9wYWNrYWdlL2FsbCdcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFDS0FHRV9UUkFOU0FDVElPTiA9ICcvcGFja2FnZS10cmFuc2FjdGlvbidcbmV4cG9ydCBjb25zdCBSRU5FV19QQUNLQUdFX1RSQU5TQUNUSU9OID0gJy9wYWNrYWdlLXRyYW5zYWN0aW9uL3JlbmV3J1xuZXhwb3J0IGNvbnN0IEFMTF9QQUNLQUdFX1RSQU5TQUNUSU9OID0gJy9wYWNrYWdlLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IEVYQ0hBTkdFUiA9ICcvZXhjaGFuZ2VyLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfRVhDSEFOR0VSID0gJy9leGNoYW5nZXInXG5leHBvcnQgY29uc3QgQUxMX0VYQ0hBTkdFUiA9ICcvZXhjaGFuZ2VyL2FsbCdcbmV4cG9ydCBjb25zdCBBTExfRVhDSEFOR0VSX1RSQU5TQUNUSU9OID0gJy9leGNoYW5nZXItdHJhbnNhY3Rpb24vYWxsJ1xuXG5leHBvcnQgY29uc3QgT1BUSU9OID0gJy9vcHRpb24vJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9PUFRJT04gPSAnL29wdGlvbidcbmV4cG9ydCBjb25zdCBBTExfT1BUSU9OID0gJy9vcHRpb24vYWxsJ1xuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAnL3Rva2VuLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVE9LRU4gPSAnL3Rva2VuJ1xuZXhwb3J0IGNvbnN0IEFMTF9UT0tFTiA9ICcvdG9rZW4vYWxsJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVE9LRU4gPSAnL3RyYW5zYWN0aW9uLXRva2VuLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBTlNBQ1RJT05fVE9LRU4gPSAnL3RyYW5zYWN0aW9uLXRva2VuJ1xuZXhwb3J0IGNvbnN0IEFMTF9UUkFOU0FDVElPTl9UT0tFTiA9ICcvdHJhbnNhY3Rpb24tdG9rZW4vYWxsJ1xuXG5leHBvcnQgY29uc3QgU0lHTkFMID0gJy9zaWduYWwvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9TSUdOQUwgPSAnL3NpZ25hbCdcbmV4cG9ydCBjb25zdCBBTExfU0lHTkFMID0gJy9zaWduYWwvYWxsJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uJ1xuZXhwb3J0IGNvbnN0IEFMTF9UUkFOU0FDVElPTiA9ICcvdHJhbnNhY3Rpb24vYWxsJ1xuZXhwb3J0IGNvbnN0IEFMTF9QUk9GSVRfVFJBTlNBQ1RJT04gPSAnL3RyYW5zYWN0aW9uL3Byb2ZpdC9hbGwnXG5leHBvcnQgY29uc3QgQUxMX1NBTEVTX1RSQU5TQUNUSU9OID0gJy9zYWxlcy13YWxsZXQvYWxsJ1xuXG5leHBvcnQgY29uc3QgQUxMX0NPVU5UUklFID0gJy9jb3VudHJpZS9hbGwnXG5leHBvcnQgY29uc3QgQ09VTlRSSUUgPSAnL2NvdW50cmllLydcblxuZXhwb3J0IGNvbnN0IEFMTF9TVEFURSA9ICcvc3RhdGUvYWxsJ1xuXG5leHBvcnQgY29uc3QgVE9LRU5fTkVUV09SSyA9IFRPS0VOICsgJ25ldHdvcmsvJ1xuXG5leHBvcnQgY29uc3QgTE9HR0VEID0gJy91c2VyL2xvZ2dlZCdcblxuZXhwb3J0IGNvbnN0IFdBTExFVF9CQUxBTkNFID0gJy93YWxsZXQvYmFsYW5jZS8nXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0FMTEVUX0JBTEFOQ0UgPSAnL3Byb2ZpdC13YWxsZXQvYmFsYW5jZS8nXG5cbmV4cG9ydCBjb25zdCBTQUxFU19XQUxMRVRfQkFMQU5DRSA9ICcvc2FsZXMtd2FsbGV0L2JhbGFuY2UvJ1xuXG5leHBvcnQgY29uc3QgV0lUSERSQVdBQkxFX0FNT1VOVCA9ICcvd2FsbGV0L3dpdGhkcmF3YWJsZS8nXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0lUSERSQVdBQkxFX0FNT1VOVCA9ICcvcHJvZml0LXdhbGxldC93aXRoZHJhd2FibGUvJ1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQU5TQUNUSU9OX0hBU0ggPSAnL3RyYW5zYWN0aW9uL2hhc2gnXG5cbmV4cG9ydCBjb25zdCBVU0VSX0VYQ0hBTkdFUlMgPSAnL3VzZXIvZXhjaGFuZ2Vycy8nXG5leHBvcnQgY29uc3QgTE9BRF9FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbidcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbi93aXRoZHJhdydcbmV4cG9ydCBjb25zdCBDTEVBUl9FWENIQU5HRVIgPSAnL2V4Y2hhbmdlci10cmFuc2FjdGlvbi9jbGVhci8nXG5cbmV4cG9ydCBjb25zdCBDT05GSVJNX1VTRVIgPSAnL3dhbGxldC9jb25maXJtLXVzZXIvJ1xuXG5leHBvcnQgY29uc3QgVFJBTlNGRVIgPSAnL3dhbGxldC90cmFuc2ZlcidcblxuZXhwb3J0IGNvbnN0IFBST0ZJVF9UUkFOU0ZFUiA9ICcvcHJvZml0LXdhbGxldC90cmFuc2ZlcidcblxuZXhwb3J0IGNvbnN0IFNBTEVTX1RSQU5TRkVSID0gJy9zYWxlcy13YWxsZXQvdHJhbnNmZXInXG5cbmV4cG9ydCBjb25zdCBQUk9GSVRfV0lUSERSQVcgPSAnL3Byb2ZpdC13YWxsZXQvd2l0aGRyYXcnXG5cbmV4cG9ydCBjb25zdCBTQUxFU19XSVRIRFJBVyA9ICcvc2FsZXMtd2FsbGV0L3dpdGhkcmF3J1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT0tFTiA9ICcvdG9rZW4vZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IFBSSVZBVEVfRklMRSA9ICcvcHJmLydcbmV4cG9ydCBjb25zdCBQVUJMSUNfRklMRSA9ICcvcHVmLydcblxuZXhwb3J0IGNvbnN0IFRPUF9HQUlORVIgPSAnL3RvcC1nYWluZXInXG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfT1BUSU9OUyA9ICcvb3B0aW9uL3B1YmxpY3MnXG5cbmV4cG9ydCBjb25zdCBUT1BfRVhDSEFOR0VSID0gJy90b3AtZXhjaGFuZ2VyJ1xuXG5leHBvcnQgY29uc3QgVVNFUl9TRVRUSU5HUyA9ICcvdXNlci1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBBTExfVVNFUl9TRVRUSU5HUyA9ICcvdXNlci1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfU0VUVElORyA9ICcvdXNlci1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBVU0VSX1NFVFRJTkdfUkVTRVQgPSAnL3VzZXItc2V0dGluZy9yZXNldC8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVJfU0VUVElORyA9ICcvdXNlci1zZXR0aW5nJ1xuZXhwb3J0IGNvbnN0IEFMTF9VU0VSX1NFVFRJTkcgPSAnL3VzZXItc2V0dGluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HX0NBVEVHT1JZID0gJy9zZXR0aW5nLWNhdGVnb3J5LydcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0VUVElOR19DQVRFR09SWSA9ICcvc2V0dGluZy1jYXRlZ29yeSdcbmV4cG9ydCBjb25zdCBBTExfU0VUVElOR19DQVRFR09SWSA9ICcvc2V0dGluZy1jYXRlZ29yeS9hbGwnXG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HID0gJy9zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0VUVElORyA9ICcvc2V0dGluZydcbmV4cG9ydCBjb25zdCBBTExfU0VUVElORyA9ICcvc2V0dGluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBSRUZFUlJBTF9FQVJOSU5HID0gJy9yZWZlcnJhbC1lYXJuaW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVGRVJSQUxfRUFSTklORyA9ICcvcmVmZXJyYWwtZWFybmluZydcbmV4cG9ydCBjb25zdCBBTExfUkVGRVJSQUxfRUFSTklORyA9ICcvcmVmZXJyYWwtZWFybmluZy9hbGwnXG5cbmV4cG9ydCBjb25zdCBBVVRPX1RSQURFX0RVUkFUSU9OID0gJy9hdXRvLXRyYWRlLWR1cmF0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9EVVJBVElPTiA9ICcvYXV0by10cmFkZS1kdXJhdGlvbidcbmV4cG9ydCBjb25zdCBBTExfQVVUT19UUkFERV9EVVJBVElPTiA9ICcvYXV0by10cmFkZS1kdXJhdGlvbi9hbGwnXG5cbmV4cG9ydCBjb25zdCBBVVRPX1RSQURFX1BMQU4gPSAnL2F1dG8tdHJhZGUtcGxhbi8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX0FVVE9fVFJBREVfUExBTiA9ICcvYXV0by10cmFkZS1wbGFuJ1xuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfUExBTl9SRU5FV0FMID0gJy9hdXRvLXRyYWRlLXBsYW4vcmVuZXcnXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfUExBTiA9ICcvYXV0by10cmFkZS1wbGFuL2FsbCdcblxuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfUExBTl9UUkFOU0FDVElPTiA9ICcvYXV0by10cmFkZS1wbGFuLXRyYW5zYWN0aW9uLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9QTEFOX1RSQU5TQUNUSU9OID0gJy9hdXRvLXRyYWRlLXBsYW4tdHJhbnNhY3Rpb24nXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfUExBTl9UUkFOU0FDVElPTiA9ICcvYXV0by10cmFkZS1wbGFuLXRyYW5zYWN0aW9uL2FsbCdcblxuZXhwb3J0IGNvbnN0IEFVVE9fVFJBREVfU0VUVElORyA9ICcvYXV0by10cmFkZS1zZXR0aW5nLydcbmV4cG9ydCBjb25zdCBDUkVBVEVfQVVUT19UUkFERV9TRVRUSU5HID0gJy9hdXRvLXRyYWRlLXNldHRpbmcnXG5leHBvcnQgY29uc3QgQUxMX0FVVE9fVFJBREVfU0VUVElORyA9ICcvYXV0by10cmFkZS1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfQVVUT19UUkFERV9TRVRUSU5HID0gJy91c2VyLWF1dG8tdHJhZGUtc2V0dGluZy8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVJfQVVUT19UUkFERV9TRVRUSU5HID0gJy91c2VyLWF1dG8tdHJhZGUtc2V0dGluZydcbmV4cG9ydCBjb25zdCBBTExfVVNFUl9BVVRPX1RSQURFX1NFVFRJTkcgPSAnL3VzZXItYXV0by10cmFkZS1zZXR0aW5nL2FsbCdcblxuZXhwb3J0IGNvbnN0IFRFQU1fU0FMRVMgPSAnL3RlYW0tc2FsZXMvJ1xuZXhwb3J0IGNvbnN0IENSRUFURV9URUFNX1NBTEVTID0gJy90ZWFtLXNhbGVzJ1xuZXhwb3J0IGNvbnN0IEFMTF9URUFNX1NBTEVTID0gJy90ZWFtLXNhbGVzL2FsbCdcbmV4cG9ydCBjb25zdCBURUFNX1NBTEVTX1NVTU1BUlkgPSAnL3RlYW0tc2FsZXMvc3VtbWFyeSdcblxuZXhwb3J0IGNvbnN0IFJFRkVSUkFMX0xFVkVMID0gJy9yZWZlcnJhbC1sZXZlbC8nXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFRkVSUkFMX0xFVkVMID0gJy9yZWZlcnJhbC1sZXZlbCdcbmV4cG9ydCBjb25zdCBBTExfUkVGRVJSQUxfTEVWRUwgPSAnL3JlZmVycmFsLWxldmVsL2FsbCdcblxuZXhwb3J0IGNvbnN0IEJVSUxUSU5fRVhURU5TSU9OID0gJy9idWlsdGluLWV4dGVuc2lvbi8nXG5leHBvcnQgY29uc3QgRVhURU5TSU9OID0gJy9leHRlbnNpb24vJ1xuIl19