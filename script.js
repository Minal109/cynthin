import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower(){
window.addEventListener("mousemove", function (dets) {
    this.document.querySelector("#minicircle").style.transform ='translate(${dets.clientX}px, ${dets.clientY}px)';
}
