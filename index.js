// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", (event)=>{
//     const xPos = event.offsetX;
//     const yPos = event.offsetY;
//     const spanEl = document.createElement("span");
//     spanEl.style.left = xPos + "px";
//     spanEl.style.top = yPos + "px";
//     const size = Math.random()*100;
//     spanEl.style.width = size + "px";
//     spanEl.style.height = size + "px";
//     bodyEl.appendChild(spanEl);
//     setTimeout(() => {
//         spanEl.remove();
//     }, 10000);
// });

// const bodyEl = document.querySelector("body");

// function createEffect(xPos, yPos) {
//     const spanEl = document.createElement("span");
//     spanEl.style.left = xPos + "px";
//     spanEl.style.top = yPos + "px";

//     const size = Math.random() * 50 + 20; // 20–70px
//     spanEl.style.width = size + "px";
//     spanEl.style.height = size + "px";

//     // random color
//     const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#33FFBD", "#3380FF", "#E833FF"];
//     spanEl.style.background = colors[Math.floor(Math.random() * colors.length)];

//     bodyEl.appendChild(spanEl);

//     setTimeout(() => {
//         spanEl.remove();
//     }, 2000); // disappear with fade
// }

// // Desktop mouse
// bodyEl.addEventListener("mousemove", (event) => {
//     createEffect(event.clientX, event.clientY);
// });

// // Mobile touch
// bodyEl.addEventListener("touchmove", (event) => {
//     const touch = event.touches[0]; // first touch point
//     createEffect(touch.clientX, touch.clientY);
// });

// const bodyEl = document.querySelector("body");

// function createEffect(xPos, yPos) {
//     const spanEl = document.createElement("span");
//     spanEl.style.left = xPos + "px";
//     spanEl.style.top = yPos + "px";

//     // random color for heart
//     const colors = ["#7E0315", "#950217", "#B70316", "#D60620"];
//     spanEl.style.background = colors[Math.floor(Math.random() * colors.length)];
//     spanEl.style.setProperty("--heart-color", spanEl.style.background);

//     bodyEl.appendChild(spanEl);

//     setTimeout(() => {
//         spanEl.remove();
//     }, 2000);
// }

// // Desktop mouse
// bodyEl.addEventListener("mousemove", (event) => {
//     createEffect(event.clientX, event.clientY);
// });

// // Mobile touch
// bodyEl.addEventListener("touchmove", (event) => {
//     const touch = event.touches[0];
//     createEffect(touch.clientX, touch.clientY);
// });

const bodyEl = document.querySelector("body");

function createEffect(xPos, yPos) {
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Random heart colors
    const colors = ["#7E0315", "#950217", "#B70316", "#D60620"];
    spanEl.style.background = colors[Math.floor(Math.random() * colors.length)];

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 2000);
}

// Desktop mouse
bodyEl.addEventListener("mousemove", (event) => {
    createEffect(event.clientX, event.clientY);
});

// Mobile touch
bodyEl.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    createEffect(touch.clientX, touch.clientY);
});


