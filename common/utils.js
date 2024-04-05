"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultExportFromString = exports.elementToBlob = exports.createDragImage = exports.spreadTo = exports.cssString = exports.removeLastChild = exports.appendChildren = exports.snakeCase = exports.didMonthStartedToday = exports.mongooseModelQueryObjectForTodayDoc = exports.mongooseModelQueryObjectForExpirationDateFromToday = exports.mongooseModelQueryObjectForPassDateByDays = exports.getCutoffDateBySpecifiedDays = exports.getRemainingDays = exports.getDateByAddedDaysToDate = exports.hasDatePassedSpecifiedDays = exports.getDaysDifference = exports.shallowRemoveDuplicates = exports.getDayRegex = exports.getObjectField = exports.sumField = exports.encodeQuery = exports.decodeQuery = exports.escapeRegExp = exports.getDefinedValuesFrom = exports.splitStringIntoChunks = void 0;
const constants_1 = require("./constants");
const NullException_1 = __importDefault(require("./exceptions/NullException"));
function splitStringIntoChunks(str, chunkSize) {
    const chunks = [];
    let i = 0;
    while (i < str.length) {
        chunks.push(str.slice(i, i + chunkSize));
        i += chunkSize;
    }
    return chunks;
}
exports.splitStringIntoChunks = splitStringIntoChunks;
function getDefinedValuesFrom(object) {
    const definedValues = {};
    for (const key in object) {
        const value = object[key];
        if (value != null && value != undefined) {
            definedValues[key] = value;
        }
    }
    return definedValues;
}
exports.getDefinedValuesFrom = getDefinedValuesFrom;
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
function decodeQuery(query) {
    const decodedData = Buffer.from(`${query}`, 'base64').toString('utf-8');
    return JSON.parse(decodedData);
}
exports.decodeQuery = decodeQuery;
function encodeQuery(query) {
    const toStr = JSON.stringify(query);
    const encoded = Buffer.from(toStr).toString('base64');
    return encoded;
}
exports.encodeQuery = encodeQuery;
function sumField(objArr, ...field) {
    if (!objArr || (Array.isArray(objArr) && objArr.length <= 0)) {
        return 0;
    }
    let sum = 0;
    for (const obj of objArr) {
        let theValue = getObjectField(obj, field);
        if (theValue) {
            if (typeof theValue === 'string') {
                theValue = parseInt(theValue);
            }
            if (typeof theValue === 'number') {
                sum += theValue;
            }
        }
    }
    return sum;
}
exports.sumField = sumField;
function getObjectField(obj, fields) {
    const f = [...fields];
    if (f.length <= 0 || !obj) {
        return obj;
    }
    const leftMostFieldName = f.shift();
    if (!leftMostFieldName) {
        return obj;
    }
    return getObjectField(obj[leftMostFieldName], f);
}
exports.getObjectField = getObjectField;
function getDayRegex(dateOrDateString) {
    let date;
    if (dateOrDateString instanceof Date) {
        date = dateOrDateString;
    }
    else if (typeof dateOrDateString === 'string') {
        date = new Date(dateOrDateString);
    }
    else {
        date = new Date();
    }
    /* const dayRegex = `^(${date.getDate()})[-./](0?${
        date.getMonth() + 1
        })[-./](${date.getFullYear()})$`; */
    const dayRegex = `^(${date.getMonth() + 1})[-./](0?${date.getDate()})[-./](${date.getFullYear()})$`;
    return dayRegex;
}
exports.getDayRegex = getDayRegex;
const shallowRemoveDuplicates = (arr) => {
    const unique = new Set();
    const filtered = arr === null || arr === void 0 ? void 0 : arr.filter((item) => {
        if (item && !unique.has(item)) {
            unique.add(item);
            return true;
        }
        return false;
    });
    return filtered;
};
exports.shallowRemoveDuplicates = shallowRemoveDuplicates;
const getDaysDifference = (firstDate, secondDate) => {
    if (firstDate instanceof Date) {
        /* empty */
    }
    else {
        firstDate = new Date(firstDate);
    }
    if (secondDate instanceof Date) {
        /* empty */
    }
    else {
        secondDate = new Date(secondDate);
    }
    const diffInMillis = Math.abs(firstDate.getTime() - secondDate.getTime());
    //conver the time difference in millis to days
    const diffInDays = Math.floor(diffInMillis / constants_1.DAY);
    return diffInDays;
};
exports.getDaysDifference = getDaysDifference;
const hasDatePassedSpecifiedDays = (targetDate, days) => {
    const currentDate = new Date();
    if (targetDate instanceof Date) {
        /* empty */
    }
    else {
        targetDate = new Date(targetDate);
    }
    const targetTime = targetDate.getTime() + days * constants_1.DAY;
    const targetDateTime = new Date(targetTime);
    return targetDateTime <= currentDate;
};
exports.hasDatePassedSpecifiedDays = hasDatePassedSpecifiedDays;
const getDateByAddedDaysToDate = (days, targetDate) => {
    if (!targetDate) {
        targetDate = new Date();
    }
    else if (targetDate instanceof Date) {
        /* empty */
    }
    else {
        targetDate = new Date(targetDate);
    }
    const targetTime = targetDate.getTime() + days * constants_1.DAY;
    const targetDateTime = new Date(targetTime);
    return targetDateTime;
};
exports.getDateByAddedDaysToDate = getDateByAddedDaysToDate;
const getRemainingDays = (previousDate) => {
    const currentDate = new Date();
    if (!(previousDate instanceof Date)) {
        previousDate = new Date(previousDate);
    }
    const diffInMillis = previousDate.getTime() - currentDate.getTime();
    if (diffInMillis <= 0) {
        return 0;
    }
    //convert the time difference in millis to days
    const remainingDays = Math.ceil(diffInMillis / constants_1.DAY);
    return remainingDays;
};
exports.getRemainingDays = getRemainingDays;
const getCutoffDateBySpecifiedDays = (days) => {
    /* const cutoffDate = new Date();
      const cutoffDateT = new Date();
      cutoffDateT.setDate(cutoffDate.getDate() - days);
      return cutoffDateT; */
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getTime() - days * constants_1.DAY);
    return targetDate;
};
exports.getCutoffDateBySpecifiedDays = getCutoffDateBySpecifiedDays;
const mongooseModelQueryObjectForPassDateByDays = (days, path) => {
    const cutoffDate = (0, exports.getCutoffDateBySpecifiedDays)(days);
    const query = { [path]: { $gte: cutoffDate } };
    return query;
};
exports.mongooseModelQueryObjectForPassDateByDays = mongooseModelQueryObjectForPassDateByDays;
const mongooseModelQueryObjectForExpirationDateFromToday = (path) => {
    const expirationDate = new Date();
    const query = { [path]: { $lte: expirationDate } };
    return query;
};
exports.mongooseModelQueryObjectForExpirationDateFromToday = mongooseModelQueryObjectForExpirationDateFromToday;
const mongooseModelQueryObjectForTodayDoc = (path) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to the beginning of the day
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Set the time to the beginning of the next day
    const query = {
        [path]: {
            $gte: today,
            $lt: tomorrow, // Less than tomorrow's date
        },
    };
    return query;
};
exports.mongooseModelQueryObjectForTodayDoc = mongooseModelQueryObjectForTodayDoc;
const didMonthStartedToday = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return today.getTime() === startOfMonth.getTime();
};
exports.didMonthStartedToday = didMonthStartedToday;
const snakeCase = (camelCase) => {
    return camelCase.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).substring(1);
};
exports.snakeCase = snakeCase;
const appendChildren = (parent, ...children) => {
    if (!parent) {
        throw new NullException_1.default();
    }
    for (const child of children) {
        parent.getShadowWrapper().appendChild(child);
    }
    return parent;
};
exports.appendChildren = appendChildren;
const removeLastChild = (parent) => {
    if (!parent) {
        throw new NullException_1.default();
    }
    const removedChild = parent.getShadowWrapper().removeChild(parent.getShadowWrapper().lastChild);
    return removedChild;
};
exports.removeLastChild = removeLastChild;
const cssString = (styleObject) => {
    const definedValues = getDefinedValuesFrom(styleObject);
    const styleKeys = Object.keys(definedValues);
    const styleValues = Object.values(definedValues);
    let styleString = '';
    for (let i = 0; i < styleKeys.length; i++) {
        const styleKey = styleKeys[i];
        const styleValue = styleValues[i];
        styleString = styleString.concat(`${styleKey}: ${styleValue};`, '\n');
    }
    return styleString.trim();
};
exports.cssString = cssString;
const spreadTo = (parentObj, objToSpread) => {
    if (!objToSpread || !parentObj) {
        return parentObj;
    }
    const keys = Object.keys(objToSpread);
    const values = Object.values(objToSpread);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        parentObj[key] = value;
    }
    return parentObj;
};
exports.spreadTo = spreadTo;
function createDragImage(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const rect = element.getBoundingClientRect();
        const offsetX = rect.left - window.pageXOffset;
        const offsetY = rect.top - window.pageYOffset;
        const blob = yield elementToBlob(element);
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        img.width = rect.width;
        img.height = rect.height;
        img.style.position = 'absolute';
        img.style.left = `${offsetX}px`;
        img.style.top = `${offsetY}px`;
        return img;
    });
}
exports.createDragImage = createDragImage;
function elementToBlob(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const svgString = new XMLSerializer().serializeToString(element);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
        return (yield createImageBitmap(svgBlob));
    });
}
exports.elementToBlob = elementToBlob;
const getDefaultExportFromString = (code) => {
    try {
        const defaultExportRegex = /export\s+default\s+(.*?);/s;
        const match = defaultExportRegex.exec(code);
        if (match && match[1]) {
            return match[1].trim();
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error('Error getting default export from code string:', error);
        return null;
    }
};
exports.getDefaultExportFromString = getDefaultExportFromString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy9jb21tb24vdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMkNBQWlDO0FBQ2pDLCtFQUFzRDtBQUd0RCxTQUFnQixxQkFBcUIsQ0FBQyxHQUFXLEVBQUUsU0FBaUI7SUFDbEUsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFBO0lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNULE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxDQUFDLElBQUksU0FBUyxDQUFBO0tBQ2Y7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUM7QUFSRCxzREFRQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLE1BQThCO0lBQ2pFLE1BQU0sYUFBYSxHQUEyQixFQUFFLENBQUE7SUFDaEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7UUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3ZDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7U0FDM0I7S0FDRjtJQUNELE9BQU8sYUFBYSxDQUFBO0FBQ3RCLENBQUM7QUFURCxvREFTQztBQUVELFNBQWdCLFlBQVksQ0FBQyxLQUFhO0lBQ3hDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUNyRCxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsS0FBYTtJQUN2QyxNQUFNLFdBQVcsR0FBRyxNQUFN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a0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFM0MsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQTtTQUNaO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDdEUsT0FBTyxJQUFJLENBQUE7S0FDWjtBQUNILENBQUMsQ0FBQTtBQWRZLFFBQUEsMEJBQTBCLDhCQWN0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IHsgREFZIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbnMvTnVsbEV4Y2VwdGlvbidcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4vbW9kZWxzL0lBbnlPYmplY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFN0cmluZ0ludG9DaHVua3Moc3RyOiBzdHJpbmcsIGNodW5rU2l6ZTogbnVtYmVyKSB7XG4gIGNvbnN0IGNodW5rczogc3RyaW5nW10gPSBbXVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgY2h1bmtzLnB1c2goc3RyLnNsaWNlKGksIGkgKyBjaHVua1NpemUpKVxuICAgIGkgKz0gY2h1bmtTaXplXG4gIH1cbiAgcmV0dXJuIGNodW5rc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmaW5lZFZhbHVlc0Zyb20ob2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIGNvbnN0IGRlZmluZWRWYWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZpbmVkVmFsdWVzW2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmaW5lZFZhbHVlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHZhbHVlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgY29uc3QgZGVjb2RlZERhdGEgPSBCdWZmZXIuZnJvbShgJHtxdWVyeX1gLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0Zi04JylcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZERhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVRdWVyeShxdWVyeTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICBjb25zdCB0b1N0ciA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KVxuICBjb25zdCBlbmNvZGVkID0gQnVmZmVyLmZyb20odG9TdHIpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICByZXR1cm4gZW5jb2RlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtRmllbGQob2JqQXJyOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10sIC4uLmZpZWxkOiBzdHJpbmdbXSkge1xuICBpZiAoIW9iakFyciB8fCAoQXJyYXkuaXNBcnJheShvYmpBcnIpICYmIG9iakFyci5sZW5ndGggPD0gMCkpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGxldCBzdW0gPSAwXG4gIGZvciAoY29uc3Qgb2JqIG9mIG9iakFycikge1xuICAgIGxldCB0aGVWYWx1ZSA9IGdldE9iamVjdEZpZWxkKG9iaiwgZmllbGQpXG4gICAgaWYgKHRoZVZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGVWYWx1ZSA9IHBhcnNlSW50KHRoZVZhbHVlKVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc3VtICs9IHRoZVZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdEZpZWxkKG9iajogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgZmllbGRzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IGYgPSBbLi4uZmllbGRzXVxuICBpZiAoZi5sZW5ndGggPD0gMCB8fCAhb2JqKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG4gIGNvbnN0IGxlZnRNb3N0RmllbGROYW1lID0gZi5zaGlmdCgpXG4gIGlmICghbGVmdE1vc3RGaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cbiAgcmV0dXJuIGdldE9iamVjdEZpZWxkKG9ialtsZWZ0TW9zdEZpZWxkTmFtZV0sIGYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlSZWdleChkYXRlT3JEYXRlU3RyaW5nPzogc3RyaW5nIHwgRGF0ZSkge1xuICBsZXQgZGF0ZTogRGF0ZVxuICBpZiAoZGF0ZU9yRGF0ZVN0cmluZyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBkYXRlID0gZGF0ZU9yRGF0ZVN0cmluZ1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlT3JEYXRlU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlT3JEYXRlU3RyaW5nKVxuICB9IGVsc2Uge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICAvKiBjb25zdCBkYXlSZWdleCA9IGBeKCR7ZGF0ZS5nZXREYXRlKCl9KVstLi9dKDA/JHtcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICAgIH0pWy0uL10oJHtkYXRlLmdldEZ1bGxZZWFyKCl9KSRgOyAqL1xuXG4gIGNvbnN0IGRheVJlZ2V4ID0gYF4oJHtkYXRlLmdldE1vbnRoKCkgKyAxfSlbLS4vXSgwPyR7ZGF0ZS5nZXREYXRlKCl9KVstLi9dKCR7ZGF0ZS5nZXRGdWxsWWVhcigpfSkkYFxuICByZXR1cm4gZGF5UmVnZXhcbn1cblxuZXhwb3J0IGNvbnN0IHNoYWxsb3dSZW1vdmVEdXBsaWNhdGVzID0gKGFycjogYW55W10pOiBhbnlbXSA9PiB7XG4gIGNvbnN0IHVuaXF1ZSA9IG5ldyBTZXQoKVxuICBjb25zdCBmaWx0ZXJlZCA9IGFycj8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0gJiYgIXVuaXF1ZS5oYXMoaXRlbSkpIHtcbiAgICAgIHVuaXF1ZS5hZGQoaXRlbSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldERheXNEaWZmZXJlbmNlID0gKGZpcnN0RGF0ZTogRGF0ZSB8IHN0cmluZywgc2Vjb25kRGF0ZTogRGF0ZSB8IHN0cmluZyk6IG51bWJlciA9PiB7XG4gIGlmIChmaXJzdERhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgLyogZW1wdHkgKi9cbiAgfSBlbHNlIHtcbiAgICBmaXJzdERhdGUgPSBuZXcgRGF0ZShmaXJzdERhdGUpXG4gIH1cblxuICBpZiAoc2Vjb25kRGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAvKiBlbXB0eSAqL1xuICB9IGVsc2Uge1xuICAgIHNlY29uZERhdGUgPSBuZXcgRGF0ZShzZWNvbmREYXRlKVxuICB9XG4gIGNvbnN0IGRpZmZJbk1pbGxpcyA9IE1hdGguYWJzKGZpcnN0RGF0ZS5nZXRUaW1lKCkgLSBzZWNvbmREYXRlLmdldFRpbWUoKSlcbiAgLy9jb252ZXIgdGhlIHRpbWUgZGlmZmVyZW5jZSBpbiBtaWxsaXMgdG8gZGF5c1xuICBjb25zdCBkaWZmSW5EYXlzID0gTWF0aC5mbG9vcihkaWZmSW5NaWxsaXMgLyBEQVkpXG4gIHJldHVybiBkaWZmSW5EYXlzXG59XG5cbmV4cG9ydCBjb25zdCBoYXNEYXRlUGFzc2VkU3BlY2lmaWVkRGF5cyA9ICh0YXJnZXREYXRlOiBEYXRlIHwgc3RyaW5nLCBkYXlzOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gIGlmICh0YXJnZXREYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8qIGVtcHR5ICovXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUpXG4gIH1cbiAgY29uc3QgdGFyZ2V0VGltZSA9IHRhcmdldERhdGUuZ2V0VGltZSgpICsgZGF5cyAqIERBWVxuICBjb25zdCB0YXJnZXREYXRlVGltZSA9IG5ldyBEYXRlKHRhcmdldFRpbWUpXG5cbiAgcmV0dXJuIHRhcmdldERhdGVUaW1lIDw9IGN1cnJlbnREYXRlXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRlQnlBZGRlZERheXNUb0RhdGUgPSAoZGF5czogbnVtYmVyLCB0YXJnZXREYXRlPzogRGF0ZSB8IHN0cmluZyk6IERhdGUgPT4ge1xuICBpZiAoIXRhcmdldERhdGUpIHtcbiAgICB0YXJnZXREYXRlID0gbmV3IERhdGUoKVxuICB9IGVsc2UgaWYgKHRhcmdldERhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgLyogZW1wdHkgKi9cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXREYXRlID0gbmV3IERhdGUodGFyZ2V0RGF0ZSlcbiAgfVxuICBjb25zdCB0YXJnZXRUaW1lID0gdGFyZ2V0RGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogREFZXG4gIGNvbnN0IHRhcmdldERhdGVUaW1lID0gbmV3IERhdGUodGFyZ2V0VGltZSlcblxuICByZXR1cm4gdGFyZ2V0RGF0ZVRpbWVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlbWFpbmluZ0RheXMgPSAocHJldmlvdXNEYXRlOiBEYXRlIHwgc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gIGlmICghKHByZXZpb3VzRGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcHJldmlvdXNEYXRlID0gbmV3IERhdGUocHJldmlvdXNEYXRlKVxuICB9XG4gIGNvbnN0IGRpZmZJbk1pbGxpcyA9IHByZXZpb3VzRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKClcblxuICBpZiAoZGlmZkluTWlsbGlzIDw9IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIC8vY29udmVydCB0aGUgdGltZSBkaWZmZXJlbmNlIGluIG1pbGxpcyB0byBkYXlzXG4gIGNvbnN0IHJlbWFpbmluZ0RheXMgPSBNYXRoLmNlaWwoZGlmZkluTWlsbGlzIC8gREFZKVxuICByZXR1cm4gcmVtYWluaW5nRGF5c1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3V0b2ZmRGF0ZUJ5U3BlY2lmaWVkRGF5cyA9IChkYXlzOiBudW1iZXIpID0+IHtcbiAgLyogY29uc3QgY3V0b2ZmRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3V0b2ZmRGF0ZVQgPSBuZXcgRGF0ZSgpO1xuICAgIGN1dG9mZkRhdGVULnNldERhdGUoY3V0b2ZmRGF0ZS5nZXREYXRlKCkgLSBkYXlzKTtcbiAgICByZXR1cm4gY3V0b2ZmRGF0ZVQ7ICovXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0VGltZSgpIC0gZGF5cyAqIERBWSlcbiAgcmV0dXJuIHRhcmdldERhdGVcbn1cblxuZXhwb3J0IGNvbnN0IG1vbmdvb3NlTW9kZWxRdWVyeU9iamVjdEZvclBhc3NEYXRlQnlEYXlzID0gKGRheXM6IG51bWJlciwgcGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGN1dG9mZkRhdGUgPSBnZXRDdXRvZmZEYXRlQnlTcGVjaWZpZWREYXlzKGRheXMpXG4gIGNvbnN0IHF1ZXJ5ID0geyBbcGF0aF06IHsgJGd0ZTogY3V0b2ZmRGF0ZSB9IH1cbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBjb25zdCBtb25nb29zZU1vZGVsUXVlcnlPYmplY3RGb3JFeHBpcmF0aW9uRGF0ZUZyb21Ub2RheSA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpXG4gIGNvbnN0IHF1ZXJ5ID0geyBbcGF0aF06IHsgJGx0ZTogZXhwaXJhdGlvbkRhdGUgfSB9XG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgY29uc3QgbW9uZ29vc2VNb2RlbFF1ZXJ5T2JqZWN0Rm9yVG9kYXlEb2MgPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKSAvLyBTZXQgdGhlIHRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgZGF5XG5cbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSlcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKSAvLyBTZXQgdGhlIHRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBkYXlcblxuICBjb25zdCBxdWVyeSA9IHtcbiAgICBbcGF0aF06IHtcbiAgICAgICRndGU6IHRvZGF5LCAvLyBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdG9kYXkncyBkYXRlXG4gICAgICAkbHQ6IHRvbW9ycm93LCAvLyBMZXNzIHRoYW4gdG9tb3Jyb3cncyBkYXRlXG4gICAgfSxcbiAgfVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGNvbnN0IGRpZE1vbnRoU3RhcnRlZFRvZGF5ID0gKCkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgMSlcblxuICByZXR1cm4gdG9kYXkuZ2V0VGltZSgpID09PSBzdGFydE9mTW9udGguZ2V0VGltZSgpXG59XG5cbmV4cG9ydCBjb25zdCBzbmFrZUNhc2UgPSAoY2FtZWxDYXNlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gY2FtZWxDYXNlLnJlcGxhY2UoL1tBLVpdL2csIChtYXRjaCkgPT4gYC0ke21hdGNoLnRvTG93ZXJDYXNlKCl9YCkuc3Vic3RyaW5nKDEpXG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQ6IEJhc2VDb21wb25lbnQgfCBudWxsLCAuLi5jaGlsZHJlbjogSFRNTEVsZW1lbnRbXSkgPT4ge1xuICBpZiAoIXBhcmVudCkge1xuICAgIHRocm93IG5ldyBOdWxsRXhjZXB0aW9uKClcbiAgfVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgcGFyZW50LmdldFNoYWRvd1dyYXBwZXIoKS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMYXN0Q2hpbGQgPSAocGFyZW50OiBCYXNlQ29tcG9uZW50IHwgbnVsbCkgPT4ge1xuICBpZiAoIXBhcmVudCkge1xuICAgIHRocm93IG5ldyBOdWxsRXhjZXB0aW9uKClcbiAgfVxuICBjb25zdCByZW1vdmVkQ2hpbGQgPSBwYXJlbnQuZ2V0U2hhZG93V3JhcHBlcigpLnJlbW92ZUNoaWxkKHBhcmVudC5nZXRTaGFkb3dXcmFwcGVyKCkubGFzdENoaWxkIGFzIENoaWxkTm9kZSlcblxuICByZXR1cm4gcmVtb3ZlZENoaWxkXG59XG5cbmV4cG9ydCBjb25zdCBjc3NTdHJpbmcgPSAoc3R5bGVPYmplY3Q6IElBbnlPYmplY3QpID0+IHtcbiAgY29uc3QgZGVmaW5lZFZhbHVlcyA9IGdldERlZmluZWRWYWx1ZXNGcm9tKHN0eWxlT2JqZWN0KVxuICBjb25zdCBzdHlsZUtleXMgPSBPYmplY3Qua2V5cyhkZWZpbmVkVmFsdWVzKVxuICBjb25zdCBzdHlsZVZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGVmaW5lZFZhbHVlcylcbiAgbGV0IHN0eWxlU3RyaW5nID0gJydcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHlsZUtleSA9IHN0eWxlS2V5c1tpXVxuICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBzdHlsZVZhbHVlc1tpXVxuICAgIHN0eWxlU3RyaW5nID0gc3R5bGVTdHJpbmcuY29uY2F0KGAke3N0eWxlS2V5fTogJHtzdHlsZVZhbHVlfTtgLCAnXFxuJylcbiAgfVxuICByZXR1cm4gc3R5bGVTdHJpbmcudHJpbSgpXG59XG5cbmV4cG9ydCBjb25zdCBzcHJlYWRUbyA9IChwYXJlbnRPYmo6IElBbnlPYmplY3QsIG9ialRvU3ByZWFkOiBJQW55T2JqZWN0KSA9PiB7XG4gIGlmICghb2JqVG9TcHJlYWQgfHwgIXBhcmVudE9iaikge1xuICAgIHJldHVybiBwYXJlbnRPYmpcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqVG9TcHJlYWQpXG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqVG9TcHJlYWQpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXVxuICAgIHBhcmVudE9ialtrZXldID0gdmFsdWVcbiAgfVxuICByZXR1cm4gcGFyZW50T2JqXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEcmFnSW1hZ2UoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3Qgb2Zmc2V0WCA9IHJlY3QubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldFxuICBjb25zdCBvZmZzZXRZID0gcmVjdC50b3AgLSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgY29uc3QgYmxvYiA9IGF3YWl0IGVsZW1lbnRUb0Jsb2IoZWxlbWVudClcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICBpbWcuc3JjID0gdXJsXG4gIGltZy53aWR0aCA9IHJlY3Qud2lkdGhcbiAgaW1nLmhlaWdodCA9IHJlY3QuaGVpZ2h0XG4gIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgaW1nLnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YFxuICBpbWcuc3R5bGUudG9wID0gYCR7b2Zmc2V0WX1weGBcbiAgcmV0dXJuIGltZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWxlbWVudFRvQmxvYihlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8QmxvYj4ge1xuICBjb25zdCBzdmdTdHJpbmcgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGVsZW1lbnQpXG4gIGNvbnN0IHN2Z0Jsb2IgPSBuZXcgQmxvYihbc3ZnU3RyaW5nXSwgeyB0eXBlOiAnaW1hZ2Uvc3ZnK3htbCcgfSlcbiAgcmV0dXJuIChhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChzdmdCbG9iKSkgYXMgYW55IGFzIEJsb2Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRFeHBvcnRGcm9tU3RyaW5nID0gKGNvZGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlZmF1bHRFeHBvcnRSZWdleCA9IC9leHBvcnRcXHMrZGVmYXVsdFxccysoLio/KTsvc1xuICAgIGNvbnN0IG1hdGNoID0gZGVmYXVsdEV4cG9ydFJlZ2V4LmV4ZWMoY29kZSlcblxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgcmV0dXJuIG1hdGNoWzFdLnRyaW0oKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGRlZmF1bHQgZXhwb3J0IGZyb20gY29kZSBzdHJpbmc6JywgZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl19