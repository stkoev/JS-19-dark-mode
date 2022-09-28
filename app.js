const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map(({ title, date, length, snippet }) => {
    const formatDate = moment(date).format("MMMM Do YYYY");
    return `
    <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} minutes read</span>
        </div>
        <p>
        ${snippet}
        </p>
    </article>
    `;
  })
  .join("");

articlesContainer.innerHTML = articlesData;
console.log(moment());
