const headerElement = document.getElementById('header');

headerElement.innerHTML = `
    <a href="${isRoot ? '.' : '..'}/index.html">
        <div class="icon">
            <img src="${isRoot ? '.' : '..'}/media/icon/icon_original_black_1kr.png" alt="Icon" />
        </div>
        <div class="title">
            <div class="titleA">第55期</div>
            <div class="titleB">金沢工業大学 工大祭</div>
        </div>
    </a>
`;
