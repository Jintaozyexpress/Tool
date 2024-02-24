document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const numItems = 5; // 假设我们想要生成5个菜单项

  for (let i = 0; i < numItems; i++) {
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`; // 随机生成颜色
    const link = `code/${i + 1}.html`; // 相对路径的链接

    const div = document.createElement('div');
    div.className = 'menu-item';
    div.style.backgroundColor = color;
    div.textContent = `Go to Page ${i + 1}`;
    div.href = link;

    menu.appendChild(div);
  }
});
