import fetcher from '../common/SharedFetcher';
import { APPCONTAINER, EXTENSION_SCRIPT } from '../common/constants';
import { BUILTIN_EXTENSION, EXTENSION } from '../configs/RestEndpoints';
import { getDefaultExportFromString } from '../common/utils';
import ExtensionId from './ExtensionId';
class ExtensionLoader {
    load(code, appContainer) {
        return this.executor(code, appContainer);
    }
    async getExtension(id, builtin = false) {
        const extId = new ExtensionId(id);
        const res = (await fetcher.fetch(`${builtin ? BUILTIN_EXTENSION : EXTENSION}${extId.id}`));
        if (!res || !res.data || !res.data.status) {
            return null;
        }
        return res.data[EXTENSION_SCRIPT];
    }
    executor(code, appContainer) {
        const fn = new Function(APPCONTAINER, `
        ${code}

        return new ${getDefaultExportFromString(code)}(${APPCONTAINER})
      `);
        return fn(appContainer);
    }
}
export default ExtensionLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4dGVuc2lvbi9FeHRlbnNpb25Mb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUE7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUV2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUM1RCxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUE7QUFJdkMsTUFBTSxlQUFlO0lBQ25CLElBQUksQ0FBQyxJQUFZLEVBQUUsWUFBMkI7UUFDNUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFVLEVBQUUsT0FBTyxHQUFHLEtBQUs7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakMsTUFBTSxHQUFHLEdBQWUsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQWUsQ0FBQTtRQUVwSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU8sUUFBUSxDQUFDLElBQVksRUFBRSxZQUEyQjtRQUN4RCxNQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FDckIsWUFBWSxFQUNaO1VBQ0ksSUFBSTs7cUJBRU8sMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWTtPQUM5RCxDQUNGLENBQUE7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBQ0Y7QUFFRCxlQUFlLGVBQWUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2NvbW1vbi9TaGFyZWRGZXRjaGVyJ1xuaW1wb3J0IElGZXRjaERhdGEgZnJvbSAnLi4vY29tbW9uL21vZGVscy9JRmV0Y2hEYXRhJ1xuaW1wb3J0IHsgQVBQQ09OVEFJTkVSLCBFWFRFTlNJT05fU0NSSVBUIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCB7IEJVSUxUSU5fRVhURU5TSU9OLCBFWFRFTlNJT04gfSBmcm9tICcuLi9jb25maWdzL1Jlc3RFbmRwb2ludHMnXG5pbXBvcnQgSUFwcENvbnRhaW5lciBmcm9tICcuLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvbW9kZWwvSUFwcENvbnRhaW5lcidcbmltcG9ydCB7IGdldERlZmF1bHRFeHBvcnRGcm9tU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJ1xuaW1wb3J0IEV4dGVuc2lvbklkIGZyb20gJy4vRXh0ZW5zaW9uSWQnXG5pbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuL0Jhc2VFeHRlbnNpb24nXG5pbXBvcnQgSUV4dGVuc2lvbiBmcm9tICcuL0lFeHRlbnNpb24nXG5cbmNsYXNzIEV4dGVuc2lvbkxvYWRlciB7XG4gIGxvYWQoY29kZTogc3RyaW5nLCBhcHBDb250YWluZXI6IElBcHBDb250YWluZXIpOiBCYXNlRXh0ZW5zaW9uIHtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRvcihjb2RlLCBhcHBDb250YWluZXIpXG4gIH1cblxuICBhc3luYyBnZXRFeHRlbnNpb24oaWQ6IHN0cmluZywgYnVpbHRpbiA9IGZhbHNlKTogUHJvbWlzZTxJRXh0ZW5zaW9uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGV4dElkID0gbmV3IEV4dGVuc2lvbklkKGlkKVxuICAgIGNvbnN0IHJlczogSUZldGNoRGF0YSA9IChhd2FpdCBmZXRjaGVyLmZldGNoKGAke2J1aWx0aW4gPyBCVUlMVElOX0VYVEVOU0lPTiA6IEVYVEVOU0lPTn0ke2V4dElkLmlkfWApKSBhcyBJRmV0Y2hEYXRhXG5cbiAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEgfHwgIXJlcy5kYXRhLnN0YXR1cykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmRhdGFbRVhURU5TSU9OX1NDUklQVF1cbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0b3IoY29kZTogc3RyaW5nLCBhcHBDb250YWluZXI6IElBcHBDb250YWluZXIpOiBCYXNlRXh0ZW5zaW9uIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgIEFQUENPTlRBSU5FUixcbiAgICAgIGBcbiAgICAgICAgJHtjb2RlfVxuXG4gICAgICAgIHJldHVybiBuZXcgJHtnZXREZWZhdWx0RXhwb3J0RnJvbVN0cmluZyhjb2RlKX0oJHtBUFBDT05UQUlORVJ9KVxuICAgICAgYCxcbiAgICApXG4gICAgcmV0dXJuIGZuKGFwcENvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25Mb2FkZXJcbiJdfQ==