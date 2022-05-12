const folderId = '1qy28KByEo8EPBpuboQ00jbFoxkinH-Rl';
const fileName = 'data.json';

function createJsonFile() {
    const folder = DriveApp.getFolderById(folderId);
    const blob = getBlobByData();

    folder.createFile(blob);
}

function updateJsonFile() {
    const folder = DriveApp.getFolderById(folderId);
    const fileId = folder.getFilesByName(fileName).next().getId();
    const blob = getBlobByData();
    const resource = { uploadType: 'media' };

    Drive.Files.update(resource, fileId, blob);
}

function getBlobByData() {
    return Utilities.newBlob('', 'text/plain', fileName).setDataFromString(getData(), 'UTF-8');
}

function getData() {
    const sheet = SpreadsheetApp.getActiveSheet();

    const sheetMaxRow = sheet.getLastRow();
    const sheetMaxColumn = sheet.getLastColumn();

    const data = {
        update: getStringDate(sheet.getRange(sheetMaxRow, 1).getValue()),
        comment: findLastData(sheet.getRange(2, sheetMaxColumn, sheetMaxRow - 1, 1).getValues().map((item) => item[0]), ''),
        information: getInformation(
            sheet.getRange(1, 2, 1, sheetMaxColumn - 2).getValues(),
            sheet.getRange(2, 2, sheetMaxRow - 1, sheetMaxColumn - 2).getValues()
        )
    };

    // Logger.log(data);

    return JSON.stringify(data, null, '\t');
}

function getStringDate(date) {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('.') + ' ' + [
        String(date.getHours()).padStart(2, '0'),
        String(date.getMinutes()).padStart(2, '0'),
        String(date.getSeconds()).padStart(2, '0')
    ].join(':');
}

function findLastData(data, skip) {
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i] != skip) return data[i];
    }

    return undefined;
}

function getInformation(informationName, informationStatus) {
    const message = [
        '使用できない',
        '空いている',
        '混んでいる',
        '埋まっている'
    ];

    let res = [];

    for (let i in informationName[0]) {
        res.push({
            place: cutString(informationName[0][i], '[', ']'),
            status: message.indexOf(findLastData(informationStatus.map((item) => item[i]), '変更なし'))
        });
    }

    return res;
}

function cutString(text, startString, endString) {
    return text.substring(text.indexOf(startString) + 1, text.indexOf(endString));
}
