"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("../common/md5"));
class ExtensionId {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = this.hash(value);
    }
    constructor(id) {
        this.id = id;
    }
    hash(id) {
        const hash = (0, md5_1.default)(id);
        return hash;
    }
}
exports.default = ExtensionId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy9leHRlbnNpb24vRXh0ZW5zaW9uSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBK0I7QUFHL0IsTUFBTSxXQUFXO0lBR2YsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsWUFBWSxFQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFVO1FBQ2IsTUFBTSxJQUFJLEdBQUcsSUFBQSxhQUFHLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFFcEIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWQ1IGZyb20gJy4uL2NvbW1vbi9tZDUnXG5pbXBvcnQgSUV4dGVuc2lvbklkIGZyb20gJy4vSUV4dGVuc2lvbklkJ1xuXG5jbGFzcyBFeHRlbnNpb25JZCBpbXBsZW1lbnRzIElFeHRlbnNpb25JZCB7XG4gIHByaXZhdGUgX2lkITogc3RyaW5nXG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB0aGlzLmhhc2godmFsdWUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICBoYXNoKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc2ggPSBtZDUoaWQpXG5cbiAgICByZXR1cm4gaGFzaFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuc2lvbklkXG4iXX0=