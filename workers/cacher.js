"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dvcmtlcnMvY2FjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQXVEO0FBQ3ZELE1BQU0saUJBQWlCLEdBQUcsaUJBQWlCLENBQUE7QUFFM0MsTUFBTSxXQUFXLEdBQUc7SUFDbEIsR0FBRztJQUNILGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlDQUFpQztDQUNsQyxDQUFBO0FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQzlDLEtBQUssQ0FBQyxTQUFTLENBQ2IsTUFBTTtTQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUN2QixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3hFLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUM1QyxLQUFLLENBQUMsV0FBVyxDQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQzVDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3BGLE9BQU8sYUFBYSxDQUFBO2FBQ3JCO1lBRUQsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBRTVDLE1BQU07aUJBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2lCQUN2QixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDekQsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFFcEUsT0FBTyxhQUFhLENBQUE7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNyQyw4Q0FBOEM7UUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDL0MsS0FBSyxDQUFDLFNBQVMsQ0FDYixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDaEMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixVQUFVO2FBQ1AsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFNBQVMsS0FBSyxpQkFBaUIsQ0FBQTtRQUNqRixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNqQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUNILENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmNvbnN0IENBQ0hFUl9DQUNIRV9OQU1FID0gJ2NhY2hlci1jYWNoZS12MSdcblxuY29uc3QgdXJsc1RvQ2FjaGUgPSBbXG4gICcvJyxcbiAgJy9pbmRleC5odG1sJyxcbiAgJy9tYW5pZmVzdC5qc29uJyxcbiAgJy9mYXZpY29uLmljbycsXG4gIC8vIEFkZCBvdGhlciBhc3NldHMgdG8gY2FjaGUgaGVyZVxuXVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzXG4gICAgICAub3BlbihDQUNIRVJfQ0FDSEVfTkFNRSlcbiAgICAgIC50aGVuKChjYWNoZSkgPT4gY2FjaGUuYWRkQWxsKHVybHNUb0NhY2hlKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoJ0NhY2hlIGluc3RhbGxhdGlvbiBmYWlsZWQ6JywgZXJyb3IpKSxcbiAgKVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChldmVudDogYW55KSA9PiB7XG4gIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmV0Y2goZXZlbnQucmVxdWVzdClcbiAgICAgICAgLnRoZW4oKGZldGNoUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoUmVzcG9uc2UgfHwgZmV0Y2hSZXNwb25zZS5zdGF0dXMgIT09IDIwMCB8fCBmZXRjaFJlc3BvbnNlLnR5cGUgIT09ICdiYXNpYycpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVzcG9uc2UgPSBmZXRjaFJlc3BvbnNlLmNsb25lKClcblxuICAgICAgICAgIGNhY2hlc1xuICAgICAgICAgICAgLm9wZW4oQ0FDSEVSX0NBQ0hFX05BTUUpXG4gICAgICAgICAgICAudGhlbigoY2FjaGUpID0+IGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCBjbG9uZWRSZXNwb25zZSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjYWNoaW5nIHJlc3BvbnNlOicsIGVycm9yKSlcblxuICAgICAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBmYWlsZWQ6JywgZXJyb3IpXG4gICAgICAgICAgLy8gT3B0aW9uYWxseSwgcmV0dXJuIGEgZmFsbGJhY2sgcmVzcG9uc2UgaGVyZVxuICAgICAgICB9KVxuICAgIH0pLFxuICApXG59KVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5rZXlzKCkudGhlbigoY2FjaGVOYW1lcykgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICBjYWNoZU5hbWVzXG4gICAgICAgICAgLmZpbHRlcigoY2FjaGVOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVOYW1lLnN0YXJ0c1dpdGgoJ2NhY2hlci1jYWNoZS0nKSAmJiBjYWNoZU5hbWUgIT09IENBQ0hFUl9DQUNIRV9OQU1FXG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKChjYWNoZU5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSlcbiAgICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9KSxcbiAgKVxufSlcblxuZXhwb3J0IHt9XG4iXX0=