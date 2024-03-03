import ExtensionPool from './ExtensionPool';
class ExtensionDevelopment {
    extensionPool;
    constructor() {
        this.extensionPool = new ExtensionPool();
    }
    install(extension) {
        this.extensionPool.manualInstall({
            id: extension.getId(extension),
            name: `${extension.extensionAuthor}::Dev. mode`,
            author: extension.extensionAuthor,
            code: extension.toString(),
            rating: 0,
            downloads: 0,
            builtin: false,
            version: '0',
        });
    }
}
export default ExtensionDevelopment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uRGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5zaW9uL0V4dGVuc2lvbkRldmVsb3BtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sYUFBYSxNQUFNLGlCQUFpQixDQUFBO0FBRTNDLE1BQU0sb0JBQW9CO0lBQ3hCLGFBQWEsQ0FBZTtJQUU1QjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQStCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQy9CLEVBQUUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUM5QixJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsZUFBZSxhQUFhO1lBQy9DLE1BQU0sRUFBRSxTQUFTLENBQUMsZUFBZTtZQUNqQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUMxQixNQUFNLEVBQUUsQ0FBQztZQUNULFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQUVELGVBQWUsb0JBQW9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuL0Jhc2VFeHRlbnNpb24nXG5pbXBvcnQgRXh0ZW5zaW9uUG9vbCBmcm9tICcuL0V4dGVuc2lvblBvb2wnXG5cbmNsYXNzIEV4dGVuc2lvbkRldmVsb3BtZW50IHtcbiAgZXh0ZW5zaW9uUG9vbDogRXh0ZW5zaW9uUG9vbFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uUG9vbCA9IG5ldyBFeHRlbnNpb25Qb29sKClcbiAgfVxuXG4gIGluc3RhbGwoZXh0ZW5zaW9uOiB0eXBlb2YgQmFzZUV4dGVuc2lvbikge1xuICAgIHRoaXMuZXh0ZW5zaW9uUG9vbC5tYW51YWxJbnN0YWxsKHtcbiAgICAgIGlkOiBleHRlbnNpb24uZ2V0SWQoZXh0ZW5zaW9uKSxcbiAgICAgIG5hbWU6IGAke2V4dGVuc2lvbi5leHRlbnNpb25BdXRob3J9OjpEZXYuIG1vZGVgLFxuICAgICAgYXV0aG9yOiBleHRlbnNpb24uZXh0ZW5zaW9uQXV0aG9yLFxuICAgICAgY29kZTogZXh0ZW5zaW9uLnRvU3RyaW5nKCksXG4gICAgICByYXRpbmc6IDAsXG4gICAgICBkb3dubG9hZHM6IDAsXG4gICAgICBidWlsdGluOiBmYWxzZSxcbiAgICAgIHZlcnNpb246ICcwJyxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuc2lvbkRldmVsb3BtZW50XG4iXX0=