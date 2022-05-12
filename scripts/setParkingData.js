getJson(
    'https://script.google.com/macros/s/AKfycbynoFMcP14XJ3CWIrd2kIYjptTGpejwsktUe8modedNIPVufB_39p9N1_lRnj2N2Xo5/exec'
).then(setParkingData); // サンプルデータ：'../media/random/parkingTestData.json'

function setParkingData(parkingData) {
    const message = [
        '使用できません',
        '空いています',
        '混んでいます',
        '埋まっています'
    ];

    const color = [
        '#888',
        '#080',
        '#880',
        '#800'
    ];

    const updateElement = document.getElementById('parkingUpdate');
    const commentElement = document.getElementById('parkingComment');
    const informationElement = document.getElementById('parkingInformation');

    updateElement.innerHTML = `<b>更新日時：</b><code>${parkingData.update}</code>`;
    commentElement.innerHTML = `<b>お知らせ：</b>${parkingData.comment}`;
    informationElement.innerHTML = parkingData.information.map((item) => {
        return `
            <tr style="color: ${color[item.status]}">
                <th>${item.place}</th>
                <th>${message[item.status]}</th>
            </tr>
        `;
    }).join('\n');
}
