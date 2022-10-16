const markBtn = document.getElementById("allRead");
const unreadMsg = document.querySelectorAll(".unread");
const pinkDot = document.querySelectorAll(".fa-circle");
const load = document.getElementById("load");
const notificationsCount = document.getElementById("notificationsCount");

// EVENTS
markBtn.addEventListener('click', readAll);
load.addEventListener('click', () => { location.reload() });
notificationsCount.addEventListener('mouseover', function () {
    this.classList.add("countAnima")
})
notificationsCount.addEventListener('mouseout', function () {
    this.classList.remove("countAnima")
})



// Read All Function
function readAll() {
    // Removing Background
    unreadMsg.forEach(item => {
        item.classList.remove("bg-Light-grayish-blue-1");
    })

    notificationsCount.classList.add("pinkDotAnima");
    // Hiding pinkdots
    pinkDot.forEach(item => {

        // item.classList.add("translate-x-[200px]");
        item.classList.add("pinkDotAnima");
    })
}


