import "./Moon.css";
import React, {useState, useEffect} from "react";
function Moon(){
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width = device-width, initial-scale=1.0, maximum-scale = 1.0, minimum-scale = 1.0";
    document.getElementsByTagName('head')[0].appendChild(meta);
    window.onload = function(){
        var star = document.getElementById('star').children;
        for(var i = 0 ; i< star.length; i++){
            var t = parseInt(Math.random()*30)-10;
            var l = parseInt(Math.random()*30)+10;
            var delay = parseInt(Math.random()*9999);
            star[i].style.top = t+ "rem";
            star[i].style.left = l + "rem";
            star[i].style.animationDelay  = delay + "ms";
                }
    }
    return(
        <div class = "container">
            <nav class = "menu wide-menu">
                <ul>
                <li><a href ="#">MARKET TREND</a></li>
                <li><a href ="#">CHART</a></li>
                <li><a href ="#">ABOUT</a></li>
                <li><a href ="#">CONTACT US</a></li>
                </ul>
            </nav> 
            <nav class = "menu mobile-menu">
                <ul>
                <li><button type = "button" onclick = "location.href = #"></button></li>
                <li><button type = "button" onclick = "location.href = #"></button></li>
                <li><button type = "button" onclick = "location.href = #"></button></li>
                <li><button type = "button" onclick = "location.href = #"></button></li>
                </ul>
            </nav>
            
            <input id = "flip" aria-label="Flip-circle" class="circle_control" type="checkbox"/>
                <label for="flip" class= "rabbit_rocket">
                    <div class= "front">
                        <div class= "front_mask">
                            <div class="moon">
                                <div class="creator crater1"></div>
                                <div class="creator crater2"></div>
                                <div class="creator crater3"></div>
                                <div class="creator crater4"></div>
                                <div class="creator crater5"></div>
                                <div class="creator crater6"></div>
                                <div class="creator crater7"></div>
                            </div>
                            <div id="star">
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>   <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>   <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>   <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                <div class="shooting_star"></div>
                                
                            </div>
                        
                            <div class="rocket">
                                <div class="rabbit">
                                    <div class="rabbit_head">
                                        <div class = "rabbit_face"> 
                                            <div class="rabbit_ear rabbit_right_ear"></div>
                                            <div class="rabbit_ear rabbit_left_ear"></div>
                                            <div class="rabbit_ear_border"></div> 
                                            <div class="rabbit_eye rabbit_right_eye"></div>
                                            <div class="rabbit_eye rabbit_left_eye"></div>
                                            <div class="rabbit_mouse"></div>
                                            <div class="rabbit_cheek rabbit_right_cheek"></div>
                                            <div class="rabbit_cheek rabbit_left_cheek"></div>
                                        </div>
                                        <div class="rabbit_body">
                                            <div class="rabbit_right_hand"></div>
                                            <div class="rabbit_right_left"></div>
                                            <div class="rabbit_tail"></div>
                                        </div>
                                    </div>  
                                </div>
                                <svg class="c-rocket" xmlns="http://www.w3.org/2000/svg" width="35rem" height="35rem" viewBox="-100 -100 700 700">
                                    <path d="M359.828 328.707L246.761 378.84l37.333 56.533 52.267-48c-5.333-21.333 3.2-44.8 23.467-58.666z" fill="rgb(159,209,38)"/>
                                    <path d="M208.361 415.107C551.828 284.973 510.228-3.027 511.294 1.24c4.267 1.067-283.733-39.467-413.867 302.933l110.934 110.934z" fill="rgb(255, 119, 65)"/>
                                    <path d="M359.828 328.707L246.761 378.84l37.333 56.533 52.267-48c-5.333-21.333 3.2-44.8 23.467-58.666z" fill="rgb(255, 119, 65)"/>                
                                    <path d="M305.428 512.173l65.067-65.067c23.467-23.467 36.267-55.467 36.267-88.533-33.067 0-65.067 12.8-88.533 36.267l-65.067 65.067 52.266 52.266z" fill="rgb(159,209,38)"/>
                                    <path d="M120.894 176.173l-42.667 53.333 56.533 36.267 50.133-113.067c-15.999 21.334-41.599 29.867-63.999 23.467z" fill="rgb(255, 119, 65)"/>                
                                    <path d="M.361 207.107l65.067-65.067c23.467-23.467 55.467-36.267 88.533-36.267 0 33.067-12.8 65.067-36.267 88.533l-65.067 65.067L.361 207.107z" fill="rgb(159,209,38)"/> 
                                    <g fill="rgb(111, 146, 61)"><path d="M322.816 495.137l-17.347 17.347-52.042-52.041 17.348-17.348zM69.392 241.284L52.045 258.63.003 206.59l17.347-17.347z"/></g>
                                    <g fill="rgb(111, 146, 61)"><path d="M108.094 279.64c-3.2 8.533-6.4 16-9.6 24.533L209.428 414.04c8.533-3.2 17.067-6.4 24.533-9.6l-125.867-124.8z"/></g>
                                    <path d="M332.094 33.24l146.133 146.133c4.267-8.533 7.467-17.067 10.667-24.533L356.628 23.64c-7.467 3.2-16 6.4-24.534 9.6z" fill="rgb(255, 119, 65)"/>
                                    <path d="M488.894 154.84c32-86.4 22.4-155.733 22.4-153.6 2.133 0-67.2-8.533-153.6 22.4l131.2 131.2z" fill="rgb(159,209,38)"/>
                                </svg>
                                <div class="flame">
                                    <div class="flame1"></div>
                                    <div class="flame2"></div>
                                    <div class="flame3"></div>
                                    <div class="flame4"></div>
                                    <div class="flame5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class= "back">
                        <div class="back_mask">
                            <div class="moon_back">
                                <div class="creator crater1"></div>
                                <div class="creator crater2"></div>
                                <div class="creator crater3"></div>
                                <div class="creator crater4"></div>
                                <div class="creator crater5"></div>
                                <div class="creator crater6"></div>
                                <div class="creator crater7"></div>
                            </div>
                            <div class="rabbit_back">
                                <div class="rabbit_head">
                                    <div class = "rabbit_face"> 
                                        <div class="rabbit_ear rabbit_right_ear"></div>
                                        <div class="rabbit_ear rabbit_left_ear"></div>
                                        <div class="rabbit_ear_border"></div> 
                                        <div class="rabbit_eye rabbit_right_eye"></div>
                                        <div class="rabbit_eye rabbit_left_eye"></div>
                                        <div class="rabbit_mouse"></div>
                                        <div class="rabbit_cheek rabbit_right_cheek"></div>
                                        <div class="rabbit_cheek rabbit_left_cheek"></div>
                                    </div>
                                </div>  
                                <div class="rabbit-chest"></div>
                                <div class="rabbit_hand rabbit_right_hand"></div>
                            </div>
                            <div class="coin_flag">
                                <div class="flag_bar"></div>
                                <div class="flag">
                                    <div class="coin">
                                        <div class="coin_text">B</div>
                                     </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </label>
            <div class="title">To The Moon</div>
        </div>    
    );

}
export default Moon;
