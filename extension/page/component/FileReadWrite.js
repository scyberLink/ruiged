import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import JSZip from 'jszip';
import FileManagement from '../../../common/FileManagement';
const FileReadWrite = () => {
    const [fileContent, setFileContent] = useState('');
    const fileManager = new FileManagement();
    const handleFileChange = async (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const zip = new JSZip();
            await zip.loadAsync(file);
            zip.forEach(async (relativePath, zipEntry) => {
                if (!zipEntry.dir) {
                    const dataType = getDataType(zipEntry.name);
                    const content = await zip.file(zipEntry.name)?.async(dataType);
                    if (content) {
                        const name = prepareName(zipEntry.name);
                        fileManager.saveFile(name, content, getExtension(zipEntry.name));
                    }
                }
            });
            setFileContent('Installed');
        }
    };
    const getExtension = (name) => {
        return name.split('.').pop()?.toLowerCase() || '';
    };
    const getDataType = (name) => {
        const fileExtension = getExtension(name);
        let dataType;
        // Determine data type based on file extension
        switch (fileExtension) {
            case 'txt':
            case 'html':
            case 'css':
            case 'js':
            case 'json':
            case 'svg':
                dataType = 'string'; // Text data
                break;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'pdf':
                dataType = 'blob'; // Image data
                break;
            default:
                dataType = 'string';
                break;
        }
        return dataType;
    };
    const prepareName = (name) => {
        const extension = getExtension(name);
        if (!extension || extension !== 'js') {
            return name;
        }
        const splitted = name.split(`.${extension}`);
        splitted?.pop();
        return splitted?.pop() || name;
    };
    return (_jsxs("div", { children: [_jsx("input", { type: "file", onChange: handleFileChange }), _jsxs("div", { children: [_jsx("h2", { children: "File Content" }), _jsx("pre", { children: fileContent })] })] }));
};
export default FileReadWrite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlbnNpb24vcGFnZS9jb21wb25lbnQvRmlsZVJlYWRXcml0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDdkMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQ3pCLE9BQU8sY0FBYyxNQUFNLGdDQUFnQyxDQUFBO0FBSTNELE1BQU0sYUFBYSxHQUFhLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBUyxFQUFFLENBQUMsQ0FBQTtJQUMxRCxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFBO0lBRXhDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLEtBQTBDLEVBQUUsRUFBRTtRQUM1RSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4RCxJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7WUFDdkIsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQ2pCLE1BQU0sUUFBUSxHQUFhLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3JELE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUM5RCxJQUFJLE9BQU8sRUFBRTt3QkFDWCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUN2QyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO3FCQUNqRTtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFBO0lBQ25ELENBQUMsQ0FBQTtJQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkMsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLElBQUksUUFBZ0IsQ0FBQTtRQUVwQiw4Q0FBOEM7UUFDOUMsUUFBUSxhQUFhLEVBQUU7WUFDckIsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssS0FBSztnQkFDUixRQUFRLEdBQUcsUUFBUSxDQUFBLENBQUMsWUFBWTtnQkFDaEMsTUFBSztZQUVQLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNSLFFBQVEsR0FBRyxNQUFNLENBQUEsQ0FBQyxhQUFhO2dCQUMvQixNQUFLO1lBRVA7Z0JBQ0UsUUFBUSxHQUFHLFFBQVEsQ0FBQTtnQkFDbkIsTUFBSztTQUNSO1FBRUQsT0FBTyxRQUFvQixDQUFBO0lBQzdCLENBQUMsQ0FBQTtJQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkMsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDNUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ2YsT0FBTyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFBO0lBQ2hDLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDTCwwQkFDRSxnQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsR0FBSSxFQUNqRCwwQkFDRSx3Q0FBcUIsRUFDckIsd0JBQU0sV0FBVyxHQUFPLElBQ3BCLElBQ0YsQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCdcbmltcG9ydCBGaWxlTWFuYWdlbWVudCBmcm9tICcuLi8uLi8uLi9jb21tb24vRmlsZU1hbmFnZW1lbnQnXG5cbnR5cGUgRGF0YVR5cGUgPSAnc3RyaW5nJyB8ICdibG9iJ1xuXG5jb25zdCBGaWxlUmVhZFdyaXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuICAgICAgYXdhaXQgemlwLmxvYWRBc3luYyhmaWxlKVxuICAgICAgemlwLmZvckVhY2goYXN5bmMgKHJlbGF0aXZlUGF0aCwgemlwRW50cnkpID0+IHtcbiAgICAgICAgaWYgKCF6aXBFbnRyeS5kaXIpIHtcbiAgICAgICAgICBjb25zdCBkYXRhVHlwZTogRGF0YVR5cGUgPSBnZXREYXRhVHlwZSh6aXBFbnRyeS5uYW1lKVxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB6aXAuZmlsZSh6aXBFbnRyeS5uYW1lKT8uYXN5bmMoZGF0YVR5cGUpXG4gICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcmVwYXJlTmFtZSh6aXBFbnRyeS5uYW1lKVxuICAgICAgICAgICAgZmlsZU1hbmFnZXIuc2F2ZUZpbGUobmFtZSwgY29udGVudCwgZ2V0RXh0ZW5zaW9uKHppcEVudHJ5Lm5hbWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNldEZpbGVDb250ZW50KCdJbnN0YWxsZWQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEV4dGVuc2lvbiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpIHx8ICcnXG4gIH1cblxuICBjb25zdCBnZXREYXRhVHlwZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpXG4gICAgbGV0IGRhdGFUeXBlOiBzdHJpbmdcblxuICAgIC8vIERldGVybWluZSBkYXRhIHR5cGUgYmFzZWQgb24gZmlsZSBleHRlbnNpb25cbiAgICBzd2l0Y2ggKGZpbGVFeHRlbnNpb24pIHtcbiAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICBjYXNlICdodG1sJzpcbiAgICAgIGNhc2UgJ2Nzcyc6XG4gICAgICBjYXNlICdqcyc6XG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZycgLy8gVGV4dCBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnYmxvYicgLy8gSW1hZ2UgZGF0YVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkYXRhVHlwZSA9ICdzdHJpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFUeXBlIGFzIERhdGFUeXBlXG4gIH1cblxuICBjb25zdCBwcmVwYXJlTmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBnZXRFeHRlbnNpb24obmFtZSlcbiAgICBpZiAoIWV4dGVuc2lvbiB8fCBleHRlbnNpb24gIT09ICdqcycpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICAgIGNvbnN0IHNwbGl0dGVkID0gbmFtZS5zcGxpdChgLiR7ZXh0ZW5zaW9ufWApXG4gICAgc3BsaXR0ZWQ/LnBvcCgpXG4gICAgcmV0dXJuIHNwbGl0dGVkPy5wb3AoKSB8fCBuYW1lXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5GaWxlIENvbnRlbnQ8L2gyPlxuICAgICAgICA8cHJlPntmaWxlQ29udGVudH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVSZWFkV3JpdGVcbiJdfQ==