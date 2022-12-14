document.addEventListener("click", evt => {
    if (evt.target.classList.contains("img_file")) {
        let preview = document.querySelector(".preview");
        preview.querySelector("img").src = evt.target.src;
        preview.classList.toggle("active");
        document.querySelector("body").classList.toggle("active");
    } else if (evt.target.classList.contains("preview_cont")) {
        let preview = document.querySelector(".preview");
        preview.classList.toggle("active");
        document.querySelector("body").classList.toggle("active");

    }
})

var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}