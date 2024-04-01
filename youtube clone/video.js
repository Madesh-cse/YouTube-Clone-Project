const video = [
    {
        id:1,
        MainImg :"/img/mainimg1.jpg",
        profile:"/youtubeprofieimg/sidebarimg5.jpg",
        template:"MERN STACK FULL Tutorialfor Beginner | complete all in one..",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago",
        link:"/youtube clone/video1.html"
    },
    {
        id:2,
        MainImg: "/img/mainimg2.jpg",
        profile:"/youtubeimg/sidebarimg2.jpg",
        template:"Vadakku Rail Paavangal | Parithabangal",
        author:"Parithabangal",
        authorview:"10M view",
        channelview:"2year ago",
    },
    {
        id:3,
        MainImg : "/img/mainimg3.jpg",
        profile:"/youtubeimg/sidebarimg3.jpg",
        template:"I Gave My 100,000,000th Subscriber An Island",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:4,
        MainImg :"/img/mainimg4.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"BEHINDWOODS GOLD MEDALS 2017",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:5,
        MainImg :"/img/mainimg5.jpg",
        profile:"/youtubeimg/sidebarimg2.jpg",
        template:"CHICKEN CHUKKA | Healthy Country Chicken Fry",
        author:"Parithabangal",
        authorview:"10M view",
        channelview:"2year ago",
    },
    {
        id:6,
        MainImg : "/img/mainimg6.jpg",
        profile:"/youtubeimg/sidebarimg3.jpg",
        template:"RED NOTICE | Official Trailer | Netflix",
        author:"NETFLIX",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:7,
        MainImg : "/img/mainimg7.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"Bairavaa - Official Teaser | Ilayathalapathy Vijay, Keerthy Suresh | Bharhathan",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:8,
        MainImg : "/img/mainimg8.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"What's Coming To Prime Video In 2024 | Prime Video",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:9,
        MainImg : "/img/mainimg9.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"MERN STACK FULL Tutorialfor Beginner | complete all in one..",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:10,
        MainImg : "/img/mainimg10.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"MERN STACK FULL Tutorialfor Beginner | complete all in one..",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:11,
        MainImg : "/img/mainimg16.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj....",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
    {
        id:12,
        MainImg : "/img/mainimg17.jpg",
        profile:"/youtubeimg/sidebarimg1.jpg",
        template:"Thunivu Official Trailer | Ajith Kumar | H Vinoth | Zee Studios",
        author:"Dave Gray",
        authorview:"492view",
        channelview:"2year ago"
    },
   
 ]
   
   // dark theme to light theme code 
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");

icon.onclick = function() {
    document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")){
    icon.src ="/img/sun-logo.jpg"
}
else{
    icon.src ="/img/moonlogo.jpg"
}

if(document.body.classList.contains("dark-mode")){
    logo.src = "/img/mainimg0.1.jpg"
}
else{
    logo.src ="/img/mainimg0.jpg"
}
}

// sidebar content
const sidebar = document.getElementById("sidebar");

const tabbar = document.getElementById("tabBar");

tabbar.addEventListener("click",function(){
    sidebar.classList.toggle("sidebar-toogle");

    document.body.classList.toggle("background-blur");

    document.body.classList.toggle("scroll");
})

// next video content
const VideoElement = document.querySelector(".next-video");

window.addEventListener("DOMContentLoaded",function(){
    DisplayNextVideo(video)
});

function DisplayNextVideo(DisPlayContent){
    let DisPlayItem = DisPlayContent.map(function(YoutubeContent){
        return `<div class="video1">
        <a href="">
            <div class="video-flex">
                <div class="flex-img">
                    <img src="${YoutubeContent.MainImg}" alt="">
                </div>
                <div class="flex-template">
                    <p>
                    ${YoutubeContent.template}
                    </p> 
                    <h5>${YoutubeContent.author}</h5>
                    <span class="author-view">${YoutubeContent.authorview}</span>
                        <span class="channel-video" >${YoutubeContent.channelview}</span>
                </div>
            </div>
        </a>
    </div>`;
    })
    DisPlayItem = DisPlayItem.join("")
    VideoElement.innerHTML = DisPlayItem;
    }

    // modal box code
    const ClipModal = document.getElementById("modal-btn");

    const modalContent = document.getElementById("clip-modal");

    const cancel = document.getElementById("cancel")

    ClipModal.addEventListener("click",function(){
        modalContent.style.display = "block";
    })

    cancel.addEventListener("click",function(){
        modalContent.style.display = "none"
        

    })


    // see more option content code

    function myFunction(){
        var dots = document.getElementById("dots");

        var more = document.getElementById("more");

        var btn = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";  // it explain that first it check the whether the dot is seen or not if not seen
            // if dot none seen move to else part
            btn.innerHTML = "Read more"; 
            more.style.display = "none";
          } 
          
          else {
            dots.style.display = "none";  // then it works the else part
            btn.innerHTML = "Read less"; 
            more.style.display = "block";
          }
        
    }


    // comment clear section

    function ClearTextInput(){

        document.getElementById("Textfield").value =""
    }
   