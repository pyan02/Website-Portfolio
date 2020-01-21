var i = 0;
var images = [];
var time = 7000;

//list
images[0] = '3D6_YANP.jpg';
images[1] = 'ORTHO2_PY.jpg';
images[2] = 'ORTHO4_PY.jpg';

//change
function changeImg(){
    document.slide.src = images[i];

    if(i<images.length-1){
        i++;
    } else {
        i =0 ;
    }

    setTimeout("changeImg()",time);
}

window.onload = changeImg;