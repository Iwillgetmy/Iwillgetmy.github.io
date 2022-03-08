function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    const text = document.querySelector('.text');
    const name = document.querySelector('.name');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    text.classList.toggle('active');
    name.classList.toggle('active');
}