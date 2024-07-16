let hasBeenCalled = false;

async function sorry() {
    if (hasBeenCalled) return; 

    const bg = document.querySelector('.bg');
    const line = document.querySelector('.line');
    const main = document.getElementById("main");
    const img = document.getElementById("img");
    const text = document.querySelector('.text');

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const sorryText = 'I\'m really sorry';
    const sorryElement = document.createElement('p');
    sorryElement.textContent = sorryText;
    const sorryElementWidth = (sorryElement.offsetWidth) || 200;
    const sorryElementHeight = Math.max((window.innerWidth * 0.02), (window.innerHeight * 0.03));
    const numElementsHeight = Math.floor(windowHeight / (sorryElementHeight + window.innerHeight * 0.02 ));
    const numElementsWidth = Math.floor(windowWidth / (sorryElementWidth + window.innerWidth * 0.02));

    console.log(`Total number of "sorry" elements in the row: ${numElementsWidth}`);
    console.log(`Total number of "sorry" elements in the column: ${numElementsHeight}`);

    img.classList.add("flip-horizontal-bottom"); 
    await new Promise(resolve => setTimeout(resolve, 999.99));
    img.classList.remove("img");
    await new Promise(resolve => setTimeout(resolve, 100.99));
    main.classList.add("main2");
    img.classList.add("img2");
    text.style.display="flex";
    text.classList.add("toRight");
    text.classList.add("text1");

    for (let i = 0; i < numElementsHeight; i++) {
        const newSorryElement = document.createElement('div');
        newSorryElement.className = 'line';
        for (let j = 0; j < numElementsWidth; j++) {
            const newSorryElementText = document.createElement('p');
            newSorryElementText.id = 'sorry';
            newSorryElementText.textContent = sorryText;
            newSorryElement.appendChild(newSorryElementText);
        }
        bg.appendChild(newSorryElement);
        await new Promise(resolve => setTimeout(resolve, 200)); 
    }

    hasBeenCalled = true; 
}

