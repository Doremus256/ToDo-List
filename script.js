// Variables here
const date = $("#currentDay")
let textArea = $("textarea");
const now = moment().format("MMM Do YYYY")
const clock = parseInt(moment().format('H'));


// Today's date
date.text(now);

// For box colors, based on current time

for(let i=0; i<textArea.length; i++) {
    let timeColor = parseInt(textArea[i].id)
    if (timeColor < clock) {
        textArea[i].setAttribute("class", "past");
    }
    else if (timeColor > clock) {
        textArea[i].setAttribute("class", "future");
    }
    else {
        textArea[i].setAttribute("class", "present");
    }
}

// Buttons that send input info to local storage

$("8amBtn").on("click", function(event) {
    event.preventDefault();
        let eightTask = $("#8").val();
        localStorage.setItem("8am", eightTask);
})
$("9amBtn").on("click", function() {
    let nineTask = $("#9").val();
    localStorage.setItem("9am", nineTask);
})
$("10amBtn").on("click", function() {
    let tenTask = $("#10").val();
    localStorage.setItem("10am", tenTask);
})
$("11amBtn").on("click", function() {
    let elevenTask = $("#11").val();
    localStorage.setItem("11am", elevenTask);
})
$("12pmBtn").on("click", function() {
    let twelveTask = $("#12").val();
    localStorage.setItem("12pm", twelveTask);
})
$("1pmBtn").on("click", function() {
    let oneTask = $("#1").val();
    localStorage.setItem("1pm", oneTask);
})
$("2pmBtn").on("click", function() {
    let twoTask = $("#2").val();
    localStorage.setItem("2pm", twoTask);
})
$("3pmBtn").on("click", function() {
    let threeTask = $("#3").val();
    localStorage.setItem("3pm", threeTask);
})
$("4pmBtn").on("click", function() {
    let fourTask = $("#4").val();
    localStorage.setItem("4pm", fourTask);
})
$("5pmBtn").on("click", function() {
    let fiveTask = $("#5").val();
    localStorage.setItem("5pm", fiveTask);
})



