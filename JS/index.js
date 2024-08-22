let menuBox = "off";
if(window.innerWidth < 600){
    menuBox = "off";
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
}
else if(window.innerWidth > 600){
    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none";
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
}
let deviceHeight = window.innerHeight;
let homeContainAllVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let musicContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let educationContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let movieContainVideoDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let animationContainVideoDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let sportsContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let rellsContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let vlogContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let comedyContainVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let subscriptionContainAllChanelDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let myOwnGetAllVideosDetails = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let allMyGetWatchVideos = {
    allVideosDetails:{},
    allVideoKeyList:[]
}
let allMyGetLikedVideos = {
    allVideosDetails:{},
    allVideoKeyList:[]
}

let allSubscribiedChanels = {
    chhosenChanel:{
        allDeatils:{},
        infoDetails:{},
        videosDetails:{},
        videoKeyDetails:[]
    },
    allChanelsDetails:{},
    allChanelsKeyList:[]
}

let videoRunningBoxMiniView = false;

let presentContain = "containFeedDiv1";

let FETCHED1 = "DONE";

let containTypeForRefresh = "home";

let presentRunningVideo = {
    fromWhere:"",
    details:{},
    allCommentDetails:{},
    allCommentKeys:[]
};
let onlineStatus = "off";

if(navigator.onLine == true){
    document.getElementById("noInternetStatusPage").style.display = "none"
    onlineStatus = "on";
}
window.addEventListener("online",()=>{
    if (onlineStatus == "off"){       
        document.getElementById("noInternetStatusPage").style.display = "none";
        onlineStatus = "on";
    } 
})

window.addEventListener("offline",()=>{    
    if (onlineStatus == "on"){
        document.getElementById("noInternetStatusPage").style.display = "flex";
        onlineStatus = "off";
    }
})
function massageBox(mas){
    document.getElementById("massageAlertBoxId").style.display = "flex";
    document.getElementById("massageAlertBoxId").innerHTML = mas;
    setTimeout(()=>{
        document.getElementById("massageAlertBoxId").style.display = "none"
    },600)
}
let importantURL = {
    mainURL:"https://mytube-backend-2ki6.onrender.com/",
    post:{
        register:"/user/register",
        login:"",
        logout:"",
        deleteAccount:"",
        uploadVideo:"",
        addAvatarOfChanel:"",
    },
    get:{
        
    }
}
function createCookie(name,value,days) {
    if (days) {
       var date = new Date();
       date.setTime(date.getTime()+(days*24*60*60*1000));
       var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+";";
}
function setHTMLtagByCheckingAccountDetails(type = "none"){
    let account_status = window.localStorage.getItem("status");
    if(account_status == "login"){
        document.getElementById("mainMyChanelPage").style.display = "flex";
        document.getElementById("register1").style.display = "none";
        document.getElementById("login1").style.display = "none";
        document.getElementById("accountProfileDetails").children[0].children[1].innerHTML = window.localStorage.getItem("username")
        document.getElementById("accountProfileDetails").children[1].children[1].innerHTML = window.localStorage.getItem("fullname")
        if(window.localStorage.getItem("avatarProfile")){
            document.getElementById("profileImageIdInput1").style.display = "block";
            document.getElementById("profileImageIdInput1").src = window.localStorage.getItem("avatarProfile");
            if(type == "reaload"){
                setTimeout(function(){
                    location.reload();
                }, 1000);
            }
            
        }
        if(!window.localStorage.getItem("avatarProfile")){
            
            if(type == "reaload"){
                setTimeout(function(){
                    location.reload();
                }, 1000);
            }
            
        }
        
       
       
    }
    else if(account_status == "registered"){
        document.getElementById("mainMyChanelPage").style.display = "none";
        document.getElementById("register1").style.display = "none";
        document.getElementById("login1").style.display = "flex";
    }
    else if(account_status == undefined){
        document.getElementById("mainMyChanelPage").style.display = "none";
        document.getElementById("register1").style.display = "flex";
        document.getElementById("login1").style.display = "none";
    }
}
setHTMLtagByCheckingAccountDetails()
window.onresize = ()=>{
    console.log("hello")
    if(window.innerWidth < 600  ){
        menuBox = "off";
        document.getElementById("menuBoxDiv").style.display = "none";
        document.getElementById("menuBoxBackSupportBox").style.display = "none";
         if(videoRunningBoxMiniView == true){         
                document.getElementById("mainVideoRunningDiv").style.width = "55%";
                document.getElementById("mainVideoRunningDiv").style.height = "13vh";
                document.getElementById("videoBar").style.height = "13vh";
            }
            else if(videoRunningBoxMiniView == false){
            
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "100%";
                document.getElementById("mainVideoRunningDiv").style.height = "35vh";
                document.getElementById("videoBar").style.height = "35vh";
            }
    }
    else if(window.innerWidth > 600){
 
        if(menuBox == "on"){
            menuBox = "on";
            document.getElementById("menuBoxDiv").style.display = "block";
            document.getElementById("menuBoxBackSupportBox").style.display = "block";
            
        }
        
        if(videoRunningBoxMiniView == true){
            
         document.getElementById("mainVideoRunningDiv").style.width = "30%";
       document.getElementById("mainVideoRunningDiv").style.height = "30vh";          
       document.getElementById("videoBar").style.height = "30vh";
       }
       else if(videoRunningBoxMiniView == false){
            
        document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "75%";
                document.getElementById("mainVideoRunningDiv").style.height = "75vh";
                document.getElementById("videoBar").style.height = "75vh";
      }
    }
}

function onceUponAtime(createdAt){
    
    let howTimeAgoMy = "0 days";
    const time = new Date();
    const pastTime = new Date(createdAt);
    let differenceInMilliseconds = time - pastTime;
    const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
    const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor((differenceInMilliseconds / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
                            
    if(years != 0){
        if(years == -1){
            howTimeAgoMy  =  "now";
            console.log(howTimeAgoMy)
            return howTimeAgoMy;
        }
        else{
            howTimeAgoMy  = years + " years";
            console.log(howTimeAgoMy)
            return howTimeAgoMy;
        }
        
    }
    else if(years == 0){
        if(months != 0){
            howTimeAgoMy   =  months + " months";
            return howTimeAgoMy;
        }
        else if(months == 0){
            if(days  != 0){
                howTimeAgoMy   =  days + " days";
                return howTimeAgoMy;
            }
            else if(days  == 0){
                if(hours  != 0){
                    howTimeAgoMy   =  hours + " hours";
                    return howTimeAgoMy;
                }
                else if(hours  == 0){
                    if(minutes  != 0){
                        howTimeAgoMy  =  minutes + " minutes";
                        return howTimeAgoMy;
                    }
                    else if(minutes  == 0){
                        howTimeAgoMy  =  seconds + " seconds";
                        return howTimeAgoMy;
                    }
                                          
                }
                                       
            }
                                    
        }
    }
}

function convertToHowMany(number) {
    if (number >= 1e9) {
        return (number / 1e9).toFixed(1) + 'B';  // Billion
    } else if (number >= 1e7) {
        return (number / 1e7).toFixed(1) + 'Cr'; // Crore
    } else if (number >= 1e6) {
        return (number / 1e6).toFixed(1) + 'M';  // Million
    } else if (number >= 1e5) {
        return (number / 1e5).toFixed(1) + 'L';  // Lakh
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1) + 'K';  // Thousand
    } else {
        return number.toString();  // Less than thousand
    }
}


function goToRegisteredPageFun(){
    document.getElementById("login1").style.display = "none";
    document.getElementById("register1").style.display = "flex";
}
function goToLoginPageFun(){
    document.getElementById("login1").style.display = "flex";
    document.getElementById("register1").style.display = "none";
}
function autoResizeOfTextarea(textarea) {
    textarea.style.height = 'auto';  // Reset the height
    textarea.style.height = textarea.scrollHeight + 'px';  // Set the height to the scroll height
}
function meunButFuction(){
        if(menuBox == "off"){
            menuBox = "on";
            document.getElementById("menuBoxDiv").style.display = "block";
            document.getElementById("menuBoxBackSupportBox").style.display = "block";
           
            
        }
        else if(menuBox == "on"){
            menuBox = "off";
            document.getElementById("menuBoxDiv").style.display = "none";
            document.getElementById("menuBoxBackSupportBox").style.display = "none";
           
        }
   
   
}
function searchButToPage(){
    document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
    document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
    document.getElementById(presentContain).style.display = "none";
    if(presentContain == "videoRunningPage"){
        bigViewOfVideoBoxTominViewFunction()
        //document.getElementById("videoBar").removeAttribute('src');
        //document.getElementById("videoBar").load();
    }
    presentContain = "searchPage";
    if(globalPageHistoryArray[globalPageHistoryArray.length -1][0] != presentContain){
        globalPageHistoryArray.push([presentContain])
    }
    
    document.getElementById("globalBackButtonId").style.display = "flex"; 
    document.getElementById("searchPage").style.display = "block";
    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none"; 
    document.getElementById("menuBoxBackSupportBox").style.display = "none";

}
const pauseOnBtn = document.getElementById("mainVideoRunningDivMiniVersionTollKitPauseOn");
const videobar = document.getElementById("videoBar");
function bigViewOfVideoBoxTominViewFunction(){

    document.getElementById("mainVideoRunningDiv").style.display = "block";
        document.getElementById("videoBar").controls = false;
        videoRunningBoxMiniView = true;
        
        
        
        document.getElementById("mainVideoRunningDivMiniVersionTollKit").style.display = "flex";
       if(window.innerWidth < 600){
           document.getElementById("mainVideoRunningDiv").style.top = "";
           document.getElementById("mainVideoRunningDiv").style.bottom = "45px";
           document.getElementById("mainVideoRunningDiv").style.left = "0px";
           document.getElementById("mainVideoRunningDiv").style.width = "55%";
           document.getElementById("mainVideoRunningDiv").style.height = "13vh";
           document.getElementById("videoBar").style.height = "13vh";
           
       }
       else if(window.innerWidth > 600){
        document.getElementById("mainVideoRunningDiv").style.top = "";
        document.getElementById("mainVideoRunningDiv").style.bottom = "40px";
        document.getElementById("mainVideoRunningDiv").style.left = "0px";
           document.getElementById("mainVideoRunningDiv").style.width = "30%";
           document.getElementById("mainVideoRunningDiv").style.height = "30vh";
           
           document.getElementById("videoBar").style.height = "30vh";

       }

}
document.getElementById("videoBar").onplaying = ()=>{
    pauseOnBtn.src = "./videoTagPlayButton.png";
    mainVideoRunningDivMiniVersionTollKitPauseOnType = "play";
}
document.getElementById("videoBar").onpause = ()=>{
    console.log("jjj")
    pauseOnBtn.src = "./videoTagPauseButton.png";
    mainVideoRunningDivMiniVersionTollKitPauseOnType = "pause";
}


document.getElementById("headerSearchBoxDivSearchBut").onclick = ()=>{
    document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
    document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
    document.getElementById(presentContain).style.display = "none";
    if(presentContain == "videoRunningPage"){
        bigViewOfVideoBoxTominViewFunction()
        //document.getElementById("videoBar").removeAttribute('src');
        //document.getElementById("videoBar").load();
    }
    presentContain = "searchPage";
    if(globalPageHistoryArray[globalPageHistoryArray.length -1][0] != presentContain){
        globalPageHistoryArray.push([presentContain])
    }
    
    document.getElementById("globalBackButtonId").style.display = "flex"; 
    document.getElementById("searchPage").style.display = "block";
    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none"; 
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
}

let globalPageHistoryArray = [["containFeedDiv1","home"]];
let buttonTopage = {HOME:["containFeedDiv1",0],MUSIC:["containFeedDiv1",1],EDUCATION:["containFeedDiv1",2],SPORTS:["containFeedDiv1",3],REELS:["containFeedDiv1",4],MOVIE:["containFeedDiv1",5],ANIMATION:["containFeedDiv1",6],VLOG:["containFeedDiv1",7],COMEDY:["containFeedDiv1",8],SUBSCRIPTION:["subsciptionPage",9],LIBRARY:["libraryPage",10],MYCHANEL:["mychanelePage",11],SETTING:["settingPage",12]}
let sideNavboxBTP = 0;

let downNavButtonToPage = {HOME:["containFeedDiv1",0],REELS:["containFeedDiv1",1],SUB:["subsciptionPage",2],LIBRARY:["libraryPage",3]}
let positionDownNav  = 0;
let positionDownNavPDN = ["containFeedDiv1","containFeedDiv1","subsciptionPage","libraryPage"]
let containTypeForRefreshList = ["home","music","education","sports","reels","movie","animation","vlog","comedy"]
let containTypeForRefreshListDown = ["home","reels"];
document.getElementById("menuBoxDiv").addEventListener("click",(e)=>{
    if(e.target?.id == "menuBoxDiv"){
        
        return null;
    }
    if(presentContain == buttonTopage[e.target.innerHTML][0]){
        if(presentContain == "containFeedDiv1"){
            if(containTypeForRefresh == containTypeForRefreshList[buttonTopage[e.target.innerHTML][1]]){
                console.log("same page")
                return null;
            }
        }
        else{
            return null;
        }
    }
    document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
    document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
    sideNavboxBTP = buttonTopage[e.target.innerHTML][1];
    document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "rgb(158, 32, 53)";
    if(e.target.innerHTML == "HOME"){
        
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        
        containTypeForRefresh = "home";

        
        document.getElementById("downNavMainDivId").children[downNavButtonToPage["HOME"][1]].style.color = "rgb(158, 32, 53)";
        positionDownNav = downNavButtonToPage["HOME"][1];////workin

        for(let i = 0;i < homeContainAllVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]]._id,thumbnail:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].title,url:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].video_url,fullname:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].chanelname, views:homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        
        
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "MUSIC"){
        containTypeForRefresh = "music";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < musicContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:musicContainVideosDetails.allVideosDetails[ musicContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].title,url:musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].video_url,fullname:musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].chanelname, views:musicContainVideosDetails.allVideosDetails[ musicContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(musicContainVideosDetails.allVideosDetails[musicContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(musicContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMusicVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
       
    }
    else if(e.target.innerHTML == "MOVIE"){
        containTypeForRefresh = "movie";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < movieContainVideoDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:movieContainVideoDetails.allVideosDetails[ movieContainVideoDetails.allVideoKeyList[i]]._id,thumbnail:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].chanellogo,videoTitle:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].title,url:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].video_url,fullname:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].chanelname, views:movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].views,time:onceUponAtime(movieContainVideoDetails.allVideosDetails[movieContainVideoDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(movieContainVideoDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMoviesVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "REELS"){
        containTypeForRefresh = "reels";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        
        document.getElementById("downNavMainDivId").children[downNavButtonToPage["REELS"][1]].style.color = "rgb(158, 32, 53)";
        positionDownNav = downNavButtonToPage["REELS"][1];
        for(let i = 0;i < rellsContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].title,url:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].video_url,fullname:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].chanelname, views:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(rellsContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingReelsVideosControler",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "EDUCATION"){
        containTypeForRefresh = "education";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < educationContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].title,url:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].video_url,fullname:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].chanelname, views:educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(educationContainVideosDetails.allVideosDetails[educationContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(educationContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingEducationVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "ANIMATION"){
        containTypeForRefresh = "animation";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < animationContainVideoDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]]._id,thumbnail:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].chanellogo,videoTitle:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].title,url:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].video_url,fullname:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].chanelname, views:animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].views,time:onceUponAtime(animationContainVideoDetails.allVideosDetails[animationContainVideoDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(animationContainVideoDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingAnimationVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "SPORTS"){
        containTypeForRefresh = "sports";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < sportsContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].title,url:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].video_url,fullname:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].chanelname, views:sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(sportsContainVideosDetails.allVideosDetails[sportsContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(sportsContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingSportsVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "VLOG"){
        containTypeForRefresh = "vlog";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < vlogContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].title,url:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].video_url,fullname:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].chanelname, views:vlogContainVideosDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(animationContainVideoDetails.allVideosDetails[vlogContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(vlogContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingVlogVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "COMEDY"){
        containTypeForRefresh = "comedy";
        document.getElementById(buttonTopage[e.target.innerHTML][0]).innerHTML = "";
        for(let i = 0;i < comedyContainVideosDetails.allVideoKeyList.length;i++){
          
            addVideoFeedToVideoCard({id:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].title,url:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].video_url,fullname:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].chanelname, views:comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(comedyContainVideosDetails.allVideosDetails[comedyContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])          
        }
        if(comedyContainVideosDetails.allVideoKeyList.length == 0){
            if(navigator.onLine == true){
                if(localStorage.getItem("username") && localStorage.getItem("passward")){
                    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingComedyVideosController",0);
                }
            }
        }
        document.getElementById("containFeedDiv1").scrollTop = 0;
    }
    else if(e.target.innerHTML == "SUBSCRIPTION"){
        
        document.getElementById("downNavMainDivId").children[downNavButtonToPage["SUB"][1]].style.color = "rgb(158, 32, 53)";
        positionDownNav = downNavButtonToPage["SUB"][1];
        document.getElementById("subscribeSelectedChanelInfoDivId").style.display = "block";
        document.getElementById("subscribePageVideosDivId").style.display = "none";
        document.getElementById("subscribePageNavigation").children[0].style.color = " rgb(158, 32, 53)";
        document.getElementById("subscribePageNavigation").children[1].style.color = "white";
        onsubscribePageNavigation = 0;
        if(allSubscribiedChanels.allChanelsKeyList.length == 0){
            gettingFetchingAllMySubscribedChaneles()
        }
    }
    else if(e.target.innerHTML == "LIBRARY"){
        
        document.getElementById("downNavMainDivId").children[downNavButtonToPage["LIBRARY"][1]].style.color = "rgb(158, 32, 53)";
        positionDownNav = downNavButtonToPage["LIBRARY"][1];
        document.getElementById("libraryPageWatchedVideosDivId").style.display = "block";
        document.getElementById("libraryPageLikedVideosDivId").style.display = "none";
        document.getElementById("libraryPageNavigation").children[0].style.color = " rgb(158, 32, 53)";
        document.getElementById("libraryPageNavigation").children[1].style.color = "white";
        onsubscribePageNavigation = 0;
        
        
    }
    else if(e.target.innerHTML == "MYCHANEL"){
        document.getElementById("uploadVideoSection").style.display = "none";
        document.getElementById("myChanelInformationDivIdMobile").style.display = "none";
        document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "block";
        document.getElementById("othersMychanelInformationNavigantionId").children[0].style.color = " rgb(158, 32, 53)";
        document.getElementById("othersMychanelInformationNavigantionId").children[1].style.color = "white";
        document.getElementById("othersMychanelInformationNavigantionId").children[2].style.color = "white";
        onChoosenOfMyChanel = 0;
        
    }
    if( presentContain != buttonTopage[e.target.innerHTML][0]){      
        document.getElementById("allMyVideoListOfMyChanelDivId").scrollTop = 0;
   
    }///workpalce after
    if(presentContain == "videoRunningPage"){
        //document.getElementById("videoBar").pause();
        //document.getElementById("videoBar").removeAttribute('src');
        //document.getElementById("videoBar").load();
       // document.getElementById("videoBar").pause();
      bigViewOfVideoBoxTominViewFunction()
    }////addding  llllll
    document.getElementById(presentContain).style.display = "none";
    presentContain = buttonTopage[e.target.innerHTML][0];
    globalPageHistoryArray = [];
    globalPageHistoryArray.push([presentContain,containTypeForRefresh]) 
    document.getElementById("globalBackButtonId").style.display = "none";
    document.getElementById(buttonTopage[e.target.innerHTML][0]).style.display = "block";
    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none";
    
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
   

})


document.getElementById("downNavMainDivId").addEventListener("click",(e)=>{
    if(e.target?.id == "downNavMainDivId"){
        
        return null;
    }
    if(presentContain == downNavButtonToPage[e.target.innerHTML][0]){
        if(presentContain == "containFeedDiv1"){
            if(containTypeForRefresh == containTypeForRefreshListDown[downNavButtonToPage[e.target.innerHTML][1]]){
                console.log("same page down")
                return null;
            }
        }
        else{
            return null;
        }
    }
    document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
    if(e.target.innerHTML == "SUB"){     
        sideNavboxBTP = buttonTopage["SUBSCRIPTION"][1];
        document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "rgb(158, 32, 53)";
        document.getElementById("subscribeSelectedChanelInfoDivId").style.display = "block";
        document.getElementById("subscribePageVideosDivId").style.display = "none";
        document.getElementById("subscribePageNavigation").children[0].style.color = " rgb(158, 32, 53)";
        document.getElementById("subscribePageNavigation").children[1].style.color = "white";
        onsubscribePageNavigation = 0;
    }
    else{
        sideNavboxBTP = buttonTopage[e.target.innerHTML][1];
        document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "rgb(158, 32, 53)";
        if(e.target.innerHTML == "HOME"){
            containTypeForRefresh = "home";
            document.getElementById(buttonTopage["HOME"][0]).innerHTML = "";
            for(let i = 0;i < homeContainAllVideosDetails.allVideoKeyList.length;i++){          
                addVideoFeedToVideoCard({id:homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]]._id,thumbnail:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].title,url:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].video_url,fullname:homeContainAllVideosDetails.allVideosDetails[homeContainAllVideosDetails.allVideoKeyList[i]].chanelname, views:homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(homeContainAllVideosDetails.allVideosDetails[ homeContainAllVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])
                
            }
                    
            document.getElementById("containFeedDiv1").scrollTop = 0;
            
        }
        else if(e.target.innerHTML == "REELS"){
            containTypeForRefresh = "reels";
            document.getElementById(buttonTopage["REELS"][0]).innerHTML = "";
            for(let i = 0;i < rellsContainVideosDetails.allVideoKeyList.length;i++){          
                addVideoFeedToVideoCard({id:rellsContainVideosDetails.allVideosDetails[ rellsContainVideosDetails.allVideoKeyList[i]]._id,thumbnail:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].thumbnail_url,chanelLogo:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].chanellogo,videoTitle:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].title,url:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].video_url,fullname:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].chanelname, views:rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].views,time:onceUponAtime(rellsContainVideosDetails.allVideosDetails[rellsContainVideosDetails.allVideoKeyList[i]].createdAt)},buttonTopage[e.target.innerHTML][0])
                
            }
            
            document.getElementById("containFeedDiv1").scrollTop = 0;
        }
        else if(e.target.innerHTML == "LIBRARY"){
            document.getElementById("libraryPageWatchedVideosDivId").style.display = "block";
            document.getElementById("libraryPageLikedVideosDivId").style.display = "none";
            document.getElementById("libraryPageNavigation").children[0].style.color = " rgb(158, 32, 53)";
            document.getElementById("libraryPageNavigation").children[1].style.color = "white";
            onsubscribePageNavigation = 0;
        }
    }
    
    
    document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
    document.getElementById("downNavMainDivId").children[downNavButtonToPage[e.target.innerHTML][1]].style.color = "rgb(158, 32, 53)";
    positionDownNav = downNavButtonToPage[e.target.innerHTML][1];

    document.getElementById(presentContain).style.display = "none";

    if(presentContain == "videoRunningPage"){
        //document.getElementById("videoBar").pause();
        //document.getElementById("videoBar").removeAttribute('src');
        //document.getElementById("videoBar").load();
       // document.getElementById("videoBar").pause();
       bigViewOfVideoBoxTominViewFunction()
    }
    presentContain = downNavButtonToPage[e.target.innerHTML][0];
    globalPageHistoryArray = [];
    globalPageHistoryArray.push([presentContain,containTypeForRefresh]) 
    document.getElementById("globalBackButtonId").style.display = "none";
    document.getElementById(downNavButtonToPage[e.target.innerHTML][0]).style.display = "block";

    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none"; 
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
})

function addVideoFeedToVideoCard(videoDetails,where){
    document.getElementById(where).innerHTML += `<div id = ${videoDetails.id} class = "feedVideoCardClass"><img src = ${videoDetails.thumbnail} class = "feedVideoThumbnailClass"/><img src = ${videoDetails.chanelLogo} class = "feedVideochanelLogoClass"/><p class = "feedVideoTitleClass">${videoDetails.videoTitle}</p><p class = "feedVideoCNVTClass">${videoDetails.fullname} - ${videoDetails.views} views - ${videoDetails.time} ago</p></div>`;
}
function addChanelLogoWithNameCard(cardDetails,where,type = 1){

    document.getElementById(where).innerHTML += `<div id = ${cardDetails.id} class = "subscribeingChanelCardClass"><img src = ${cardDetails.chanelLogo} class = "subscribeingChanelCardImageClass"/><span class = "subscribeingChanelCardChanelName">${cardDetails.chanelname}</span></div>`;
    if(type == 0){
       
        document.getElementById(cardDetails.id).children[0].style.border = "1px solid rgb(214, 40, 40)";
        document.getElementById(cardDetails.id).children[0].style.width = "47px";
        document.getElementById(cardDetails.id).children[0].style.height = "59px";
        
    }
}

let mainVideoRunningDivMiniVersionTollKitPauseOnType = "play";

document.getElementById("mainVideoRunningDivMiniVersionTollKit").addEventListener("click", (e) => {
    const targetId = e.target?.id;
    
    if (targetId === "mainVideoRunningDivMiniVersionTollKit") {
        return;
    }

    if (targetId === "mainVideoRunningDivMiniVersionTollKitUpperButton") {
        document.getElementById(presentContain).style.display = "none";
        presentContain = "videoRunningPage";
        if(presentContain == "videoRunningPage"){
            //document.getElementById("videoBar").pause();
            //document.getElementById("videoBar").removeAttribute('src');
            //document.getElementById("videoBar").load();
           // document.getElementById("videoBar").pause();
            document.getElementById("mainVideoRunningDiv").style.display = "block";
            document.getElementById("videoBar").controls = true;
            document.getElementById("mainVideoRunningDivMiniVersionTollKit").style.display = "none";
            videoRunningBoxMiniView = false;
            if(window.innerWidth < 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "100%";
                document.getElementById("mainVideoRunningDiv").style.height = "35vh";
                document.getElementById("videoBar").style.height = "35vh";
                
            }
            else if(window.innerWidth > 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "75%";
                document.getElementById("mainVideoRunningDiv").style.height = "75vh";
                document.getElementById("videoBar").style.height = "75vh";
    
            }
        }
        
        if(globalPageHistoryArray[globalPageHistoryArray.length -1][0] != presentContain){
            globalPageHistoryArray.push([presentContain])
        }
        document.getElementById("globalBackButtonId").style.display = "flex";
        document.getElementById("videoRunningPage").style.display = "block";
        document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
            document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
        // Handle "mainVideoRunningDivMiniVersionTollKitUpperButton" click event here.
    }

    if (targetId === "mainVideoRunningDivMiniVersionTollKitPauseOn") {
        const videoBar = document.getElementById("videoBar");
        const pauseOnBtn = document.getElementById("mainVideoRunningDivMiniVersionTollKitPauseOn");

        if (mainVideoRunningDivMiniVersionTollKitPauseOnType === "play") {
            pauseOnBtn.src = "./videoTagPauseButton.png";
            
            videoBar.pause();
           
            mainVideoRunningDivMiniVersionTollKitPauseOnType = "pause";
        } else {
            pauseOnBtn.src = "./videoTagPlayButton.png";
            videoBar.play();
            mainVideoRunningDivMiniVersionTollKitPauseOnType = "play";
        }
    }

    if (targetId === "mainVideoRunningDivMiniVersionTollKitCancel") {
        let videoBar = document.getElementById("videoBar");
        let pauseOnBtn = document.getElementById("mainVideoRunningDivMiniVersionTollKitPauseOn");
        videoBar.pause();
        videoBar.removeAttribute("src");
        videoBar.load()
        
        document.getElementById("mainVideoRunningDiv").style.display = "none";
        document.getElementById("mainVideoRunningDivMiniVersionTollKit").style.display = "none";
        mainVideoRunningDivMiniVersionTollKitPauseOnType = "play";
        pauseOnBtn.src = "./videoTagPlayButton.png";

        // Handle "mainVideoRunningDivMiniVersionTollKitCancel" click event here.
    }
});


//document.getElementById("videoBar").addEventListener("c")

function commonClickOnCardFun(fromwhere,e){

    let videoId = "";
    if(e.target.className == "feedVideoCardClass"){
       videoId = e.target.id;
    }
    else if(e.target.className == "containClass" || e.target?.id == fromwhere){
       
        return null;
    }
    else {
        videoId = e.target.parentNode.id;
        if(fromwhere == "containFeedDiv1"){
           if(containTypeForRefresh == "home"){
            presentRunningVideo.details = homeContainAllVideosDetails.allVideosDetails[videoId];
            presentRunningVideo.fromWhere = fromwhere;
           }
        }
        else if(fromwhere == "allMyVideoListOfMyChanelDivId"){
            
             presentRunningVideo.details = myOwnGetAllVideosDetails.allVideosDetails[videoId];
             presentRunningVideo.fromWhere = fromwhere;
             
            
         }
         else if(fromwhere == "libraryPageWatchedVideosDivId"){
            
            presentRunningVideo.details = allMyGetWatchVideos.allVideosDetails[videoId];
            presentRunningVideo.fromWhere = fromwhere;
            
           
        }
        else if(fromwhere == "libraryPageLikedVideosDivId"){
            
            presentRunningVideo.details = allMyGetLikedVideos.allVideosDetails[videoId];
            presentRunningVideo.fromWhere = fromwhere;
            
           
        }
        else if(fromwhere = "subscribePageVideosDivId"){
            presentRunningVideo.details = allSubscribiedChanels.chhosenChanel.allDeatils[videoId];
            presentRunningVideo.fromWhere = fromwhere;
        }
         
         let howTimeAgo = onceUponAtime(presentRunningVideo.details["createdAt"]);
         
        
        document.getElementById(presentContain).style.display = "none";
        presentContain = "videoRunningPage";
        if(presentContain == "videoRunningPage"){
            //document.getElementById("videoBar").pause();
            //document.getElementById("videoBar").removeAttribute('src');
            //document.getElementById("videoBar").load();
           // document.getElementById("videoBar").pause();
            document.getElementById("mainVideoRunningDiv").style.display = "block";
            document.getElementById("videoBar").controls = true;
            document.getElementById("mainVideoRunningDivMiniVersionTollKit").style.display = "none";
            videoRunningBoxMiniView = false;
            if(window.innerWidth < 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "100%";
                document.getElementById("mainVideoRunningDiv").style.height = "35vh";
                document.getElementById("videoBar").style.height = "35vh";
                
            }
            else if(window.innerWidth > 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "75%";
                document.getElementById("mainVideoRunningDiv").style.height = "75vh";
                document.getElementById("videoBar").style.height = "75vh";
    
            }
        }
        
        if(globalPageHistoryArray[globalPageHistoryArray.length -1][0] != presentContain){
            globalPageHistoryArray.push([presentContain])
        }
        const form = {username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),selected_video_id:videoId}
        fetch("https://mytube-backend-2ki6.onrender.com/video/getselectedVideoDetails",{      
            method:"POST",
            body:JSON.stringify(form)
        })
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data)
            if(data["yourVideo"] == true){
                document.getElementById("mainVideoInformantioDivPart1TVT3").style.display = "none";
            }
            else if(data["yourVideo"] == false){
                document.getElementById("mainVideoInformantioDivPart1TVT3").style.display = "flex";
                document.getElementById("MVID12SubscribingNumberId").innerHTML = convertToHowMany(data["subscribeNumber"]);
            }
            if(data["isFollowed"] == true){
                document.getElementById("runningVideoSubscriberButtonId").innerHTML = "SUBSCRIBED";
                document.getElementById("runningVideoSubscriberButtonId").style.color  = "white";
            }
            else if(data["isFollowed"] == false){
                document.getElementById("runningVideoSubscriberButtonId").innerHTML = "SUBSCRIBE";
                document.getElementById("runningVideoSubscriberButtonId").style.color = "red";
            }
            if(data["heLiked"] == true){
                document.getElementById("likeButtonMVID").style.color = "red";
            }
            else if(data["heLiked"] == false){
                document.getElementById("likeButtonMVID").style.color = "white";
            }
            if(data["heDisLiked"] == true){
                document.getElementById("disLikeButtonMVID").style.color = "red";
            }
            else if(data["heDisLiked"] == false){
                document.getElementById("disLikeButtonMVID").style.color = "";
            }
            document.getElementById("globalBackButtonId").style.display = "flex";  
            document.getElementById("videoBar").src = presentRunningVideo.details["video_url"]; //"Top 5 Sci-Fi Movies __ @MoviesKida.mp4"; //
            document.getElementById("videoBar").poster = presentRunningVideo.details["thumbnail_url"]; //"WIN_20240421_11_30_13_Pro.jpg"; //
            document.getElementById("videoRunningPage").style.display = "block";
            
            document.getElementById("mainVideoInformantioDivPart1TVT1").innerHTML = presentRunningVideo.details["title"];
            document.getElementById("MVIDchanelLogoImg").src = presentRunningVideo.details["chanellogo"];
            document.getElementById("MVID12chanelname").innerHTML = presentRunningVideo.details["chanelname"]
            document.getElementById("MVID12views").innerHTML = convertToHowMany(data["viewsOfVideo"]);
            document.getElementById("MVID12time").innerHTML = howTimeAgo;
            document.getElementById("likesMVID").innerHTML = convertToHowMany(data["likesOfVideo"]);

            document.getElementById("otherSectionDivDescriptionBoxId").innerHTML = presentRunningVideo.details["description"]
            document.getElementById("downNavMainDivId").children[positionDownNav].style.color = "white";
            document.getElementById("menuBoxDiv").children[sideNavboxBTP].style.color = "white";
            fetchingRealetedToComments("new-video")
            
        })
        .catch((err)=>{
            console.log(err)
        })
 
        
    }
}

document.getElementById("mainVideoInformantioDiv").addEventListener("click",(e)=>{
    if(e.target.id == "runningVideoSubscriberButtonId"){
        fetch("https://mytube-backend-2ki6.onrender.com/videoAddSLD/subAndUnSub",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),selected_video_id:presentRunningVideo.details["_id"]}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((data)=>data.json()).then((data)=>{
            console.log(data)
            if(data["massage"] == "success-sub"){
                document.getElementById("runningVideoSubscriberButtonId").innerHTML = "SUBSCRIBED";
                document.getElementById("MVID12SubscribingNumberId").innerHTML = convertToHowMany(data["subscribeNumber"]);
                document.getElementById("runningVideoSubscriberButtonId").style.color = "white";
                
            }
            else if(data["massage"] == "success-unsub"){
                document.getElementById("runningVideoSubscriberButtonId").innerHTML = "SUBSCRIBE";
                document.getElementById("MVID12SubscribingNumberId").innerHTML = convertToHowMany(data["subscribeNumber"]);
                document.getElementById("runningVideoSubscriberButtonId").style.color = "red";
             
            }
        })
        .catch((err)=>{
            console.log(err)
            massageBox("SOMETHING WRONG")
        })
               
    }
    if(e.target.id == "likeButtonMVID"){
        
      
fetch("https://mytube-backend-2ki6.onrender.com/videoAddSLD/likeAndUnLike",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),selected_video_id:presentRunningVideo.details["_id"]})
        })
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data)
            if(data["massage"] == "success-like"){
                document.getElementById("likeButtonMVID").style.color = "red";
                document.getElementById("disLikeButtonMVID").style.color = "white";
                document.getElementById("likesMVID").innerHTML = convertToHowMany(data["likesOfVideo"])
            }
            else if(data["massage"] == "success-unlike"){
                document.getElementById("likeButtonMVID").style.color = "white";
                document.getElementById("disLikeButtonMVID").style.color = "white";
                document.getElementById("likesMVID").innerHTML = convertToHowMany(data["likesOfVideo"]);
            }
        })
        .catch((err)=>{
            console.log(err)
            massageBox("SOMETHING WRONG")
        })
        

    }
    if(e.target.id == "disLikeButtonMVID"){
    
         fetch("https://mytube-backend-2ki6.onrender.com/videoAddSLD/dislikeAndUnDislike",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),selected_video_id:presentRunningVideo.details["_id"]})
        })
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data)
            if(data["massage"] == "success-dislike"){
                document.getElementById("likeButtonMVID").style.color = "white";
                document.getElementById("disLikeButtonMVID").style.color = "red";
                document.getElementById("likesMVID").innerHTML = convertToHowMany(data["likesOfVideo"]);
            }
            else if(data["massage"] == "success-undislike"){
                document.getElementById("likeButtonMVID").style.color = "white";
                document.getElementById("disLikeButtonMVID").style.color = "white";
                document.getElementById("likesMVID").innerHTML = convertToHowMany(data["likesOfVideo"]);
            }
        })
        .catch((err)=>{
            console.log(err)
            massageBox("SOMETHING WRONG")
        })
        
    }
    if(e.target.id == "desButtonMVID"){
document.getElementById("otherSectionDivDescriptionBoxId").style.display = "flex";
document.getElementById("otherSectionDivCommentBoxId").style.display = "none";
document.getElementById("desButtonMVID").style.color = "red";
document.getElementById("comButtonMVID").style.color = "white";

    }
    if(e.target.id == "comButtonMVID"){
        document.getElementById("otherSectionDivDescriptionBoxId").style.display = "none";
        document.getElementById("otherSectionDivCommentBoxId").style.display = "flex";
        document.getElementById("desButtonMVID").style.color = "white";
        document.getElementById("comButtonMVID").style.color = "red";
    }
})


function addCommentToVideo(chanellogo = "",chanelname = "",howtimeago = "",maincomment = "",type = 0){

   
    
    let DivCard1 = document.createElement("div");
    DivCard1.className = "commentCardClass";
    let ImgCard1 = document.createElement("img");
    ImgCard1.className = "chaneleLogoInCommentCardClass";
    ImgCard1.src = chanellogo;//varable
    DivCard1.appendChild(ImgCard1);
    let OtherSectionOfCard1 = document.createElement("div");
    OtherSectionOfCard1.className = "commentCardOthersClass";
    let OSC1Children1 = document.createElement("span");
    let ChaneleName = document.createElement("span");
    ChaneleName.className = "commentCardChanleNameClass";
    ChaneleName.innerHTML = chanelname;//variable
    OSC1Children1.appendChild(ChaneleName);
    OSC1Children1.innerHTML+=" - ";
    let OSC1Time = document.createElement("span");
    OSC1Time.className = "commentCardTimeAgoClass";
    OSC1Time.innerHTML = howtimeago;//variable
    OSC1Children1.appendChild(OSC1Time);
    OtherSectionOfCard1.appendChild(OSC1Children1);
    let mainComment1 = document.createElement("span");
    mainComment1.className = "commentCardMainContainClass";
    mainComment1.innerHTML = maincomment;//variable
    OtherSectionOfCard1.appendChild(mainComment1)
    DivCard1.appendChild(OtherSectionOfCard1)
    if(type == 0){
        document.getElementById("allOtherCommentsSectionDivId").insertBefore(DivCard1,document.getElementById("allOtherCommentsSectionDivId").children[0])
    }
    else if(type == 1){
        document.getElementById("allOtherCommentsSectionDivId").appendChild(DivCard1)
    }
    
}

function fetchingRealetedToComments(type){
    if(type == "new-video"){

        presentRunningVideo.allCommentDetails = {};
        presentRunningVideo.allCommentKeys = [];
        
        fetch("https://mytube-backend-2ki6.onrender.com/commentes/getCommentOfThisVideo",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),videoId:presentRunningVideo.details._id,allGettedComentsKeys:presentRunningVideo.allCommentKeys})
        })
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data)
            if(data["massage"]=="success"){
                
                document.getElementById("allOtherCommentsSectionDivId").innerHTML = "";
                
                for(let i = 0;i < data["allCommentsKeyList"].length;i++){
                    
                    presentRunningVideo.allCommentKeys.push(data["allCommentsKeyList"][i])
                    presentRunningVideo.allCommentDetails[data["allCommentsKeyList"][i]] = data["allCommentsDetailsList"][i];
                    addCommentToVideo(data["allCommentsChanelInfoList"][i].chanellogo,data["allCommentsChanelInfoList"][i].chanelname,onceUponAtime(data["allCommentsDetailsList"][i].createdAt),data["allCommentsDetailsList"][i].content,1)
                }
                
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    else if(type == "new-comments"){
  
        fetch("https://mytube-backend-2ki6.onrender.com/commentes/getCommentOfThisVideo",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),videoId:presentRunningVideo.details._id,allGettedComentsKeys:presentRunningVideo.allCommentKeys})
        })
        .then((data)=>data.json())
        .then((data)=>{
            if(data["massage"]=="success"){
                
                for(let i = 0;i < data["allCommentsKeyList"].length;i++){
                    
                    presentRunningVideo.allCommentKeys.push(data["allCommentsKeyList"][i])
                    presentRunningVideo.allCommentDetails[data["allCommentsKeyList"][i]] = data["allCommentsDetailsList"][i];
                    addCommentToVideo(data["allCommentsChanelInfoList"][i].chanellogo,data["allCommentsChanelInfoList"][i].chanelname,onceUponAtime(data["allCommentsDetailsList"][i].createdAt),data["allCommentsDetailsList"][i].content,1)
                }
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    else if(type == "addMyComments"){
       
        
        let commentValueFromInputTag = document.getElementById("commentInputId").value;
        if(commentValueFromInputTag == ""){
            massageBox("ENTER YOUR COMMENT")
            return null;
        }

        let commentValue = commentValueFromInputTag;
        document.getElementById("commentInputId").value = ""
        fetch("https://mytube-backend-2ki6.onrender.com/commentes/addMyComment",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),videoId:presentRunningVideo.details._id,allGettedComentsKeys:presentRunningVideo.allCommentKeys,comment:commentValue})
        })
        .then((data)=>data.json())
        .then((data)=>{
          
            if(data["massage"]=="success"){
               
            presentRunningVideo.allCommentDetails[data["commentDetails"]._id] = data["commentDetails"];
            presentRunningVideo.allCommentKeys.push(data["commentDetails"]._id)
            addCommentToVideo(data["chaneleDetails"].chanellogo,data["chaneleDetails"].chanelname,onceUponAtime(data["commentDetails"].createdAt),data["commentDetails"].content,0)
            
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

document.getElementById("containFeedDiv1").addEventListener("click",(e)=>{
    
    commonClickOnCardFun("containFeedDiv1",e)
    
})

document.getElementById("allMyVideoListOfMyChanelDivId").addEventListener("click",(e)=>{

    commonClickOnCardFun("allMyVideoListOfMyChanelDivId",e)

})

document.getElementById("subscribePageVideosDivId").addEventListener("click",(e)=>{

    commonClickOnCardFun("subscribePageVideosDivId",e)
    
})

document.getElementById("libraryPageWatchedVideosDivId").addEventListener("click",(e)=>{

    commonClickOnCardFun("libraryPageWatchedVideosDivId",e)
    
})

document.getElementById("libraryPageLikedVideosDivId").addEventListener("click",(e)=>{

    commonClickOnCardFun("libraryPageLikedVideosDivId",e)
    
})

//document.getElementById("searchPage").addEventListener("click",(e)=>{

    //commonClickOnCardFun("searchPage",e)
    
//})


document.getElementById("containFeedDiv1").addEventListener("scroll",(e)=>{
    
    if((document.getElementById("containFeedDiv1").scrollHeight - (document.getElementById("containFeedDiv1").clientHeight + document.getElementById("containFeedDiv1").scrollTop)) < 1){
        
        
        videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMixedVideosController");      
    } 
    /*else if(document.getElementById("containFeedDiv1").scrollTop == 0){
        massageBox("REFRESH")
    }*/       
})

document.getElementById("allMyVideoListOfMyChanelDivId").addEventListener("scroll",(e)=>{
    
    if((document.getElementById("allMyVideoListOfMyChanelDivId").scrollHeight - (document.getElementById("allMyVideoListOfMyChanelDivId").clientHeight + document.getElementById("allMyVideoListOfMyChanelDivId").scrollTop)) < 1){
        
        videosDetailsFetching("allMyVideoListOfMyChanelDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMyVideos");      
    }           
})

document.getElementById("subscribePageVideosDivId").addEventListener("scroll",(e)=>{
    
    if((document.getElementById("subscribePageVideosDivId").scrollHeight - (document.getElementById("subscribePageVideosDivId").clientHeight + document.getElementById("subscribePageVideosDivId").scrollTop)) < 1){
        subscribationChanelChangeAndGettingVideo("new-videos",allSubscribiedChanels.chhosenChanel.allDeatils.userId);
    }           
})

document.getElementById("libraryPageWatchedVideosDivId").addEventListener("scroll",(e)=>{
    
    if((document.getElementById("libraryPageWatchedVideosDivId").scrollHeight - (document.getElementById("libraryPageWatchedVideosDivId").clientHeight + document.getElementById("libraryPageWatchedVideosDivId").scrollTop)) < 1){
        
        videosDetailsFetching("libraryPageWatchedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingWatchedVideos");      
    }           
})

document.getElementById("libraryPageLikedVideosDivId").addEventListener("scroll",(e)=>{
    
    if((document.getElementById("libraryPageLikedVideosDivId").scrollHeight - (document.getElementById("libraryPageLikedVideosDivId").clientHeight + document.getElementById("libraryPageLikedVideosDivId").scrollTop)) < 1){
        
        videosDetailsFetching("libraryPageLikedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingLikedVideos");      
    }           
})

document.getElementById("allOtherCommentsSectionDivId").addEventListener("scroll",(e)=>{
    if((document.getElementById("allOtherCommentsSectionDivId").scrollHeight - (document.getElementById("allOtherCommentsSectionDivId").clientHeight + document.getElementById("allOtherCommentsSectionDivId").scrollTop)) < 1){
        fetchingRealetedToComments("new-comments")
    }
})

function formDataPostFunction(fromwhere){
    let url = "";
    let payload = {username:"Akash maity",fullname:"Akash maity",passward:12345};
    if(fromwhere == "register1Form" || fromwhere == "register2Form"){
        url = "https://mytube-backend-2ki6.onrender.com/user/register";
        if(!document.getElementById("username1").value || !document.getElementById("fullname1").value || !document.getElementById("passward1").value){
            massageBox("Enter All Details")
            return null;
        }
        payload = {username: (document.getElementById("username1").value || document.getElementById("username2").value),fullname:(document.getElementById("fullname1").value || document.getElementById("fullname2").value),passward:(document.getElementById("passward1").value || document.getElementById("passward2").value)};

    }
    else if(fromwhere == "login1Form" || fromwhere == "login2Form"){
        url = "https://mytube-backend-2ki6.onrender.com/user/login";
        if(!document.getElementById("username3").value || !document.getElementById("passward3").value){
            massageBox("Enter All Details")
            return null;
        }

        payload = {username: (document.getElementById("username3").value || document.getElementById("username4").value),passward:(document.getElementById("passward3").value || document.getElementById("passward4").value)};
    }
    else if(fromwhere == "logoutAccount"){
        url = "https://mytube-backend-2ki6.onrender.com/user/logout";
        if(!window.localStorage.getItem("username") || !window.localStorage.getItem("passward")){
            massageBox("No Way")
            return null;
        }
        payload = {username:window.localStorage.getItem("username"),passward:window.localStorage.getItem("passward")}
    }
    else if(fromwhere == "deleteAccount"){
        url = "https://mytube-backend-2ki6.onrender.com/user/deleteAccount";
        if(!window.localStorage.getItem("username") || !window.localStorage.getItem("passward")){
            massageBox("No Way")
            return null;
        }
        payload = {username:window.localStorage.getItem("username"),passward:window.localStorage.getItem("passward")}
    }
    
   
    fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },        
        method: 'POST',
        body:JSON.stringify(payload )
      })
        
        .then(data => data.json())
        .then(data => {
            if(fromwhere == "register1Form" || fromwhere == "register2Form"){
                if(data["massage"] == "registered"){
                    window.localStorage.setItem("status","registered")
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    alert(data["massage"])
                }
            }
            else if(fromwhere == "login1Form" || fromwhere == "login2Form"){
                if(data["massage"] == "login"){
                    window.localStorage.setItem("status","login")
                    window.localStorage.setItem("mytube_token",data["mytube_token"])
                    window.localStorage.setItem("username",data["username"])
                    window.localStorage.setItem("passward",data["passward"])
                    window.localStorage.setItem("fullname",data["fullname"])

                  
                    if(data["avatarProfile"]){
                        console.log("hhhh")
                        const imageAvatar = new Image();
                        imageAvatar.crossOrigin = 'Anonymous'; 
                        imageAvatar.src = data["avatarProfile"];
                        
                        
                        imageAvatar.onload = () => {
                            const canvas = document.createElement('canvas');
                            canvas.width = imageAvatar.width;
                            canvas.height = imageAvatar.height;
                            
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(imageAvatar, 0, 0);
                            
                            
                            const dataURL = canvas.toDataURL('image/png');
                            console.log("jjjdch")
                            
                            
                            window.localStorage.setItem("avatarProfile", dataURL);
                            document.getElementById("profileImageIdInput1").style.display = "block";
            document.getElementById("profileImageIdInput1").src = window.localStorage.getItem("avatarProfile");
            setHTMLtagByCheckingAccountDetails("reaload");
                            
                        };
                       
                        imageAvatar.onerror = (error) => {
                            console.error("Failed to load the image:", error);
                        };
                        
                    }

                    if(!data["avatarProfile"] || data["avatarProfile"] == ""){
                        setHTMLtagByCheckingAccountDetails("reaload");
                    }
                    

                    
                }
                else{
                    console.log(data["massage"])
                    
                }
            }
            else if(fromwhere == "logoutAccount"){
                if(data["massage"] == "logout"){                   
                    window.localStorage.clear()
                    window.localStorage.setItem("status","registered")
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    console.log(data["massage"])
                    
                }
            }
            else if(fromwhere == "deleteAccount"){
                if(data["massage"] == "deleteAccount"){                   
                    window.localStorage.clear()
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    console.log(data["massage"])
                    
                }
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
        
       
}



function readURL(input){

    if (input.files && input.files[0]) {

        var reader = new FileReader();
        reader.onload  =  function (e) {
            document.getElementById('profileImageIdInput1').style.display = "block";
            document.getElementById('profileImageIdInput1').src =  e.target.result;
            document.getElementById("profileImageUserName").value = localStorage.getItem("username");
            document.getElementById("profileImagePassward").value = localStorage.getItem("passward");
            document.getElementById("addProfileAvatarForm").submit()
            window.localStorage.setItem("avatarProfile",  e.target.result);
        }
        reader.readAsDataURL(input.files[0]);       
    }
}

let onChoosenOfMyChanel = 0;
let positionOfOMIN = ["VIDEOS","UPLOAD","PROFILE"]
document.getElementById("othersMychanelInformationNavigantionId").addEventListener("click" , (e)=>{
    if(e.target.className == "othersMychanelInformationNavigantionSubClass"){
        
        if(e.target.innerHTML == positionOfOMIN[onChoosenOfMyChanel]){
            return null;
        }
        if(e.target.innerHTML == "VIDEOS"){
            document.getElementById("uploadVideoSection").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "none";
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "block";
            document.getElementById("othersMychanelInformationNavigantionId").children[0].style.color = " rgb(158, 32, 53)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 0;

        }
        
        else if(e.target.innerHTML == "UPLOAD"){
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "none";
            document.getElementById("uploadVideoSection").style.display = "flex";
            document.getElementById("othersMychanelInformationNavigantionId").children[1].style.color = " rgb(158, 32, 53)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 1;
            
        }
        else if(e.target.innerHTML == "PROFILE"){
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "none";
            document.getElementById("uploadVideoSection").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "flex";
            document.getElementById("othersMychanelInformationNavigantionId").children[2].style.color = " rgb(158, 32, 53)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 2;
        }
    }
})
let onsubscribePageNavigation = 0;
let positionOfSPN = ["INFO","VIDEOS"];
document.getElementById("subscribePageNavigation").addEventListener("click",(e)=>{
    if(e.target.className == "subscribePageNavigationSubClass"){
        if(e.target.innerHTML == positionOfSPN[onsubscribePageNavigation]){
            return null;
        }
        if(e.target.innerHTML == "INFO"){
            document.getElementById("subscribeSelectedChanelInfoDivId").style.display = "block";
            document.getElementById("subscribePageVideosDivId").style.display = "none";
            document.getElementById("subscribePageNavigation").children[0].style.color = " rgb(158, 32, 53)";
            document.getElementById("subscribePageNavigation").children[onsubscribePageNavigation].style.color = "white";
            onsubscribePageNavigation = 0;

        }
        else if(e.target.innerHTML == "VIDEOS"){
            document.getElementById("subscribeSelectedChanelInfoDivId").style.display = "none";
            document.getElementById("subscribePageVideosDivId").style.display = "block";
            document.getElementById("subscribePageNavigation").children[onsubscribePageNavigation].style.color = "white";
            document.getElementById("subscribePageNavigation").children[1].style.color = "rgb(158, 32, 53)";
            onsubscribePageNavigation = 1;

        }
    }
})

let onlibraryPageNavigation = 0;
let positionOfLPN = ["WATCHED","LIKED"];
document.getElementById("libraryPageNavigation").addEventListener("click",(e)=>{
    if(e.target.className == "libraryPageNavigationSubClass"){
        if(e.target.innerHTML == positionOfSPN[onlibraryPageNavigation]){
            return null;
        }
        if(e.target.innerHTML == "WATCHED"){
            document.getElementById("libraryPageWatchedVideosDivId").style.display = "block";
            document.getElementById("libraryPageLikedVideosDivId").style.display = "none";
            document.getElementById("libraryPageNavigation").children[0].style.color = " rgb(158, 32, 53)";
            document.getElementById("libraryPageNavigation").children[onsubscribePageNavigation].style.color = "white";
            onsubscribePageNavigation = 0;
            if(allMyGetWatchVideos.allVideoKeyList.length == 0){
                videosDetailsFetching("libraryPageLikedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingWatchedVideos",0);      
            }

        }
        else if(e.target.innerHTML == "LIKED"){
            document.getElementById("libraryPageWatchedVideosDivId").style.display = "none";
            document.getElementById("libraryPageLikedVideosDivId").style.display = "block";
            document.getElementById("libraryPageNavigation").children[onsubscribePageNavigation].style.color = "white";
            document.getElementById("libraryPageNavigation").children[1].style.color = "rgb(158, 32, 53)";
            onsubscribePageNavigation = 1;
            if(allMyGetLikedVideos.allVideoKeyList.length == 0){
                videosDetailsFetching("libraryPageLikedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingLikedVideos",0);      
            }

        }
    }
})

function formUploadVideoInputFun(where){
    if(where == "videoFileId"){
        
        document.getElementById("notChoosenVideoDivId").style.display = "none";
        document.getElementById("notChoosenThumbnailDivId").style.display = "flex";
        document.getElementById("videoFileIdLabel").innerHTML = "CHANGE VIDEO";
        document.getElementById("videoFileIdLabel").style.color = "white";
    }
    else if(where == "thumbnailFileId" && document.getElementById("videoFileIdLabel").innerHTML == "CHANGE VIDEO"){

        document.getElementById("notChoosenVideoDivId").style.display = "none";
        document.getElementById("notChoosenThumbnailDivId").style.display = "none";
        document.getElementById("thumbnailFileiIdLabel").innerHTML = "CHANGE THUMBNAIL";
        document.getElementById("thumbnailFileiIdLabel").style.color = "white";
        let thumbnailImageFile = document.getElementById("thumbnailFileId").files[0];
        if(thumbnailImageFile){
            var reader1 = new FileReader();
            reader1.onload = (e)=>{
                document.getElementById("frontandVideoSowingImgId").src = e.target.result;
                document.getElementById("uploadVideoPogressingThumbnailId").src = e.target.result;
            }
            reader1.readAsDataURL(thumbnailImageFile)
        }
    }
}

function cancleUploadingVideo(){
    return null;
}

function uploadVideoWithDetailsToServer(username,passward,videoTitle,videoDescription,videoURL,thumbnailURL,genereOfVideo){
    const form = {username:username,passward:passward,title:videoTitle,description:videoDescription,video_url:videoURL,thumbnail_url:thumbnailURL,genare:genereOfVideo}
    fetch("https://mytube-backend-2ki6.onrender.com/video/uploadVideo",{
       
        method:"POST",
        body:JSON.stringify(form)
    })
    .then((data)=> data.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function uploadVideoWithDetailsCLoudinaryANDSErver(){
    let videoFile = document.getElementById("videoFileId")?.files[0];
    let thumbnailFile = document.getElementById("thumbnailFileId")?.files[0];

    let videoURL = "";
    let thumbnailURL = "";

    let videoTitle = document.getElementById("titleId").value;
    let videoDescription = document.getElementById("descriptionId").value;

    let username = localStorage.getItem("username");
    let passward = localStorage.getItem("passward");

    let genereOfVideo = document.getElementById("choosenGenereForVideoPId").innerHTML;

    
    if(!videoFile){
        massageBox("ENTER VIDEO FILE")
        return null;
    }

    if(!thumbnailFile){
        massageBox("CHOOSE THUMBNAIL ")
        return null;
    }

    if(!videoTitle){
        massageBox("ENTER VIDEO TITLE")
        return null;
    }

    if(!videoDescription){
        massageBox("ENTER DESCRIPTION")
        return null;
    }

    if(!username || !passward){
        massageBox("YOU HAVE NO ACCOUNT")
        return null;
    }

    if(!genereOfVideo){
        massageBox("ENTER GENERE MUST")
        return null;
    }
    console.log(videoFile,thumbnailFile,videoTitle,videoDescription,username,passward,genereOfVideo)
    document.getElementById("uploadVideoPogressingDivId").style.display = "flex";
    

    const formData = new FormData();
      formData.append('file',  videoFile);
      formData.append('upload_preset', 'mytubeVideo');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.cloudinary.com/v1_1/dt2ytxjlw/video/upload', true); 

     
      xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded * 100) / event.total);
          document.getElementById("pogressingDivMeterId").style.width = (percentComplete + "%");
          document.getElementById("pogressingDivMeterStatusId").innerHTML = (percentComplete + "%");
        }
      };


      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          videoURL = response.secure_url;

          if(videoURL){
                  const formData1 = new FormData();
                  formData1.append('file',  thumbnailFile);
                  formData1.append('upload_preset', 'mytubeThumbnail');
            
                  const xhr1 = new XMLHttpRequest();
                  xhr1.open('POST', 'https://api.cloudinary.com/v1_1/dt2ytxjlw/image/upload', true); 
            
                 
                  xhr1.upload.onprogress = function (event) {
                    if (event.lengthComputable) {
                      const percentComplete = Math.round((event.loaded * 100) / event.total);
                      document.getElementById("pogressingDivMeter2Id").style.width = (percentComplete + "%");
                      document.getElementById("pogressingDivMeterStatusId").innerHTML = "WAIT FOR A MOMENT";
                    }
                  };
            
            
                  xhr1.onload = function () {
                    if (xhr1.status >= 200 && xhr1.status < 300) {
                      const response = JSON.parse(xhr1.responseText);
                     
                      thumbnailURL = response.secure_url;
                              
                      uploadVideoWithDetailsToServer(username,passward,videoTitle,videoDescription,videoURL,thumbnailURL,genereOfVideo)
            
                    } else {
                      console.error('Upload failed:', xhr1.responseText);
                    }
                  };

                  xhr1.onloadend = function () {
                    if (xhr1.status >= 200 && xhr1.status < 300) {
                        document.getElementById("uploadVideoPogressingDivId").style.display = "none";
                    }
                  }
            
            
                  xhr1.onerror = function () {
                    console.error('Request error');
                  };
            
                  xhr1.send(formData1);

                }

        } else {
          console.error('Upload failed:', xhr.responseText);
        }
      };


      xhr.onerror = function () {
        console.error('Request error');
      };

      xhr.send(formData);
    
}

function openVideoGenereBox(){
    document.getElementById("videoGenereBoxId").style.display = "flex";
}

document.getElementById("videoGenereBoxId").addEventListener("click",(e)=>{
    if(e.target?.id == "videoGenereBoxId"){
        return null;
    }
    document.getElementById("choosenGenereForVideoPId").innerHTML = e.target.innerHTML;
    document.getElementById("videoGenereBoxId").style.display = "none";
})

function updateToServerFullName(){
    let fullname = document.getElementById("updateFullNameId").value;
    if(!fullname){
        massageBox("ENTER YOUR CHANELENAME")
        return null;
    }

    
        const form = {username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),newFullName:fullname}
        fetch("https://mytube-backend-2ki6.onrender.com/user/updateFullName",{
           
            method:"POST",
            body:JSON.stringify(form)
        })
        .then((data)=> data.json())
        .then((data)=>{
            if(data["massage"] == "success"){
                document.getElementById("accountProfileDetails").children[1].children[1].innerHTML = fullname;
                localStorage.setItem("fullname",fullname)
                document.getElementById('chaneleNameChangeBoxId').style.display = 'none';
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })   

}

function videosDetailsFetching(whereaddHTML,url, typeOfFetching = 1){
    if(FETCHED1 == "DONE"){

    let URL = url;
    let fetchVideoType = "mixed";
    let alreadyGettingVideosKey = [];
    let mainToConnecterVideosDeatils = {}
    if(typeOfFetching == 1 ){
        FETCHED1 = "UNDONE"
    }
      

    if(whereaddHTML == "containFeedDiv1"){
        
        if(containTypeForRefresh == "home"){
            fetchVideoType = "mixed";
            alreadyGettingVideosKey = homeContainAllVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = homeContainAllVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingMixedVideos";
        }
        else if(containTypeForRefresh == "music"){
            fetchVideoType = "music";
            alreadyGettingVideosKey = musicContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = musicContainVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingMusicVideos";
        }
        else if(containTypeForRefresh == "movie"){
            fetchVideoType = "movie";
            alreadyGettingVideosKey = movieContainVideoDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = movieContainVideoDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingMoviesVideos";
        }
        else if(containTypeForRefresh == "education"){
            fetchVideoType = "education";
            alreadyGettingVideosKey = educationContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = educationContainVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingEducationVideos";
        }
        else if(containTypeForRefresh == "sports"){
            fetchVideoType = "sports";
            alreadyGettingVideosKey = sportsContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = sportsContainVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingSportsVideos";
        }
        else if(containTypeForRefresh == "reels"){
            fetchVideoType = "reels";
            alreadyGettingVideosKey = rellsContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = rellsContainVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingReelsVideos";
        }
        else if(containTypeForRefresh == "animation"){
            fetchVideoType = "animation";
            alreadyGettingVideosKey = animationContainVideoDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = animationContainVideoDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingAnimationVideos";
        }
        else if(containTypeForRefresh == "vlog"){
            fetchVideoType = "vlog";
            alreadyGettingVideosKey = vlogContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingVlogVideos";
        }
        else if(containTypeForRefresh == "comedy"){
            fetchVideoType = "comedy";
            alreadyGettingVideosKey = comedyContainVideosDetails.allVideoKeyList;
            mainToConnecterVideosDeatils = comedyContainVideosDetails;
            URL = "https://mytube-backend-2ki6.onrender.com/api/videos/gettingComedyVideos";
        }
        if(alreadyGettingVideosKey.length > 25){
            console.log("gg")
            massageBox("NO VIDEOS")
            return null;
            
        }
        
    }
    else if(whereaddHTML == "allMyVideoListOfMyChanelDivId"){
        alreadyGettingVideosKey = myOwnGetAllVideosDetails.allVideoKeyList;
        mainToConnecterVideosDeatils = myOwnGetAllVideosDetails;
    }
    else if(whereaddHTML == "libraryPageWatchedVideosDivId"){
        alreadyGettingVideosKey = allMyGetWatchVideos.allVideoKeyList;
        mainToConnecterVideosDeatils = allMyGetWatchVideos;
    }
    else if(whereaddHTML == "libraryPageLikedVideosDivId"){
        alreadyGettingVideosKey = allMyGetLikedVideos.allVideoKeyList;
        mainToConnecterVideosDeatils = allMyGetLikedVideos;
    }
    
  
    const form = {username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),containType:fetchVideoType,alreadyGettingVideosKey:alreadyGettingVideosKey}
        fetch(URL,{
           
            method:"POST",
            body:JSON.stringify(form)
        })
        .then((data)=> data.json())
        .then((data)=>{
            FETCHED1 = "DONE"
            if(data["massage"] == "success"){
                
                       
                        for(let i = 0;i < data["allVideosKey"].length;i++){
                            
                            if(mainToConnecterVideosDeatils.allVideoKeyList.indexOf(data["allVideosKey"][i]) == -1){
                                mainToConnecterVideosDeatils.allVideosDetails[data["allVideosKey"][i]] = data["allVideoDetails"][i];
                                mainToConnecterVideosDeatils.allVideosDetails[data["allVideosKey"][i]].chanellogo = data["allVideosOwnerLN"][i].chanellogo;
                                mainToConnecterVideosDeatils.allVideosDetails[data["allVideosKey"][i]].chanelname = data["allVideosOwnerLN"][i].chanelname;
                                mainToConnecterVideosDeatils.allVideoKeyList.push(data["allVideosKey"][i])

                            }

                            let howTimeAgo = onceUponAtime(data["allVideoDetails"][i].createdAt);                           
                            addVideoFeedToVideoCard({id:data["allVideoDetails"][i]._id,thumbnail:data["allVideoDetails"][i].thumbnail_url,chanelLogo:data["allVideosOwnerLN"][i].chanellogo,videoTitle:data["allVideoDetails"][i].title,url:data["allVideoDetails"][i].video_url,fullname:data["allVideosOwnerLN"][i].chanelname, views:data["allVideoDetails"][i].views,time:howTimeAgo},whereaddHTML)
                            
                        }
                        
                        if(data["allVideosKey"].length == 0){
                            massageBox("NO VIDEOS")
                            return false;
                        }
                        else if(data["allVideosKey"].length > 0){
                            console.log(mainToConnecterVideosDeatils)
                            return true;
                        }                 
            }
            
        })
        .catch((err)=>{
            console.log(err)
            FETCHED1 = "DONE"
            massageBox("NO VIDEOS")

        })  
    } 
}


function gettingFetchingAllMySubscribedChaneles(){
   fetch("https://mytube-backend-2ki6.onrender.com/user/getALlMySubscribedChanel",{
        method:"POST",
        body:JSON.stringify({
            username:localStorage.getItem("username"),
            passward:localStorage.getItem("passward")
        })
    }).then((data)=> data.json()).then((data)=>{
         if(data["massage"] == "success"){
            console.log(data)
            if(data["subscribeChanelesIds"].length == 0){
                document.getElementById("SPPDChanelIconWithName").style.display = "none";
                document.getElementById("SPPDChanelInfoU1").style.display = "none";
            }
            if(data["subscribeChanelesIds"].length > 0){
                document.getElementById("SPPDChanelIconWithName").style.display = "flex";
                document.getElementById("SPPDChanelInfoU1").style.display = "flex";
            }
             allSubscribiedChanels.allChanelsKeyList = data["subscribeChanelesIds"];
            for(let i = 0;i < data["subscribeChanelesIds"].length; i++){
                if(i == 0){
                    allSubscribiedChanels.chhosenChanel.allDeatils = data["subscribeChanelesDetails"][i];
                    addChanelLogoWithNameCard({id:data["subscribeChanelesDetails"][i].userId,chanelLogo:data["subscribeChanelesDetails"][i].chanellogo,chanelname:data["subscribeChanelesDetails"][i].chaneleName},"subscibePageChaneleIconDiv",0);
                    document.getElementById("SPPDChanelIconId").src = data["subscribeChanelesDetails"][i].chanellogo;
                    document.getElementById("SPPDChanelNameId").innerHTML = data["subscribeChanelesDetails"][i].chaneleName;
                    document.getElementById("SPPDChanelTotalVideoNumbers").innerHTML = convertToHowMany(data["subscribeChanelesDetails"][i].uploadedVideoNumber);
                    document.getElementById("SPPDChanelTotalSubscribeNumbers").innerHTML = convertToHowMany(data["subscribeChanelesDetails"][i].subscribedNumber);
                }
                else{
                    addChanelLogoWithNameCard({id:data["subscribeChanelesDetails"][i].userId,chanelLogo:data["subscribeChanelesDetails"][i].chanellogo,chanelname:data["subscribeChanelesDetails"][i].chaneleName},"subscibePageChaneleIconDiv");
                }
                allSubscribiedChanels.allChanelsDetails[data["subscribeChanelesIds"][i]] = data["subscribeChanelesDetails"][i];              

            }
            
            console.log(allSubscribiedChanels)
            if(data["subscribeChanelesIds"].length > 0){
                subscribationChanelChangeAndGettingVideoFetch(allSubscribiedChanels.chhosenChanel.allDeatils.userId)
            }
            

         }
    }).catch((err)=>{
        console.log(err)
    })

}  
    
let presentChanelNumberInRoom = 0;
document.getElementById("subscibePageChaneleIconDiv").addEventListener("click",(e)=>{
    if(e.target?.id){
        return null;
    }
    let cardId;
    if(e.target?.className == "subscribeingChanelCardClass"){
        cardId = e.target.id;
    }
    else if(e.target?.className == "subscribeingChanelCardImageClass"){
        cardId = e.target.parentNode.id;
    }
    else if(e.target?.className == "subscribeingChanelCardChanelName"){
        cardId = e.target.parentNode.id;
    }
    if(allSubscribiedChanels.allChanelsKeyList.indexOf(cardId) == presentChanelNumberInRoom){
        console.log("hello guys")
        return null;
    }
    else if(allSubscribiedChanels.allChanelsKeyList.indexOf(cardId) == -1){
        console.log("something is wrong.")
    }
    else{
        subscribationChanelChangeAndGettingVideo("new-cahanel",cardId)
    }
    

})
function subscribationChanelChangeAndGettingVideoFetch(cardId){
    fetch("https://mytube-backend-2ki6.onrender.com/api/videos/otherChaneleVideos",{
        method:"POST",
        body:JSON.stringify({
            username:localStorage.getItem("username"),
            passward:localStorage.getItem("passward"),
            chaneleId:cardId,
            allgettedVideosKeyList:allSubscribiedChanels.chhosenChanel.videoKeyDetails
        })

    }).then((data)=>data.json()).then((data)=>{
        if(data["massage"] == "success"){
            //allSubscribiedChanels.chhosenChanel.videoKeyDetails = data["allVideosKeyList"];
            for(let i = 0;i < data["allVideosKey"].length;i++){
                allSubscribiedChanels.chhosenChanel.allDeatils[data["allVideosKey"][i]] = data["allVideoDetails"][i];
                if(allSubscribiedChanels.chhosenChanel.videoKeyDetails.indexOf(data["allVideosKey"][i]) == -1){
                    allSubscribiedChanels.chhosenChanel.videosDetails[data["allVideosKey"][i]] = data["allVideoDetails"][i];
                    allSubscribiedChanels.chhosenChanel.videosDetails[data["allVideosKey"][i]].chanellogo = data["allVideosOwnerLN"][i].chanellogo;
                    allSubscribiedChanels.chhosenChanel.videosDetails[data["allVideosKey"][i]].chanelname = data["allVideosOwnerLN"][i].chanelname;
                    allSubscribiedChanels.chhosenChanel.videoKeyDetails.push(data["allVideosKey"][i])

                }
                let howTimeAgo = onceUponAtime(data["allVideoDetails"][i].createdAt);
                
                
                //addVideoFeedToVideoCard({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"},"containFeedDiv1")
                addVideoFeedToVideoCard({id:data["allVideoDetails"][i]._id,thumbnail:data["allVideoDetails"][i].thumbnail_url,chanelLogo:data["allVideosOwnerLN"][i].chanellogo,videoTitle:data["allVideoDetails"][i].title,url:data["allVideoDetails"][i].video_url,fullname:data["allVideosOwnerLN"][i].chanelname, views:convertToHowMany(data["allVideoDetails"][i].views),time:howTimeAgo},"subscribePageVideosDivId")

            }
        }
    }).catch((err)=>{
        console.log(err)
    })
}
function subscribationChanelChangeAndGettingVideo(type,cardId){
    if(type == "new-cahanel"){
        allSubscribiedChanels.chhosenChanel.allDeatils = allSubscribiedChanels.allChanelsDetails[cardId];
        
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.border = "";
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.width = "48px";
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.height = "50px";
        presentChanelNumberInRoom = allSubscribiedChanels.allChanelsKeyList.indexOf(cardId);
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.border = "1px solid rgb(214, 40, 40)";
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.width = "47px";
        document.getElementById("subscibePageChaneleIconDiv").children[presentChanelNumberInRoom].children[0].style.height = "59px";
        document.getElementById("SPPDChanelIconId").src = allSubscribiedChanels.allChanelsDetails[cardId].chanellogo;
        document.getElementById("SPPDChanelNameId").innerHTML = allSubscribiedChanels.allChanelsDetails[cardId].chaneleName;
        document.getElementById("SPPDChanelTotalVideoNumbers").innerHTML = convertToHowMany(allSubscribiedChanels.allChanelsDetails[cardId].uploadedVideoNumber);
        document.getElementById("SPPDChanelTotalSubscribeNumbers").innerHTML = convertToHowMany(allSubscribiedChanels.allChanelsDetails[cardId].subscribedNumber);
        allSubscribiedChanels.chhosenChanel.videosDetails = {}
        allSubscribiedChanels.chhosenChanel.videoKeyDetails = []
        document.getElementById("subscribePageVideosDivId").innerHTML = "";
        subscribationChanelChangeAndGettingVideoFetch(cardId)


    }
    else if (type == "new-videos"){
        console.log("lllll")
        subscribationChanelChangeAndGettingVideoFetch(cardId)
        //videosDetailsFetching("subscribePageVideosDivId","https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/video/allMyOwnVideos");      
    }
}


function unsbscribeFromChaneleInfo(){
    fetch("https://mytube-backend-2ki6.onrender.com/videoAddSLD/subAndUnSubById",{
            method:"POST",
            body:JSON.stringify({username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),userId:allSubscribiedChanels.chhosenChanel.allDeatils.userId}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((data)=>data.json()).then((data)=>{
            console.log(data)
            if(data["massage"] == "success-sub"){
                document.getElementById("SPPDChanelSubscribingButtonId").innerHTML = "SUBSCRIBED";
                document.getElementById("SPPDChanelTotalSubscribeNumbers").innerHTML = convertToHowMany(data["subscribeNumber"])
                document.getElementById("SPPDChanelSubscribingButtonId").style.color = "white";
                
            }
            else if(data["massage"] == "success-unsub"){
                document.getElementById("SPPDChanelSubscribingButtonId").innerHTML = "SUBSCRIBE";
                document.getElementById("SPPDChanelTotalSubscribeNumbers").innerHTML = convertToHowMany(data["subscribeNumber"])
                document.getElementById("SPPDChanelSubscribingButtonId").style.color = "red";
             
            }
        })
        .catch((err)=>{
            console.log(err)
            massageBox("SOMETHING WRONG")
        })
}


document.getElementById("SPPDChanelSubscribingButtonId").onclick = ()=>{
    unsbscribeFromChaneleInfo()
}

let buttonTopageHistorySupport1 = ["home","music","education","sports","reels","movie","animation","vlog","comedy","subsciptionPage","libraryPage","mychanelePage","settingPage"]
let buttonTopageHistorySupport2 = ["home","reels","subsciptionPage","libraryPage"]
let buttonTopageHistorySupport3 = ["searchPage","videoRunningPage","chanelIfoVideoSpacialPage"]
let allHistoryVideoRunningVideosIdArray = [];
let allHistoryChanelInfoIdArray = [];
let allsearchPageSearchItemNamArray = [];//important
document.getElementById("globalBackButtonId").onclick = ()=>{
    console.log(globalPageHistoryArray)
    if(globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "searchPage"){
        allsearchPageSearchItemNamArray.pop()
    }
    if(globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "videoRunningPage"){
        allHistoryVideoRunningVideosIdArray.pop()
        document.getElementById("mainVideoRunningDiv").style.display = "block";
            document.getElementById("videoBar").controls = true;
            document.getElementById("mainVideoRunningDivMiniVersionTollKit").style.display = "none";
            videoRunningBoxMiniView = false;
            if(window.innerWidth < 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "100%";
                document.getElementById("mainVideoRunningDiv").style.height = "35vh";
                document.getElementById("videoBar").style.height = "35vh";
                
            }
            else if(window.innerWidth > 600){
                document.getElementById("mainVideoRunningDiv").style.top = "50px";
                document.getElementById("mainVideoRunningDiv").style.left = "0px";
                document.getElementById("mainVideoRunningDiv").style.width = "75%";
                document.getElementById("mainVideoRunningDiv").style.height = "75vh";
                document.getElementById("videoBar").style.height = "75vh";
    
            }
    }
    if(globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "chanelIfoVideoSpacialPage"){
        allHistoryChanelInfoIdArray.pop()
    }
    if(globalPageHistoryArray.length < 2){
        return null;
    }
    if(globalPageHistoryArray[globalPageHistoryArray.length -1][0] == "videoRunningPage"){
        //document.getElementById("videoBar").pause();
        
        //document.getElementById("videoBar").removeAttribute('src');
        //document.getElementById("videoBar").load();
        bigViewOfVideoBoxTominViewFunction()
    }
    if(globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "containFeedDiv1"){
        console.log(buttonTopageHistorySupport1.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][1]))
        document.getElementById("menuBoxDiv").children[buttonTopageHistorySupport1.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][1])].style.color = "rgb(158, 32, 53)";
        sideNavboxBTP = buttonTopageHistorySupport1.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][1]);
        if(globalPageHistoryArray[globalPageHistoryArray.length -2][1] == "home" || globalPageHistoryArray[globalPageHistoryArray.length -2][1] == "reels"){
            document.getElementById("downNavMainDivId").children[buttonTopageHistorySupport2.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][1])].style.color = "rgb(158, 32, 53)";
            positionDownNav = buttonTopageHistorySupport2.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][1]);
        }
        
        document.getElementById(presentContain).style.display = "none";///more logic sub pages
        presentContain = "containFeedDiv1"
        containTypeForRefresh = globalPageHistoryArray[globalPageHistoryArray.length -2][1];
        
            globalPageHistoryArray.pop();
            if(globalPageHistoryArray.length == 1){
                document.getElementById("globalBackButtonId").style.display = "none";
            }       
        
        document.getElementById("containFeedDiv1").style.display = "block";//more loc

        menuBox = "off";
        document.getElementById("menuBoxDiv").style.display = "none"; 
        document.getElementById("menuBoxBackSupportBox").style.display = "none";
    }
    else if(buttonTopageHistorySupport3.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][0]) != -1){
        document.getElementById(presentContain).style.display = "none";///more logic sub pages
        presentContain = globalPageHistoryArray[globalPageHistoryArray.length -2][0]
        containTypeForRefresh = "none";
        
            globalPageHistoryArray.pop();
            if(globalPageHistoryArray.length == 1){
                document.getElementById("globalBackButtonId").style.display = "none";
            }
            
        
        
        
        document.getElementById(presentContain).style.display = "block";//more loc
        menuBox = "off";
        document.getElementById("menuBoxDiv").style.display = "none"; 
        document.getElementById("menuBoxBackSupportBox").style.display = "none";
    }
    else{
        
        document.getElementById("menuBoxDiv").children[buttonTopageHistorySupport1.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][0])].style.color = "rgb(158, 32, 53)";
        sideNavboxBTP = buttonTopageHistorySupport1.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][0]);
        if(globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "subsciptionPage" || globalPageHistoryArray[globalPageHistoryArray.length -2][0] == "libraryPage"){
            document.getElementById("downNavMainDivId").children[buttonTopageHistorySupport2.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][0])].style.color = "rgb(158, 32, 53)";
            positionDownNav = buttonTopageHistorySupport2.indexOf(globalPageHistoryArray[globalPageHistoryArray.length -2][0]);
        }
        document.getElementById(presentContain).style.display = "none";///more logic sub pages
        presentContain = globalPageHistoryArray[globalPageHistoryArray.length -2][0]
        containTypeForRefresh = "none";
        globalPageHistoryArray.pop();
            if(globalPageHistoryArray.length == 1){
                document.getElementById("globalBackButtonId").style.display = "none";
            }
        
        
        document.getElementById(presentContain).style.display = "block";//more loc

        menuBox = "off";
        document.getElementById("menuBoxDiv").style.display = "none"; 
        document.getElementById("menuBoxBackSupportBox").style.display = "none";
    }
    
}

if(navigator.onLine == true){

if(localStorage.getItem("username") && localStorage.getItem("passward")){
    videosDetailsFetching("containFeedDiv1","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMixedVideosController",0);
    videosDetailsFetching("allMyVideoListOfMyChanelDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingMyVideos",0);
    videosDetailsFetching("libraryPageWatchedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingWatchedVideos",0); 
    videosDetailsFetching("libraryPageLikedVideosDivId","https://mytube-backend-2ki6.onrender.com/api/videos/gettingLikedVideos",0);      
    gettingFetchingAllMySubscribedChaneles()
}
}
