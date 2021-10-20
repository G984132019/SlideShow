let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails")
const min =1;
const max = 19;
let url;
function prev(){
  count--;
  if(count<min){
    count = max;
    thumbnailsElement.children[0].classList.remove("selected");
  }else{
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<10){
    url = src +"0"+count +".jpg";
  }else{
    url = src +count +".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected")
}

function next(){
  count++;
  if(count>max){
    count = min;
    thumbnailsElement.children[max-1].classList.remove("selected");
  }else{
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count<10){
    url = src +"0"+count +".jpg";
  }else{
    url = src +count +".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected")
}
