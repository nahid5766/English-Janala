const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Fetching data from the API
        .then((res) => res.json()) // Converting the response to JSON
        .then((json) => displayLesson(json.data))
}; 
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/5${id}`;  
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    // wordContainer.innerHTML = "";

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <p>Cat</p>
        `;
        wordContainer.append(card);
    });
};



const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById
    
    ("level-container");
    levelContainer.innerHTML = "";

    console.log("Lessons data type:", typeof lessons, lessons);
    // 2. get into every lessons
    for (let lesson of lessons) {
        // 3. create element & set innerHTML
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                </button>
        `;

        // 4. appendChild to the container
        levelContainer.appendChild(btnDiv);
    }
};


loadLessons(); 