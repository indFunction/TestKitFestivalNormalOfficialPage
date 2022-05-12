const folderId = '1qy28KByEo8EPBpuboQ00jbFoxkinH-Rl';
const fileName = 'data.json';

function doGet() {
    const res = getJsonByFile(true, true);

    return res;
}

function getJsonByFile(returnOutputObject, returnJson) {
    const folder = DriveApp.getFolderById(folderId);
    const fileId = folder.getFilesByName(fileName).next();
    const content = fileId.getBlob().getDataAsString('UTF-8');

    if (returnOutputObject) {
        let out = ContentService.createTextOutput();
        out.setMimeType(returnJson ? ContentService.MimeType.JSON : ContentService.MimeType.TEXT);
        out.setContent(content);

        return out;
    } else {
        return returnJson ? JSON.parse(content) : content;
    }
}
