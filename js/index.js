 // querySelector es una funcion implementada del metodo documentary implementada por el navegador
 const $video = document.querySelector('#video') 
 const $play =document.querySelector('#play')
 const $pause=document.querySelector('#pause')
 const $backward=document.querySelector('#backward')
 const $forward=document.querySelector('#forward')

 $play.addEventListener('click',handlePlay)
 $pause.addEventListener('click',handlePause)
 function handlePlay(){
     $video.play()
     $play.hidden=true
     $pause.hidden=false

     console.log("le diste al click :D")
 }
 function handlePause(){
     $video.pause()
    $pause.hidden=true
    $play.hidden=false
     console.log('le diste al boton de pausa')
 }
 $backward.addEventListener('click',handleBackward)
 $forward.addEventListener('click' ,handleForward)
 function handleForward(){
     //currentTime es la que me dice donde esta en segundos y milisegundo el video
     $video.currentTime +=10
     console.log('para adelantar 10 segundos',$video.currentTime)
 }
 function handleBackward(){
     $video.currentTime -=10
    console.log('para atras 10 segundos',$video.currentTime)
}
const $progress=document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded(){
    $progress.max=$video.duration
    console.log("ah cargado mi video",$video.duration)
}
function handleTimeUpdate(){
    //valor de la reproduccion del video a la barrita
    $progress.value=$video.currentTime
    // console.log("holi",$video.currentTime);
}

$progress.addEventListener('input',handleInput)
function handleInput(){
    /*Funcion para mover la barrita*/
    $video.currentTime=$progress.value
    console.log($progress.value)
}