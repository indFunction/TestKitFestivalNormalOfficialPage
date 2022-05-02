const footerElement = document.getElementById('footer');

footerElement.innerHTML = `
    <div class="copyright">
        Copyright 2022
        <a href="https://www.kanazawa-it.ac.jp/" target="_blank" rel="noreferrer">金沢工業大学</a> / 
        <a href="https://www2.kanazawa-it.ac.jp/shikkobu/" target="_blank" rel="noreferrer">学友会</a> / 
        <a href="https://www2.kanazawa-it.ac.jp/kitfes/" target="_blank" rel="noreferrer">工大祭実行委員会</a>
    </div>
    <div class="links">
        <a class="link">感染症対策について</a>
        <a class="link" href="${isRoot ? './pages' : '.'}/contact.html">お問い合わせ</a>
    </div>
`;
