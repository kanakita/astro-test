/**
 * menu
 */
export default function menu() {
  const menuButton = document.querySelector(
    '[data-trigger="menu"]'
  );
  menuButton.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const body = document.body;
      body.dataset.showMenu === 'true' ? body.dataset.showMenu = 'false' : body.dataset.showMenu = 'true'
    },
    false
  );
}
