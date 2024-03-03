/* eslint-disable @typescript-eslint/no-explicit-any */
const CACHER_CACHE_NAME = 'cacher-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    // Add other assets to cache here
];
self.addEventListener('install', (event) => {
    event.waitUntil(caches
        .open(CACHER_CACHE_NAME)
        .then((cache) => cache.addAll(urlsToCache))
        .catch((error) => console.error('Cache installation failed:', error)));
});
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response) {
            return response;
        }
        return fetch(event.request)
            .then((fetchResponse) => {
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
            }
            const clonedResponse = fetchResponse.clone();
            caches
                .open(CACHER_CACHE_NAME)
                .then((cache) => cache.put(event.request, clonedResponse))
                .catch((error) => console.error('Error caching response:', error));
            return fetchResponse;
        })
            .catch((error) => {
            console.error('Fetch failed:', error);
            // Optionally, return a fallback response here
        });
    }));
});
self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames
            .filter((cacheName) => {
            return cacheName.startsWith('cacher-cache-') && cacheName !== CACHER_CACHE_NAME;
        })
            .map((cacheName) => {
            return caches.delete(cacheName);
        }));
    }));
});
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dvcmtlcnMvY2FjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxNQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFBO0FBRTNDLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLEdBQUc7SUFDSCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQ0FBaUM7Q0FDbEMsQ0FBQTtBQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUM5QyxLQUFLLENBQUMsU0FBUyxDQUNiLE1BQU07U0FDSCxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUN4RSxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDNUMsS0FBSyxDQUFDLFdBQVcsQ0FDZixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUM1QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN4QixJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUNwRixPQUFPLGFBQWEsQ0FBQTthQUNyQjtZQUVELE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUU1QyxNQUFNO2lCQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7aUJBQ3pELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBRXBFLE9BQU8sYUFBYSxDQUFBO1FBQ3RCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDckMsOENBQThDO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQy9DLEtBQUssQ0FBQyxTQUFTLENBQ2IsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsVUFBVTthQUNQLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxTQUFTLEtBQUssaUJBQWlCLENBQUE7UUFDakYsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDakIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUNMLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5jb25zdCBDQUNIRVJfQ0FDSEVfTkFNRSA9ICdjYWNoZXItY2FjaGUtdjEnXG5cbmNvbnN0IHVybHNUb0NhY2hlID0gW1xuICAnLycsXG4gICcvaW5kZXguaHRtbCcsXG4gICcvbWFuaWZlc3QuanNvbicsXG4gICcvZmF2aWNvbi5pY28nLFxuICAvLyBBZGQgb3RoZXIgYXNzZXRzIHRvIGNhY2hlIGhlcmVcbl1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlc1xuICAgICAgLm9wZW4oQ0FDSEVSX0NBQ0hFX05BTUUpXG4gICAgICAudGhlbigoY2FjaGUpID0+IGNhY2hlLmFkZEFsbCh1cmxzVG9DYWNoZSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdDYWNoZSBpbnN0YWxsYXRpb24gZmFpbGVkOicsIGVycm9yKSksXG4gIClcbn0pXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZldGNoKGV2ZW50LnJlcXVlc3QpXG4gICAgICAgIC50aGVuKChmZXRjaFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlIHx8IGZldGNoUmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgfHwgZmV0Y2hSZXNwb25zZS50eXBlICE9PSAnYmFzaWMnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNsb25lZFJlc3BvbnNlID0gZmV0Y2hSZXNwb25zZS5jbG9uZSgpXG5cbiAgICAgICAgICBjYWNoZXNcbiAgICAgICAgICAgIC5vcGVuKENBQ0hFUl9DQUNIRV9OQU1FKVxuICAgICAgICAgICAgLnRoZW4oKGNhY2hlKSA9PiBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgY2xvbmVkUmVzcG9uc2UpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY2FjaGluZyByZXNwb25zZTonLCBlcnJvcikpXG5cbiAgICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZmFpbGVkOicsIGVycm9yKVxuICAgICAgICAgIC8vIE9wdGlvbmFsbHksIHJldHVybiBhIGZhbGxiYWNrIHJlc3BvbnNlIGhlcmVcbiAgICAgICAgfSlcbiAgICB9KSxcbiAgKVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIChldmVudDogYW55KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oKGNhY2hlTmFtZXMpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgY2FjaGVOYW1lc1xuICAgICAgICAgIC5maWx0ZXIoKGNhY2hlTmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlTmFtZS5zdGFydHNXaXRoKCdjYWNoZXItY2FjaGUtJykgJiYgY2FjaGVOYW1lICE9PSBDQUNIRVJfQ0FDSEVfTkFNRVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoY2FjaGVOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpXG4gICAgICAgICAgfSksXG4gICAgICApXG4gICAgfSksXG4gIClcbn0pXG5cbmV4cG9ydCB7fVxuIl19