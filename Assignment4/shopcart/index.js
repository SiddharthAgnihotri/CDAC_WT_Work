function startClock() {
    d = new Date().toLocaleTimeString();
    document.getElementById("checkTime").innerHTML = d;
}
setInterval(startClock, 1000)
function showChecked() {
    document.getElementById("icount").textContent = document.querySelectorAll("input:checked").length;
}
document.querySelectorAll("input[name=fruit]").forEach(i => {
    i.onclick = function () {
        showChecked();
    }
});
function calMul() {
    
}