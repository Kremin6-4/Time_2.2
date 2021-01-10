import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function   tick() {
   
   const element = (
     
     <div class="clock">
       <h1 class="time">{ new Date().toLocaleTimeString() }</h1>
       <h1 class="date">{ new Date().toLocaleDateString() }</h1>
     </div>
     
   );
   
    
   ReactDOM.render(
     element,
     document.getElementById('root')
   );
   
 }
 setInterval(tick, 1000);
