/* eslint-disable require-jsdoc */
import fetcher from './SharedFetcher';
import { FetcherResponseType } from './Fetcher';
export const isActivePath = (routeName) => {
    const path = window.location.pathname;
    const splitted = path.split('/');
    for (let i = 0; i < splitted.length; i++) {
        const segment = splitted[i];
        const routing = routeName.split('/')[1];
        if (segment === routing) {
            return 'active';
        }
    }
    return null;
};
export function objectEquals(obj1, obj2) {
    // Check if both object are strictly equal
    if (obj1 === obj2) {
        return true;
    }
    // Check if either object is null or not
    if (typeof obj1 !== 'object' || obj1 == null || typeof obj2 !== 'object' || obj2 == null) {
        return false;
    }
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Iterate through the keys and recursively check for equality
    for (const key of keys1) {
        if (!keys2.includes(key) || !objectEquals(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
export function encodeQuery(object = {}) {
    return btoa(JSON.stringify(object));
}
export async function getDataUrl(data) {
    return await new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onloadend = () => {
                const uri = reader.result;
                resolve(uri);
            };
        }
        catch (err) {
            reject(err);
        }
    });
}
export async function getDataUrlFromUrl(url) {
    return await new Promise((resolve, reject) => {
        async function runner() {
            try {
                const imo = {
                    url,
                    method: 'GET',
                };
                const idata = (await fetcher.fetch(imo, FetcherResponseType.BLOB));
                const uri = await getDataUrl(idata);
                resolve(uri);
            }
            catch (err) {
                reject(err);
            }
        }
        runner();
    });
}
export const getCurrentUrl = (includeHostName = false) => {
    const url = window.location.href;
    if (includeHostName) {
        return url;
    }
    const noScheme = url?.split('//')[1];
    const pathWithoutShemeAndHostname = noScheme?.split('/')[1];
    return `../${pathWithoutShemeAndHostname}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbWlzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsT0FBTyxPQUFPLE1BQU0saUJBQWlCLENBQUE7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRy9DLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQTtJQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUN2QixPQUFPLFFBQVEsQ0FBQTtTQUNoQjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDLENBQUE7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQWdCLEVBQUUsSUFBZ0I7SUFDN0QsMENBQTBDO0lBQzFDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQTtLQUNaO0lBRUQsd0NBQXdDO0lBQ3hDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDeEYsT0FBTyxLQUFLLENBQUE7S0FD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NUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi9TaGFyZWRGZXRjaGVyJ1xuaW1wb3J0IHsgRmV0Y2hlclJlc3BvbnNlVHlwZSB9IGZyb20gJy4vRmV0Y2hlcidcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4vbW9kZWxzL0lBbnlPYmplY3QnXG5cbmV4cG9ydCBjb25zdCBpc0FjdGl2ZVBhdGggPSAocm91dGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCBzcGxpdHRlZCA9IHBhdGguc3BsaXQoJy8nKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2VnbWVudCA9IHNwbGl0dGVkW2ldXG4gICAgY29uc3Qgcm91dGluZyA9IHJvdXRlTmFtZS5zcGxpdCgnLycpWzFdXG4gICAgaWYgKHNlZ21lbnQgPT09IHJvdXRpbmcpIHtcbiAgICAgIHJldHVybiAnYWN0aXZlJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0RXF1YWxzKG9iajE6IElBbnlPYmplY3QsIG9iajI6IElBbnlPYmplY3QpIHtcbiAgLy8gQ2hlY2sgaWYgYm90aCBvYmplY3QgYXJlIHN0cmljdGx5IGVxdWFsXG4gIGlmIChvYmoxID09PSBvYmoyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGVpdGhlciBvYmplY3QgaXMgbnVsbCBvciBub3RcbiAgaWYgKHR5cGVvZiBvYmoxICE9PSAnb2JqZWN0JyB8fCBvYmoxID09IG51bGwgfHwgdHlwZW9mIG9iajIgIT09ICdvYmplY3QnIHx8IG9iajIgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gR2V0IHRoZSBrZXlzIG9mIGJvdGggb2JqZWN0c1xuICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG9iajEpXG4gIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqMilcblxuICAvLyBDaGVjayBpZiB0aGUgbnVtYmVyIG9mIGtleXMgaXMgdGhlIHNhbWVcbiAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGtleXMgYW5kIHJlY3Vyc2l2ZWx5IGNoZWNrIGZvciBlcXVhbGl0eVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xuICAgIGlmICgha2V5czIuaW5jbHVkZXMoa2V5KSB8fCAhb2JqZWN0RXF1YWxzKG9iajFba2V5XSwgb2JqMltrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVRdWVyeShvYmplY3QgPSB7fSkge1xuICByZXR1cm4gYnRvYShKU09OLnN0cmluZ2lmeShvYmplY3QpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVVybChkYXRhOiBCbG9iKSB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGRhdGEpXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmkgPSByZWFkZXIucmVzdWx0XG4gICAgICAgIHJlc29sdmUodXJpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycilcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhVXJsRnJvbVVybCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bm5lcigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGltbyA9IHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZGF0YTogQmxvYiA9IChhd2FpdCBmZXRjaGVyLmZldGNoKGltbywgRmV0Y2hlclJlc3BvbnNlVHlwZS5CTE9CKSkgYXMgQmxvYlxuICAgICAgICBjb25zdCB1cmkgPSBhd2FpdCBnZXREYXRhVXJsKGlkYXRhKVxuICAgICAgICByZXNvbHZlKHVyaSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgICBydW5uZXIoKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVybCA9IChpbmNsdWRlSG9zdE5hbWUgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICBpZiAoaW5jbHVkZUhvc3ROYW1lKSB7XG4gICAgcmV0dXJuIHVybFxuICB9XG4gIGNvbnN0IG5vU2NoZW1lID0gdXJsPy5zcGxpdCgnLy8nKVsxXVxuICBjb25zdCBwYXRoV2l0aG91dFNoZW1lQW5kSG9zdG5hbWUgPSBub1NjaGVtZT8uc3BsaXQoJy8nKVsxXVxuICByZXR1cm4gYC4uLyR7cGF0aFdpdGhvdXRTaGVtZUFuZEhvc3RuYW1lfWBcbn1cbiJdfQ==