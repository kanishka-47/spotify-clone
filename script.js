 let songs=[
        {songname: "first song" ,filepath:"songs/1.mp3", coverimage:"https://m.timesofindia.com/photo/90201370/size-318920/90201370.jpg"},
        {songname: "second song" ,filepath:"songs/2.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3ugPvlaUbtP9skOJgxBP5vv8DfjBShfi_kgpZzF4H5VG1di73VfxbSPuxFZJME33wc0&usqp=CAU"},
        {songname: "third song" ,filepath:"songs/3.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6szIKduLq7u70rXZ9OfP6T_FCUa68ngMYVPZFfrDjdVE-VUXwm_oXxNEeCEsXrNx0uGw&usqp=CAU"},
        {songname: "fourth song" ,filepath:"songs/4.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NFmsFMCVdguDZ7zw_deaCCK5opi2sbpwBtd3YD9VESXTOHO4zR9sq8iptDWFcX5BjPA&usqp=CAU"},
        {songname: "fifth song" ,filepath:"songs/5.mp3", coverimage:"https://i.ytimg.com/vi/HZAyjBMTiaM/mqdefault.jpg"},
        {songname: "sixth song" ,filepath:"songs/6.mp3", coverimage:"https://i.ytimg.com/vi/paqZ42s8ju8/hqdefault.jpg"},
        {songname: "seven song" ,filepath:"songs/7.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6szIKduLq7u70rXZ9OfP6T_FCUa68ngMYVPZFfrDjdVE-VUXwm_oXxNEeCEsXrNx0uGw&usqp=CAU"},
        {songname: "eight song" ,filepath:"songs/8.mp3", coverimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NFmsFMCVdguDZ7zw_deaCCK5opi2sbpwBtd3YD9VESXTOHO4zR9sq8iptDWFcX5BjPA&usqp=CAU"},
        {songname: "nine song" ,filepath:"songs/9.mp3", coverimage:"https://i.ytimg.com/vi/HZAyjBMTiaM/mqdefault.jpg"},
        {songname: "ten song" ,filepath:"songs/10.mp3", coverimage:"https://i.ytimg.com/vi/paqZ42s8ju8/hqdefault.jpg"},
    ]
    let audioelement=new Audio('songs/1.mp3');
    let play=document.querySelectorAll(".songItem i");
    let songinfoimg=document.querySelector(".songInfo img");    
    let progressbar=document.querySelector("#myProgressBar");
    let mainbtn=document.querySelector(".mainbtn");
    let songitem=document.querySelectorAll(".songItem");
    let songimage=document.querySelectorAll(".songimage");
    let songname=document.querySelectorAll(".songName");
    let mastersongname=document.querySelector('#masterSongName');
            songname.forEach((e,i)=>{
                e.innerHTML=songs[i].songname;
            })
           
console.log("hello");

mainbtn.addEventListener('click', () => {
    console.log("Button clicked");
    if (audioelement.paused || audioelement.currentTime <= 0) {
        console.log("Playing audio");
        audioelement.play();
        mainbtn.classList.remove('fa-play-circle');
        mainbtn.classList.add('fa-circle-pause');
        songinfoimg.style.opacity = "1";
    } else {
        console.log("Pausing audio");
        audioelement.pause();
        mainbtn.classList.remove('fa-circle-pause');
        mainbtn.classList.add('fa-play-circle');
        songinfoimg.style.opacity = "0";
    }
});
    audioelement.addEventListener('timeupdate',()=>{
        let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        progressbar.value=progress;
    })
    progressbar.addEventListener('click',()=>{
        console.log("change");
        audioelement.currentTime=progressbar.value*audioelement.duration/100;
    })

    play.forEach((playbtn,i)=>{
    playbtn.addEventListener(("click"),(element)=>{
        console.log(playbtn,i);
        console.log(element);
        if (audioelement.paused || audioelement.currentTime <= 0) {
        element.target.classList.remove('fa-play-circle');
        element.target.classList.add('fa-circle-pause');
        songinfoimg.style.opacity="1";
        audioelement.src=songs[i].filepath;
        audioelement.play();
         mastersongname.innerHTML=songs[i].songname;}
    else {

                console.log("Pausing audio");
                audioelement.pause();
                element.target.classList.remove('fa-circle-pause');
                element.target.classList.add('fa-play-circle');
                songinfoimg.style.opacity = "0";
            }})})
    songimage.forEach((e,i)=>{
     e.src=songs[i].coverimage;
    })
    