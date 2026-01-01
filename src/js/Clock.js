// import { useState,useEffect } from "react";
// export const  startTime=()=> {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
    
//     let am_pm = "ص";
//     // Setting time for 12 Hrs format
//     if (hours >= 12) {
//         if (hours > 12) hours -= 12;
//         am_pm = "م";
//     } else if (hours === 0) {
//         hours = 12;
//         am_pm = "ص";
//     }
 
//     let formattedHours = hours.toString().padStart(2, '0');
//     let formattedMinutes = minutes.toString().padStart(2, '0');
//     let formattedSeconds = seconds.toString().padStart(2, '0');
    
    
//     let timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${am_pm}`;
//     document.getElementById('clock').innerHTML =  timeString;
//     setTimeout(startTime, 1000);
//   }
  
//  export const getDate=()=>{
//     const today = new Date();
//     let DD=today.getDay();
//     let MM=today.getMonth();
//     let YY=today.getFullYear();
//     let formatDays=DD.toString().padStart(2, '0');
//     let formatmonth=MM.toString().padStart(2, '0');
//     let formatyesrs=YY.toString().padStart(2, '0');
//     let currentDate = `${formatDays}:${formatmonth}:${formatyesrs}`;
//    document.getElementById('date1').innerHTML=currentDate;
//    setInterval( getDate, 10000);
//  }


    
  
//     const updateDate = () => {
//       const today = new Date();
//       const DD = today.getDate();
//       const MM = today.getMonth() + 1;
//       const YY = today.getFullYear();
  
//       const formatDays = DD.toString().padStart(2, '0');
//       const formatMonth = MM.toString().padStart(2, '0');
//       const formattedDate = `${formatDays}:${formatMonth}:${YY}`;
      
//       document.getElementById('date1').innerHTML=formattedDate;
//       setInterval(updateDate,1000)
//  }  






