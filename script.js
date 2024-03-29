document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const numItems = 5; // 假设我们想要生成5个菜单项

  for (let i = 0; i < numItems; i++) {
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`; // 随机生成颜色
    const link = `code/${i + 1}.html`; // 相对路径的链接

    const div = document.createElement('div');
    div.className = 'menu-item';
    div.style.backgroundColor = color;
    div.textContent = `点击跳转 ${i + 1}`;
    div.onclick = function() {
      window.location.href = link; // 使用 window.location.href 跳转到链接
    };

    menu.appendChild(div);
  }
});
