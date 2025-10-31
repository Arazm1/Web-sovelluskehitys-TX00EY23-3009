function Main(){
    const mainDiv = document.getElementById('target');

    //Browser Info
    const browserInfoDiv = document.createElement('div');
    const browserName = document.createElement('p');
    const browserVersion = document.createElement('p');

    //OS
    const OSName = document.createElement('p');

    //Screen Info
    const screenInfo = document.createElement('p');

    //Available screen info
    const availableScreenInfo = document.createElement('p');

    //Date and time
    const dateTimeDiv = document.createElement('div');
    const dateInfo = document.createElement('p');
    const timeInfo = document.createElement('p');


    browserInfoDiv.appendChild(browserName);
    browserInfoDiv.appendChild(browserVersion);

    dateTimeDiv.appendChild(dateInfo);
    dateTimeDiv.appendChild(timeInfo);

    //browser
    mainDiv.appendChild(browserInfoDiv);
    //os
    mainDiv.appendChild(OSName);
    //screen info
    mainDiv.appendChild(screenInfo);
    //available screen
    mainDiv.appendChild(availableScreenInfo);
    //date time
    mainDiv.appendChild(dateTimeDiv);

    const currentDate = new Date();
    const currDate = getDate(currentDate);
    const currTime = getTime(currentDate);

    const navUA = navigator.userAgent;
    const navUAData = navigator.userAgentData;

    //display
    browserName.textContent = "Browser: " + getBrowserName(navUA);
    browserVersion.textContent = "Browser version: " + getBrowserVersion(navUA);
    OSName.textContent = "System OS: " + getSystemOS(navUAData);
    screenInfo.textContent = "Browser screen size: " + getScreenWidthNoWin() + "px * " + getScreenHeightNoWin() + "px";
    availableScreenInfo.textContent = "Total screen size: " + (getTotalScreenWidth() + "px * " + getTotalScreenHeight()) + "px";
    dateInfo.textContent = "Date: " + currDate;
    timeInfo.textContent = "Time: " + currTime;
}


function getBrowserName(userAgent){
    if(userAgent.includes('Firefox')){
        return "Mozilla Firefox"
    }
    else if(userAgent.includes('SamsungBrowser')){
        return "Samsung Internet";
    }
    else if(userAgent.includes('Opera') || userAgent.includes("OPR")){
        return "Opera";
    }
    else if(userAgent.includes('Edge')){
        return "Microsoft Edge - Legacy";
    }
    else if(userAgent.includes('Edg')){
        return "Microsoft Edge - Chromium";
    }
    else if(userAgent.includes('Chrome')){
        return "Google Chrome or Chromium";
    }
    else if(userAgent.includes('Safari')){
        return "Apple Safari";
    }
    else{
        return "Unknown browser...";
    }
}

function getBrowserVersion(userAgent){
    if (userAgent.includes("Firefox")) {
        return userAgent.match(/Firefox\/(\d+)/)?.[1];
    } 
    else if (userAgent.includes("SamsungBrowser")) {
        return userAgent.match(/SamsungBrowser\/(\d+)/)?.[1];
    } 
    else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        return userAgent.match(/(OPR|Opera)\/(\d+)/)?.[2];
    } 
    else if (userAgent.includes("Edge")) {
        return userAgent.match(/Edge\/(\d+)/)?.[1];
    } 
    else if (userAgent.includes("Edg")) {
        return userAgent.match(/Edg\/(\d+)/)?.[1];
    } 
    else if (userAgent.includes("Chrome")) {
        return userAgent.match(/Chrome\/(\d+)/)?.[1];
    } 
    else if (userAgent.includes("Safari")) {
        return userAgent.match(/Version\/(\d+)/)?.[1];
    }
    else{
        return "Unknown browser version...";
    }
}


function getSystemOS(userAgentData){
    if(userAgentData.platform){
        return userAgentData.platform;
    }
    if(navigator.platform){
        return navigator.platform;
    }
}


function getTotalScreenWidth(){
    return screen.width;
}

function getTotalScreenHeight(){
    return screen.height;
}

function getScreenWidthNoWin(){
    return screen.availWidth;
}

function getScreenHeightNoWin(){
    return screen.availHeight;
}

function getDate(currentDate){
    const dayOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return currentDate.toLocaleDateString('fi-FI', dayOptions);

}

function getTime(currentHour){
    const hourOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };

    return currentHour.toLocaleTimeString('fi-FI', hourOptions);


}

Main();