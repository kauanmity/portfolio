const filters = document.querySelector(".filters");
const buttons = filters.querySelectorAll("button");
const projects = document.querySelectorAll(".project");
const filterStatus = document.querySelector("#resultado-filtro");

filters.hidden = false;

filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button");
  if (!selected) return;

  const filter = selected.dataset.filter;
  let visibleCount = 0;

  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button === selected));
  }

  for (const project of projects) {
    const matches = filter === "todos" || project.dataset.category.split(" ").includes(filter);
    project.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  filterStatus.textContent = `${selected.textContent.trim()}: ${visibleCount} ${visibleCount === 1 ? "projeto" : "projetos"}.`;
});
