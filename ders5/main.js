const body = document.querySelector("body");
const toggleBtn = document.querySelector("#toggle");
const refreshBtn = document.querySelector("#refresh");

const theme = localStorage.getItem("theme"); // "light" | "dark"

if (theme === "dark") body.classList.add("dark");

// localStorage.removeItem("theme");
// localStorage.clear();

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (theme === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

refreshBtn.addEventListener("click", () => {
    window.location.reload();
});