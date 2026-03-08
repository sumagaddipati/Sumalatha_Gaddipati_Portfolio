<script>

const username = "sumagaddipati";
const container = document.getElementById("github-projects");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
.then(res => res.json())
.then(data => {

const repos = data.slice(0,6); // show top 6 repos

repos.forEach(repo => {

const card = document.createElement("div");
card.className = "project-card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available."}</p>

<div class="tech-tags">
<span>⭐ ${repo.stargazers_count}</span>
<span>🍴 ${repo.forks_count}</span>
</div>

<a class="github-btn" href="${repo.html_url}" target="_blank">
View Repository
</a>
`;

container.appendChild(card);

});

});

</script>