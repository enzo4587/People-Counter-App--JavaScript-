let count = 0;

let peopleCount = document.getElementById("peopleCount")

const increment = () => {
    count = count + 1;
    peopleCount.innerHTML = `Count: ${count} people`;
    console.log(count)
}