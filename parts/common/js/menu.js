const menuElement = document.getElementById('menu');

const isDebugMode = false;

const menuData = [
    {
        name: 'ホーム',
        link: '/index.html'
    },
    {
        name: '企画者の方へ',
        link: '/pages/forplanner.html'
    },
    {
        name: '活動紹介',
        link: '/pages/activity.html'
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
        name: '企画',
        link: ''
    },
    {
        name: 'スケジュール',
        link: ''
    },
    {
        name: 'アクセス',
        link: '/pages/access.html'
    },
    {
        name: '駐車場混雑状況',
        link: '/pages/parking.html'
    },
    {
        name: '各種SNSリンク',
        link: '/pages/sns.html'
    },
    {
        name: '感染症対策について',
        link: ''
    },
    {
        name: 'お問い合わせ',
        link: '/pages/contact.html'
    }
];

const menuDebugData = [
    {
        name: '開発者の方へ',
        link: '/pages/fordeveloper.html'
    },
    {
        name: 'サンプル',
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
            `<a class="item" href="${isRoot ?
                '.' + item.link :
                item.link == '/index.html' ? '..' + item.link : item.link.replace('/pages', '.')
            }">${item.name}</a>` :
            `<a class="item blank">${item.name}</a>`
    )
));

function toggleMenu() {
    menuElement.classList.toggle('isOpen');
}
