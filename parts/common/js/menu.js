const menuElement = document.getElementById('menu');

const isDebugMode = false;

const menuData = [
    {
        name: 'ホーム',
        link: '/'
    },
    {
        name: '企画者の方へ',
        link: '/pages/forplanner.html'
    },
    {
        name: 'プロモーション',
        link: ''
    },
    {
        name: 'ご挨拶',
        link: ''
    },
    {
        name: '感染症対策について',
        link: ''
    },
    {
        name: 'ステージ企画',
        link: ''
    },
    {
        name: '屋内企画',
        link: ''
    },
    {
        name: '屋外企画',
        link: ''
    },
    {
        name: 'アクセス',
        link: ''
    },
    {
        name: '駐車場混雑状況',
        link: ''
    },
    {
        name: '各種SNSリンク',
        link: ''
    },
    {
        name: '活動紹介',
        link: '/pages/activity.html'
    },
    {
        name: 'お問い合わせ',
        link: '/pages/contact.html'
    }
];

const menuDebugData = [
    {
        name: '( ﾟД|',
        link: '/pages/sample.html'
    }
];

menuElement.innerHTML = `
    <button class="button" onclick='toggleMenu()'>メニュー</button>
    <div class="container">
        <div class="items"></div>
        <div class="fade"></div>
    </div>
`;

const itemsElement = menuElement.getElementsByClassName('container')[0].getElementsByClassName('items')[0];

(isDebugMode ? menuData.concat(menuDebugData) : menuData).map((item) => (
    itemsElement.insertAdjacentHTML(
        'beforeend',
        item.link && item.link != '' ?
            `<a class="item" href="${item.link}">${item.name}</a>` :
            `<a class="item blank">${item.name}</a>`
    )
));

function toggleMenu() {
    menuElement.classList.toggle('isOpen');
}
