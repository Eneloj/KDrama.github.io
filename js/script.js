/*const slides = document.querySelector('#slide-cont');
const slideimage = document.querySelectorAll('#slide-cont img');

const btnp = document.querySelector('#btnp');
const btnn = document.querySelector('#btnn');

let counter = 1;
const size = slideimage[0].clientWidth;

slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

btnn.addEventListener('click',()=>{
if(counter>=slideimage.length-1) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter++;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});

btnp.addEventListener('click',()=>{
	if(counter<=0) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter--;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});


slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='lastClone'){
		slides.style.transition = "none";
		counter = slideimage.length -2;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});/////////////////////////////

slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='firstClone'){
		slides.style.transition = "none";
		counter = slideimage.length -counter;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});

/*}
function slidePre(){

	const slides = document.querySelector('#slide-cont');
const slideimage = document.querySelectorAll('#slide-cont img');

const btnp = document.querySelector('#btnp');
const btnn = document.querySelector('#btnn');

let counter = 1;
const size = slideimage[0].clientWidth;

slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

btnp.addEventListener('click',()=>{
	if(counter<=0) return;
	slides.style.transition = "transform 0.50s ease-in-out";
	counter--;
	slides.style.transform = 'translateX(' +(-size * counter) + 'px)';

});
slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='lastClone'){
		slides.style.transition = "none";
		counter = slideimage.length -2;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});
/*slides.addEventListener('transitionend', ()=>{
	console.log(slideimage[counter]);
	if (slideimage[counter].id ==='firstClone'){
		slides.style.transition = "none";
		counter = slideimage.length -counter;
		slides.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});*/


//
/*Another code here
const slid = document.querySelector(".sli");
const allBox = slid.children;
const slidWidth = slid.offsetWidth;
const maggin=60;
var item=0;

responsive=[
{breakPoint:{width:0,item:1}}
{breakPoint:{width:600,item:2}}
{breakPoint:{width:1000,item:4}}
]

function load(){
	for(let i=0; i<responsive.length;i++){
		if(window.innerWidth>responsive[i].breakPoint.width){
			item=responsive[i].breakPoint.item
		}
		console.log(item);
	}
	start();
}*/
var slide_image=["img/Slider/1.jpg","img/Slider/2.jpg","img/Slider/3.jpg"];
var i=0;
var slideshow=function (){
	document.slideshow.src=slide_image[i];
	if(i<slide_image.length-1){
		i++;}
		else{
			i=0;
		}
		setTimeout("slideshow()",1900);

	}
	slideshow()

function search(){
	alert("Search botton is currently not available, we are still fixing some problem on it, Sorry for the inconvinience.");
}
function openModal(e){
	var box= document.getElementById("modal-box");
	var content = document.getElementById("modal-content");

	content.innerHTML += "<img src='"+e+"'>";
	//document.getElementById("viewer").src=e;
	box.style.display = "block";
}

function closeModal(){
	document.getElementById("modal-box").style.display = "none";
}
function series(){
	alert("This page is currently not available, we are still fixing some problem on it, Sorry for the inconvinience.");
}

