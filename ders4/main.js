const ulList = document.getElementById("infinite-list")

let elementCount = 1;

const loadMore = () => {
    for (let i = 0; i < 20; i++) {
        const li = document.createElement("li");
        li.innerText = `Item ${elementCount++}`;
        ulList.appendChild(li);
    }
}

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    document.documentElement.scrollTop
    document.documentElement.scrollHeight
    document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight - 25) {
        loadMore();
    }
})

// infinite scroll for initial load
loadMore();