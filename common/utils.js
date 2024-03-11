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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJDQUFpQztBQUNqQywrRUFBc0Q7QUFHdEQsU0FBZ0IscUJBQXFCLENBQUMsR0FBVyxFQUFFLFNBQWlCO0lBQ2xFLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQTtJQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDeEMsQ0FBQyxJQUFJLFNBQVMsQ0FBQTtLQUNmO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBUkQsc0RBUUM7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxNQUE4QjtJQUNqRSxNQUFNLGFBQWEsR0FBMkIsRUFBRSxDQUFBO0lBQ2hELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN2QyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO1NBQzNCO0tBQ0Y7SUFDRCxPQUFPLGFBQWEsQ0FBQTtBQUN0QixDQUFDO0FBVEQsb0RBU0M7QUFFRCxTQUFnQixZQUFZLENBQUMsS0FBYTtJQUN4QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDckQsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEtBQWE7SUFDdkMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFD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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTNDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUN2QjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUE7U0FDWjtLQUNGO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3RFLE9BQU8sSUFBSSxDQUFBO0tBQ1o7QUFDSCxDQUFDLENBQUE7QUFkWSxRQUFBLDBCQUEwQiw4QkFjdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCB7IERBWSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IE51bGxFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuL21vZGVscy9JQW55T2JqZWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRTdHJpbmdJbnRvQ2h1bmtzKHN0cjogc3RyaW5nLCBjaHVua1NpemU6IG51bWJlcikge1xuICBjb25zdCBjaHVua3M6IHN0cmluZ1tdID0gW11cbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgIGNodW5rcy5wdXNoKHN0ci5zbGljZShpLCBpICsgY2h1bmtTaXplKSlcbiAgICBpICs9IGNodW5rU2l6ZVxuICB9XG4gIHJldHVybiBjaHVua3Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmluZWRWYWx1ZXNGcm9tKG9iamVjdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICBjb25zdCBkZWZpbmVkVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XVxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgZGVmaW5lZFZhbHVlc1trZXldID0gdmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZmluZWRWYWx1ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCh2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIGNvbnN0IGRlY29kZWREYXRhID0gQnVmZmVyLmZyb20oYCR7cXVlcnl9YCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGYtOCcpXG4gIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWREYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUXVlcnkocXVlcnk6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgY29uc3QgdG9TdHIgPSBKU09OLnN0cmluZ2lmeShxdWVyeSlcbiAgY29uc3QgZW5jb2RlZCA9IEJ1ZmZlci5mcm9tKHRvU3RyKS50b1N0cmluZygnYmFzZTY0JylcbiAgcmV0dXJuIGVuY29kZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUZpZWxkKG9iakFycjogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdLCAuLi5maWVsZDogc3RyaW5nW10pIHtcbiAgaWYgKCFvYmpBcnIgfHwgKEFycmF5LmlzQXJyYXkob2JqQXJyKSAmJiBvYmpBcnIubGVuZ3RoIDw9IDApKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBsZXQgc3VtID0gMFxuICBmb3IgKGNvbnN0IG9iaiBvZiBvYmpBcnIpIHtcbiAgICBsZXQgdGhlVmFsdWUgPSBnZXRPYmplY3RGaWVsZChvYmosIGZpZWxkKVxuICAgIGlmICh0aGVWYWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhlVmFsdWUgPSBwYXJzZUludCh0aGVWYWx1ZSlcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHN1bSArPSB0aGVWYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RGaWVsZChvYmo6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGZpZWxkczogc3RyaW5nW10pOiBhbnkge1xuICBjb25zdCBmID0gWy4uLmZpZWxkc11cbiAgaWYgKGYubGVuZ3RoIDw9IDAgfHwgIW9iaikge1xuICAgIHJldHVybiBvYmpcbiAgfVxuICBjb25zdCBsZWZ0TW9zdEZpZWxkTmFtZSA9IGYuc2hpZnQoKVxuICBpZiAoIWxlZnRNb3N0RmllbGROYW1lKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG4gIHJldHVybiBnZXRPYmplY3RGaWVsZChvYmpbbGVmdE1vc3RGaWVsZE5hbWVdLCBmKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5UmVnZXgoZGF0ZU9yRGF0ZVN0cmluZz86IHN0cmluZyB8IERhdGUpIHtcbiAgbGV0IGRhdGU6IERhdGVcbiAgaWYgKGRhdGVPckRhdGVTdHJpbmcgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgZGF0ZSA9IGRhdGVPckRhdGVTdHJpbmdcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZU9yRGF0ZVN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZU9yRGF0ZVN0cmluZylcbiAgfSBlbHNlIHtcbiAgICBkYXRlID0gbmV3IERhdGUoKVxuICB9XG5cbiAgLyogY29uc3QgZGF5UmVnZXggPSBgXigke2RhdGUuZ2V0RGF0ZSgpfSlbLS4vXSgwPyR7XG4gICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICB9KVstLi9dKCR7ZGF0ZS5nZXRGdWxsWWVhcigpfSkkYDsgKi9cblxuICBjb25zdCBkYXlSZWdleCA9IGBeKCR7ZGF0ZS5nZXRNb250aCgpICsgMX0pWy0uL10oMD8ke2RhdGUuZ2V0RGF0ZSgpfSlbLS4vXSgke2RhdGUuZ2V0RnVsbFllYXIoKX0pJGBcbiAgcmV0dXJuIGRheVJlZ2V4XG59XG5cbmV4cG9ydCBjb25zdCBzaGFsbG93UmVtb3ZlRHVwbGljYXRlcyA9IChhcnI6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCB1bmlxdWUgPSBuZXcgU2V0KClcbiAgY29uc3QgZmlsdGVyZWQgPSBhcnI/LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtICYmICF1bmlxdWUuaGFzKGl0ZW0pKSB7XG4gICAgICB1bmlxdWUuYWRkKGl0ZW0pXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXlzRGlmZmVyZW5jZSA9IChmaXJzdERhdGU6IERhdGUgfCBzdHJpbmcsIHNlY29uZERhdGU6IERhdGUgfCBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICBpZiAoZmlyc3REYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8qIGVtcHR5ICovXG4gIH0gZWxzZSB7XG4gICAgZmlyc3REYXRlID0gbmV3IERhdGUoZmlyc3REYXRlKVxuICB9XG5cbiAgaWYgKHNlY29uZERhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgLyogZW1wdHkgKi9cbiAgfSBlbHNlIHtcbiAgICBzZWNvbmREYXRlID0gbmV3IERhdGUoc2Vjb25kRGF0ZSlcbiAgfVxuICBjb25zdCBkaWZmSW5NaWxsaXMgPSBNYXRoLmFicyhmaXJzdERhdGUuZ2V0VGltZSgpIC0gc2Vjb25kRGF0ZS5nZXRUaW1lKCkpXG4gIC8vY29udmVyIHRoZSB0aW1lIGRpZmZlcmVuY2UgaW4gbWlsbGlzIHRvIGRheXNcbiAgY29uc3QgZGlmZkluRGF5cyA9IE1hdGguZmxvb3IoZGlmZkluTWlsbGlzIC8gREFZKVxuICByZXR1cm4gZGlmZkluRGF5c1xufVxuXG5leHBvcnQgY29uc3QgaGFzRGF0ZVBhc3NlZFNwZWNpZmllZERheXMgPSAodGFyZ2V0RGF0ZTogRGF0ZSB8IHN0cmluZywgZGF5czogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICBpZiAodGFyZ2V0RGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAvKiBlbXB0eSAqL1xuICB9IGVsc2Uge1xuICAgIHRhcmdldERhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlKVxuICB9XG4gIGNvbnN0IHRhcmdldFRpbWUgPSB0YXJnZXREYXRlLmdldFRpbWUoKSArIGRheXMgKiBEQVlcbiAgY29uc3QgdGFyZ2V0RGF0ZVRpbWUgPSBuZXcgRGF0ZSh0YXJnZXRUaW1lKVxuXG4gIHJldHVybiB0YXJnZXREYXRlVGltZSA8PSBjdXJyZW50RGF0ZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0ZUJ5QWRkZWREYXlzVG9EYXRlID0gKGRheXM6IG51bWJlciwgdGFyZ2V0RGF0ZT86IERhdGUgfCBzdHJpbmcpOiBEYXRlID0+IHtcbiAgaWYgKCF0YXJnZXREYXRlKSB7XG4gICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKClcbiAgfSBlbHNlIGlmICh0YXJnZXREYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8qIGVtcHR5ICovXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUpXG4gIH1cbiAgY29uc3QgdGFyZ2V0VGltZSA9IHRhcmdldERhdGUuZ2V0VGltZSgpICsgZGF5cyAqIERBWVxuICBjb25zdCB0YXJnZXREYXRlVGltZSA9IG5ldyBEYXRlKHRhcmdldFRpbWUpXG5cbiAgcmV0dXJuIHRhcmdldERhdGVUaW1lXG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZW1haW5pbmdEYXlzID0gKHByZXZpb3VzRGF0ZTogRGF0ZSB8IHN0cmluZyk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICBpZiAoIShwcmV2aW91c0RhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHByZXZpb3VzRGF0ZSA9IG5ldyBEYXRlKHByZXZpb3VzRGF0ZSlcbiAgfVxuICBjb25zdCBkaWZmSW5NaWxsaXMgPSBwcmV2aW91c0RhdGUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpXG5cbiAgaWYgKGRpZmZJbk1pbGxpcyA8PSAwKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICAvL2NvbnZlcnQgdGhlIHRpbWUgZGlmZmVyZW5jZSBpbiBtaWxsaXMgdG8gZGF5c1xuICBjb25zdCByZW1haW5pbmdEYXlzID0gTWF0aC5jZWlsKGRpZmZJbk1pbGxpcyAvIERBWSlcbiAgcmV0dXJuIHJlbWFpbmluZ0RheXNcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1dG9mZkRhdGVCeVNwZWNpZmllZERheXMgPSAoZGF5czogbnVtYmVyKSA9PiB7XG4gIC8qIGNvbnN0IGN1dG9mZkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1dG9mZkRhdGVUID0gbmV3IERhdGUoKTtcbiAgICBjdXRvZmZEYXRlVC5zZXREYXRlKGN1dG9mZkRhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4gICAgcmV0dXJuIGN1dG9mZkRhdGVUOyAqL1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIGRheXMgKiBEQVkpXG4gIHJldHVybiB0YXJnZXREYXRlXG59XG5cbmV4cG9ydCBjb25zdCBtb25nb29zZU1vZGVsUXVlcnlPYmplY3RGb3JQYXNzRGF0ZUJ5RGF5cyA9IChkYXlzOiBudW1iZXIsIHBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBjdXRvZmZEYXRlID0gZ2V0Q3V0b2ZmRGF0ZUJ5U3BlY2lmaWVkRGF5cyhkYXlzKVxuICBjb25zdCBxdWVyeSA9IHsgW3BhdGhdOiB7ICRndGU6IGN1dG9mZkRhdGUgfSB9XG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgY29uc3QgbW9uZ29vc2VNb2RlbFF1ZXJ5T2JqZWN0Rm9yRXhwaXJhdGlvbkRhdGVGcm9tVG9kYXkgPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBxdWVyeSA9IHsgW3BhdGhdOiB7ICRsdGU6IGV4cGlyYXRpb25EYXRlIH0gfVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGNvbnN0IG1vbmdvb3NlTW9kZWxRdWVyeU9iamVjdEZvclRvZGF5RG9jID0gKHBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLy8gU2V0IHRoZSB0aW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGRheVxuXG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpXG4gIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSkgLy8gU2V0IHRoZSB0aW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5leHQgZGF5XG5cbiAgY29uc3QgcXVlcnkgPSB7XG4gICAgW3BhdGhdOiB7XG4gICAgICAkZ3RlOiB0b2RheSwgLy8gR3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRvZGF5J3MgZGF0ZVxuICAgICAgJGx0OiB0b21vcnJvdywgLy8gTGVzcyB0aGFuIHRvbW9ycm93J3MgZGF0ZVxuICAgIH0sXG4gIH1cbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBjb25zdCBkaWRNb250aFN0YXJ0ZWRUb2RheSA9ICgpID0+IHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIGNvbnN0IHN0YXJ0T2ZNb250aCA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIDEpXG5cbiAgcmV0dXJuIHRvZGF5LmdldFRpbWUoKSA9PT0gc3RhcnRPZk1vbnRoLmdldFRpbWUoKVxufVxuXG5leHBvcnQgY29uc3Qgc25ha2VDYXNlID0gKGNhbWVsQ2FzZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGNhbWVsQ2FzZS5yZXBsYWNlKC9bQS1aXS9nLCAobWF0Y2gpID0+IGAtJHttYXRjaC50b0xvd2VyQ2FzZSgpfWApLnN1YnN0cmluZygxKVxufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50OiBCYXNlQ29tcG9uZW50IHwgbnVsbCwgLi4uY2hpbGRyZW46IEhUTUxFbGVtZW50W10pID0+IHtcbiAgaWYgKCFwYXJlbnQpIHtcbiAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbigpXG4gIH1cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgIHBhcmVudC5nZXRTaGFkb3dXcmFwcGVyKCkuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGFzdENoaWxkID0gKHBhcmVudDogQmFzZUNvbXBvbmVudCB8IG51bGwpID0+IHtcbiAgaWYgKCFwYXJlbnQpIHtcbiAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbigpXG4gIH1cbiAgY29uc3QgcmVtb3ZlZENoaWxkID0gcGFyZW50LmdldFNoYWRvd1dyYXBwZXIoKS5yZW1vdmVDaGlsZChwYXJlbnQuZ2V0U2hhZG93V3JhcHBlcigpLmxhc3RDaGlsZCBhcyBDaGlsZE5vZGUpXG5cbiAgcmV0dXJuIHJlbW92ZWRDaGlsZFxufVxuXG5leHBvcnQgY29uc3QgY3NzU3RyaW5nID0gKHN0eWxlT2JqZWN0OiBJQW55T2JqZWN0KSA9PiB7XG4gIGNvbnN0IGRlZmluZWRWYWx1ZXMgPSBnZXREZWZpbmVkVmFsdWVzRnJvbShzdHlsZU9iamVjdClcbiAgY29uc3Qgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoZGVmaW5lZFZhbHVlcylcbiAgY29uc3Qgc3R5bGVWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRlZmluZWRWYWx1ZXMpXG4gIGxldCBzdHlsZVN0cmluZyA9ICcnXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGVLZXkgPSBzdHlsZUtleXNbaV1cbiAgICBjb25zdCBzdHlsZVZhbHVlID0gc3R5bGVWYWx1ZXNbaV1cbiAgICBzdHlsZVN0cmluZyA9IHN0eWxlU3RyaW5nLmNvbmNhdChgJHtzdHlsZUtleX06ICR7c3R5bGVWYWx1ZX07YCwgJ1xcbicpXG4gIH1cbiAgcmV0dXJuIHN0eWxlU3RyaW5nLnRyaW0oKVxufVxuXG5leHBvcnQgY29uc3Qgc3ByZWFkVG8gPSAocGFyZW50T2JqOiBJQW55T2JqZWN0LCBvYmpUb1NwcmVhZDogSUFueU9iamVjdCkgPT4ge1xuICBpZiAoIW9ialRvU3ByZWFkIHx8ICFwYXJlbnRPYmopIHtcbiAgICByZXR1cm4gcGFyZW50T2JqXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9ialRvU3ByZWFkKVxuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9ialRvU3ByZWFkKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaV1cbiAgICBwYXJlbnRPYmpba2V5XSA9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHBhcmVudE9ialxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRHJhZ0ltYWdlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IG9mZnNldFggPSByZWN0LmxlZnQgLSB3aW5kb3cucGFnZVhPZmZzZXRcbiAgY29uc3Qgb2Zmc2V0WSA9IHJlY3QudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gIGNvbnN0IGJsb2IgPSBhd2FpdCBlbGVtZW50VG9CbG9iKGVsZW1lbnQpXG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgaW1nLnNyYyA9IHVybFxuICBpbWcud2lkdGggPSByZWN0LndpZHRoXG4gIGltZy5oZWlnaHQgPSByZWN0LmhlaWdodFxuICBpbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIGltZy5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGBcbiAgaW1nLnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgXG4gIHJldHVybiBpbWdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVsZW1lbnRUb0Jsb2IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPEJsb2I+IHtcbiAgY29uc3Qgc3ZnU3RyaW5nID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhlbGVtZW50KVxuICBjb25zdCBzdmdCbG9iID0gbmV3IEJsb2IoW3N2Z1N0cmluZ10sIHsgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnIH0pXG4gIHJldHVybiAoYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoc3ZnQmxvYikpIGFzIGFueSBhcyBCbG9iXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RXhwb3J0RnJvbVN0cmluZyA9IChjb2RlOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWZhdWx0RXhwb3J0UmVnZXggPSAvZXhwb3J0XFxzK2RlZmF1bHRcXHMrKC4qPyk7L3NcbiAgICBjb25zdCBtYXRjaCA9IGRlZmF1bHRFeHBvcnRSZWdleC5leGVjKGNvZGUpXG5cbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXS50cmltKClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBkZWZhdWx0IGV4cG9ydCBmcm9tIGNvZGUgc3RyaW5nOicsIGVycm9yKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiJdfQ==