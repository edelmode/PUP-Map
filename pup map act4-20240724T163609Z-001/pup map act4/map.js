
const areas = document.querySelectorAll('area');
areas.forEach((area) => {
  area.addEventListener('mouseover', (e) => {
    const modalId = area.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
  

  area.addEventListener('mouseout', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = "none");
  });
});