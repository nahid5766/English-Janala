const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Fetching data from the API
        .then((res) => res.json()) // Converting the response to JSON
        .then((json) => displayLesson(json.data))
}; 
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;  
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words.length == 0) {
    wordContainer.innerHTML = `
     <div 
     class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
     <img class="mx-auto" src="./resources/assets/alert-error.png" alt="Error">
     <p class="text-xl font-medium text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="text-4xl font-bold">একটি Lesson Select করুন।</h2>
     </div>`;
        return;
    }

//     {
//     "id": 73,
//     "level": 1,
//     "word": "Cat",
//     "meaning": "বিড়াল",
//     "pronunciation": "ক্যাট"
// }

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        // eikhane ternary operator use kora hoyeche jate word er meaning and pronunciation na thakle "শব্দ পাওয়া যায়নি" dekhabe.
        card.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm text-center py-10 px-5 space-y-3">
        <h2 class="font-bold text-xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
        <p class="font-semibold ">Meaning / Pronunciation</p>
        <div class="font-medium text-2xl font-bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}"</div>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        </div>
        `;
        wordContainer.append(card);
    });
};



const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");
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