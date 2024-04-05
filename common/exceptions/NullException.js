"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NullException extends Error {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Null object not accepted');
    }
}
exports.default = NullException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVsbEV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3J1aWcvc3JjL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGFBQWMsU0FBUSxLQUFLO0lBQy9CLFlBQVksT0FBZ0I7UUFDMUIsS0FBSyxDQUFDLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLDBCQUEwQixDQUFDLENBQUE7SUFDOUMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTnVsbEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UgPz8gJ051bGwgb2JqZWN0IG5vdCBhY2NlcHRlZCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEV4Y2VwdGlvblxuIl19