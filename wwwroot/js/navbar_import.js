
// 使用 Fetch API 將 navbar.html 插入到每個html頁面中
fetch('/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;
    })
    .catch(error => console.error('navbar渲染失敗:', error));
