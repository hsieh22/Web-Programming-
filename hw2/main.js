//window.onload = function() {

// flag to indicate pin or unpin
var pin = true;
var remove_number = 0;

// remove user when cross is click
user1_cross = document.getElementById('cross1');
user1_cross.addEventListener("click", 
    function(){
        user1 = document.getElementById('user-cross1'); 
        //user1.innerHTML = "<div><div/> <style> .User #user-cross{ display:none}</style>";
        user1.style.display= 'none';
        user1.parentNode.removeChild(user1);

        remove_number = remove_number +1;

        if(remove_number===5){
            if(pin){
                sidebar = document.getElementById('Sidebar');
                document.body.removeChild(sidebar);
            }
            
            document.body.style.width = "100vw";
            main_user = document.getElementById('Main'); 
            main_user.style.height = "90vh";
            main_user.style.width = "100vw";
            main_user.style.background = "black";
            main_user.removeAttribute("class"); 
            
            pastmic = document.getElementsByClassName('sidebar_mic');
            pastmic[0].parentNode.removeChild(pastmic[0]);

            main_name = document.getElementById('main_name');
            main_name.setAttribute("class","main_name")
            main_name.style.bottom = "7%";

            main_icon = document.getElementById('main_icon');
            main_icon.setAttribute("class","Usericon_big");

            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main_pin2.style.bottom = "7%";
            main_user.appendChild(main_pin2);

            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main_user.appendChild(main_pin);
        }
    }
)

user2_cross = document.getElementById('cross2');
user2_cross.addEventListener("click", 
    function(){
        user1 = document.getElementById('user-cross2'); 
        //user1.innerHTML = "<div><div/> <style> .User #user-cross{ display:none}</style>";
        user1.style.display= 'none';
        user1.parentNode.removeChild(user1);

        remove_number = remove_number +1;

        console.log(remove_number);
        if(remove_number===5){
            if(pin){
                sidebar = document.getElementById('Sidebar');
                document.body.removeChild(sidebar);
            }

            document.body.style.width = "100vw";
            main_user = document.getElementById('Main'); 
            main_user.style.height = "90vh";
            main_user.style.width = "100vw";
            main_user.style.background = "black";
            main_user.removeAttribute("class"); 
            
            pastmic = document.getElementsByClassName('sidebar_mic');
            pastmic[0].parentNode.removeChild(pastmic[0]);

            main_name = document.getElementById('main_name');
            main_name.setAttribute("class","main_name")
            main_name.style.bottom = "7%";

            main_icon = document.getElementById('main_icon');
            main_icon.setAttribute("class","Usericon_big");

            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main_pin2.style.bottom = "7%";
            main_user.appendChild(main_pin2);

            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main_user.appendChild(main_pin);
        }
    }
)

user3_cross = document.getElementById('cross3');
user3_cross.addEventListener("click", 
    function(){
        user1 = document.getElementById('user-cross3'); 
        //user1.innerHTML = "<div><div/> <style> .User #user-cross{ display:none}</style>";
        user1.style.display= 'none';
        user1.parentNode.removeChild(user1);

        remove_number = remove_number +1;

        console.log(remove_number);
        if(remove_number===5){
            if(pin){
            sidebar = document.getElementById('Sidebar');
            document.body.removeChild(sidebar);
            }

            document.body.style.width = "100vw";
            main_user = document.getElementById('Main'); 
            main_user.style.height = "90vh";
            main_user.style.width = "100vw";
            main_user.style.background = "black";
            main_user.removeAttribute("class"); 
            
            pastmic = document.getElementsByClassName('sidebar_mic');
            pastmic[0].parentNode.removeChild(pastmic[0]);

            main_name = document.getElementById('main_name');
            main_name.setAttribute("class","main_name")
            main_name.style.bottom = "7%";

            main_icon = document.getElementById('main_icon');
            main_icon.setAttribute("class","Usericon_big");

            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main_pin2.style.bottom = "7%";
            main_user.appendChild(main_pin2);

            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main_user.appendChild(main_pin);           
        }
    }
)

user4_cross = document.getElementById('cross4');
user4_cross.addEventListener("click", 
    function(){
        user1 = document.getElementById('user-cross4'); 
        //user1.innerHTML = "<div><div/> <style> .User #user-cross{ display:none}</style>";
        user1.style.display= 'none';
        user1.parentNode.removeChild(user1);

        remove_number = remove_number +1;

        console.log(remove_number);
        if(remove_number===5){
            if(pin){
                sidebar = document.getElementById('Sidebar');
                document.body.removeChild(sidebar);
            }

            document.body.style.width = "100vw";
            main_user = document.getElementById('Main'); 
            main_user.style.height = "90vh";
            main_user.style.width = "100vw";
            main_user.style.background = "black";
            main_user.removeAttribute("class"); 
            
            pastmic = document.getElementsByClassName('sidebar_mic');
            pastmic[0].parentNode.removeChild(pastmic[0]);

            main_name = document.getElementById('main_name');
            main_name.setAttribute("class","main_name")
            main_name.style.bottom = "7%";

            main_icon = document.getElementById('main_icon');
            main_icon.setAttribute("class","Usericon_big");

            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main_pin2.style.bottom = "7%";
            main_user.appendChild(main_pin2);

            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main_user.appendChild(main_pin);           
        }
    }
)

user5_cross = document.getElementById('cross5');
user5_cross.addEventListener("click", 
    function(){
        user1 = document.getElementById('user-cross5'); 
        //user1.innerHTML = "<div><div/> <style> .User #user-cross{ display:none}</style>";
        user1.style.display= 'none';
        user1.parentNode.removeChild(user1);

        remove_number = remove_number +1;

        console.log(remove_number);
        if(remove_number===5){
            if(pin){
                sidebar = document.getElementById('Sidebar');
                document.body.removeChild(sidebar);
            }

            document.body.style.width = "100vw";
            main_user = document.getElementById('Main'); 
            main_user.style.height = "90vh";
            main_user.style.width = "100vw";
            main_user.style.background = "black";
            main_user.removeAttribute("class"); 
            
            pastmic = document.getElementsByClassName('sidebar_mic');
            pastmic[0].parentNode.removeChild(pastmic[0]);

            main_name = document.getElementById('main_name');
            main_name.setAttribute("class","main_name")
            main_name.style.bottom = "7%";

            main_icon = document.getElementById('main_icon');
            main_icon.setAttribute("class","Usericon_big");

            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main_pin2.style.bottom = "7%";
            main_user.appendChild(main_pin2);

            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main_user.appendChild(main_pin);           
        }
    }
)

// pin the user into main 
// onclick swap two element
// still need to fix size

user1_selector = document.getElementById('user1-selector2');
user1_selector.addEventListener("click", 
    function(){
        if(pin){
        // change user figure
        main = document.getElementById('main_icon');
        main_photo = main.src; 

        user1 = document.getElementById('user1-icon'); 
        user_photo = user1.src;  

        main.setAttribute('src',user_photo);
        user1.setAttribute('src',main_photo);

        // change user name
        user_name = document.getElementById("user1_name").innerHTML;
        main_name = document.getElementById("main_name").innerHTML; 

        temp = user_name;

        document.getElementById("user1_name").innerHTML = main_name;
        main_name = document.getElementById("main_name").innerHTML = temp;

        listen();
        }
        else{
            pin = true;
            console.log("else");

            user_photo = document.getElementById('user1-icon').src;
            user_name = document.getElementById("user1_name").innerHTML;
 
        
            //main = document.getElementById('main2');
            all_user = document.querySelectorAll('.User');
    
            //remove original child first
            document.body.removeChild(all_user[0]);
            document.body.removeChild(all_user[1]);
            document.body.removeChild(all_user[2]);
            document.body.removeChild(all_user[3]);
            document.body.removeChild(all_user[4]);
            document.body.removeChild(all_user[5]);
    
            //create sidebar div
            sidebar = document.createElement("div");
            sidebar.setAttribute("id", "Sidebar");
            sidebar.appendChild(all_user[1]);
            sidebar.appendChild(all_user[2]);
            sidebar.appendChild(all_user[3]);
            sidebar.appendChild(all_user[4]);
            sidebar.appendChild(all_user[5]);
    
            //create layout as main
            main = document.createElement("div");
            main.setAttribute("class", "Main");
    
            //mainmic
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/microphone.png");
            main_pin.setAttribute("class", "bottomfun")
            main_pin.setAttribute("id", "mainmic")
            main.appendChild(main_pin);
    
            //selector
            main_selector = document.createElement("div");
            main_selector.setAttribute("id", "Selector");
            main_selector.setAttribute("class", "selector");
            
                //
                main_pin = document.createElement("img");
                main_pin.setAttribute("src", "./figure/pin.png");
                main_pin.setAttribute("class", "selector_icon");
                
                //
                main_menu = document.createElement("img");
                main_menu.setAttribute("src", "./figure/menu.png");
                main_menu.setAttribute("class", "selector_icon");
                
                //
                main_minus = document.createElement("img");
                main_minus.setAttribute("src", "./figure/shrink.png");
                main_minus.setAttribute("class", "selector_icon");
            
            // 
            main_selector.appendChild(main_pin);
            main_selector.appendChild(main_menu);
            main_selector.appendChild(main_minus);
            main.appendChild(main_selector);
            
            //img
            main_img = document.createElement("img");
            main_img.setAttribute("src", user_photo);
            main_img.setAttribute("class", "Usericon_big");
            main_img.setAttribute("id", "main_icon");
            main.appendChild(main_img);
            
            //pin
            main_pin2 = document.createElement("img");
            main_pin2.setAttribute("src", "./figure/pin.png");
            main_pin2.setAttribute("class", "bottomfun");
            main_pin2.setAttribute("id", "mainpin");
            main.appendChild(main_pin2);
            
            //p
            main_name = document.createElement("p");
            main_name.setAttribute("id", "main_name");
            main_name.setAttribute("class", "main_name");
            main_name.appendChild(document.createTextNode(user_name));
            main.appendChild(main_name);
            
            document.body.appendChild(main);
            document.body.appendChild(sidebar);
            listen();
        }
    }
)


user2_selector = document.getElementById('user2-selector2');
user2_selector.addEventListener("click",
   function(){
    if(pin){
        // change user figure
        main = document.getElementById('main_icon');
        main_photo = main.src; 

        user1 = document.getElementById('user2-icon'); 
        user_photo = user1.src;  

        main.setAttribute('src',user_photo);
        user1.setAttribute('src',main_photo);

        // change user name
        user_name = document.getElementById("user2_name").innerHTML;
        main_name = document.getElementById("main_name").innerHTML; 

        temp = user_name;

        document.getElementById("user2_name").innerHTML = main_name;
        main_name = document.getElementById("main_name").innerHTML = temp;

        listen();
    }else{
        pin = true;

        console.log("else");
        
        user_photo = document.getElementById('user2-icon').src;  
        user_name = document.getElementById("user2_name").innerHTML;

        //main = document.getElementById('main2');
        all_user = document.querySelectorAll('.User');

        //remove original child first
        document.body.removeChild(all_user[0]);
        document.body.removeChild(all_user[1]);
        document.body.removeChild(all_user[2]);
        document.body.removeChild(all_user[3]);
        document.body.removeChild(all_user[4]);
        document.body.removeChild(all_user[5]);

        //create sidebar div
        sidebar = document.createElement("div");
        sidebar.setAttribute("id", "Sidebar");
        sidebar.appendChild(all_user[0]);
        sidebar.appendChild(all_user[2]);
        sidebar.appendChild(all_user[3]);
        sidebar.appendChild(all_user[4]);
        sidebar.appendChild(all_user[5]);

        //create layout as main
        main = document.createElement("div");
        main.setAttribute("class", "Main");

        //mainmic
        main_pin = document.createElement("img");
        main_pin.setAttribute("src", "./figure/microphone.png");
        main_pin.setAttribute("class", "bottomfun")
        main_pin.setAttribute("id", "mainmic")
        main.appendChild(main_pin);

        //selector
        main_selector = document.createElement("div");
        main_selector.setAttribute("id", "Selector");
        main_selector.setAttribute("class", "selector");
        
            //
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/pin.png");
            main_pin.setAttribute("class", "selector_icon");
            
            //
            main_menu = document.createElement("img");
            main_menu.setAttribute("src", "./figure/menu.png");
            main_menu.setAttribute("class", "selector_icon");
            
            //
            main_minus = document.createElement("img");
            main_minus.setAttribute("src", "./figure/shrink.png");
            main_minus.setAttribute("class", "selector_icon");
        
        // 
        main_selector.appendChild(main_pin);
        main_selector.appendChild(main_menu);
        main_selector.appendChild(main_minus);
        main.appendChild(main_selector);
        
        //img
        main_img = document.createElement("img");
        main_img.setAttribute("src", user_photo);
        main_img.setAttribute("class", "Usericon_big");
        main_img.setAttribute("id", "main_icon");
        main.appendChild(main_img);
        
        //pin
        main_pin2 = document.createElement("img");
        main_pin2.setAttribute("src", "./figure/pin.png");
        main_pin2.setAttribute("class", "bottomfun");
        main_pin2.setAttribute("id", "mainpin");
        main.appendChild(main_pin2);
        
        //p
        main_name = document.createElement("p");
        main_name.setAttribute("id", "main_name");
        main_name.setAttribute("class", "main_name");
        main_name.appendChild(document.createTextNode(user_name));
        main.appendChild(main_name);
        
        document.body.appendChild(main);
        document.body.appendChild(sidebar);
        listen();
    }
    }   
)

user3_selector = document.getElementById('user3-selector2');
user3_selector.addEventListener("click", 
    function(){
    if(pin){

        // change user figure
        main = document.getElementById('main_icon');
        main_photo = main.src; 

        user1 = document.getElementById('user3-icon'); 
        user_photo = user1.src;  

        main.setAttribute('src',user_photo);
        user1.setAttribute('src',main_photo);

        // change user name
        user_name = document.getElementById("user3_name").innerHTML;
        main_name = document.getElementById("main_name").innerHTML; 

        temp = user_name;

        document.getElementById("user3_name").innerHTML = main_name;
        main_name = document.getElementById("main_name").innerHTML = temp;

        main2_selector = document.getElementById('Selector');

        listen();
    }else{
        pin = true;

        console.log("else");
        
        user_photo = document.getElementById('user3-icon').src; 
        user_name = document.getElementById("user3_name").innerHTML;
 

        //main = document.getElementById('main2');
        all_user = document.querySelectorAll('.User');

        //remove original child first
        document.body.removeChild(all_user[0]);
        document.body.removeChild(all_user[1]);
        document.body.removeChild(all_user[2]);
        document.body.removeChild(all_user[3]);
        document.body.removeChild(all_user[4]);
        document.body.removeChild(all_user[5]);

        //create sidebar div
        sidebar = document.createElement("div");
        sidebar.setAttribute("id", "Sidebar");
        sidebar.appendChild(all_user[0]);
        sidebar.appendChild(all_user[1]);
        sidebar.appendChild(all_user[3]);
        sidebar.appendChild(all_user[4]);
        sidebar.appendChild(all_user[5]);

        //create layout as main
        main = document.createElement("div");
        main.setAttribute("class", "Main");

        //mainmic
        main_pin = document.createElement("img");
        main_pin.setAttribute("src", "./figure/microphone.png");
        main_pin.setAttribute("class", "bottomfun")
        main_pin.setAttribute("id", "mainmic")
        main.appendChild(main_pin);

        //selector
        main_selector = document.createElement("div");
        main_selector.setAttribute("id", "Selector");
        main_selector.setAttribute("class", "selector");
        
            //
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/pin.png");
            main_pin.setAttribute("class", "selector_icon");
            
            //
            main_menu = document.createElement("img");
            main_menu.setAttribute("src", "./figure/menu.png");
            main_menu.setAttribute("class", "selector_icon");
            
            //
            main_minus = document.createElement("img");
            main_minus.setAttribute("src", "./figure/shrink.png");
            main_minus.setAttribute("class", "selector_icon");
        
        // 
        main_selector.appendChild(main_pin);
        main_selector.appendChild(main_menu);
        main_selector.appendChild(main_minus);
        main.appendChild(main_selector);
        
        //img
        main_img = document.createElement("img");
        main_img.setAttribute("src", user_photo);
        main_img.setAttribute("class", "Usericon_big");
        main_img.setAttribute("id", "main_icon");
        main.appendChild(main_img);
        
        //pin
        main_pin2 = document.createElement("img");
        main_pin2.setAttribute("src", "./figure/pin.png");
        main_pin2.setAttribute("class", "bottomfun");
        main_pin2.setAttribute("id", "mainpin");
        main.appendChild(main_pin2);
        
        //p
        main_name = document.createElement("p");
        main_name.setAttribute("id", "main_name");
        main_name.setAttribute("class", "main_name");
        main_name.appendChild(document.createTextNode(user_name));
        main.appendChild(main_name);
        
        document.body.appendChild(main);
        document.body.appendChild(sidebar);
        listen();
    }
    } 
)

user4_selector = document.getElementById('user4-selector2');
user4_selector.addEventListener("click", 
    function(){
    if(pin){

        // change user figure
        main = document.getElementById('main_icon');
        main_photo = main.src; 

        user1 = document.getElementById('user4-icon'); 
        user_photo = user1.src;  

        main.setAttribute('src',user_photo);
        user1.setAttribute('src',main_photo);

        // change user name
        user_name = document.getElementById("user4_name").innerHTML;
        main_name = document.getElementById("main_name").innerHTML; 

        temp = user_name;

        document.getElementById("user4_name").innerHTML = main_name;
        main_name = document.getElementById("main_name").innerHTML = temp;

        listen();
    }else{
        pin = true;
        
        console.log("else");

        user_photo = document.getElementById('user4-icon').src;  
        user_name = document.getElementById("user4_name").innerHTML;

        //main = document.getElementById('main2');
        all_user = document.querySelectorAll('.User');

        //remove original child first
        document.body.removeChild(all_user[0]);
        document.body.removeChild(all_user[1]);
        document.body.removeChild(all_user[2]);
        document.body.removeChild(all_user[3]);
        document.body.removeChild(all_user[4]);
        document.body.removeChild(all_user[5]);

        //create sidebar div
        sidebar = document.createElement("div");
        sidebar.setAttribute("id", "Sidebar");
        sidebar.appendChild(all_user[0]);
        sidebar.appendChild(all_user[1]);
        sidebar.appendChild(all_user[2]);
        sidebar.appendChild(all_user[4]);
        sidebar.appendChild(all_user[5]);

        //create layout as main
        main = document.createElement("div");
        main.setAttribute("class", "Main");

        //mainmic
        main_pin = document.createElement("img");
        main_pin.setAttribute("src", "./figure/microphone.png");
        main_pin.setAttribute("class", "bottomfun")
        main_pin.setAttribute("id", "mainmic")
        main.appendChild(main_pin);

        //selector
        main_selector = document.createElement("div");
        main_selector.setAttribute("id", "Selector");
        main_selector.setAttribute("class", "selector");
        
            //
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/pin.png");
            main_pin.setAttribute("class", "selector_icon");
            
            //
            main_menu = document.createElement("img");
            main_menu.setAttribute("src", "./figure/menu.png");
            main_menu.setAttribute("class", "selector_icon");
            
            //
            main_minus = document.createElement("img");
            main_minus.setAttribute("src", "./figure/shrink.png");
            main_minus.setAttribute("class", "selector_icon");
        
        // 
        main_selector.appendChild(main_pin);
        main_selector.appendChild(main_menu);
        main_selector.appendChild(main_minus);
        main.appendChild(main_selector);
        
        //img
        main_img = document.createElement("img");
        main_img.setAttribute("src", user_photo);
        main_img.setAttribute("class", "Usericon_big");
        main_img.setAttribute("id", "main_icon");
        main.appendChild(main_img);
        
        //pin
        main_pin2 = document.createElement("img");
        main_pin2.setAttribute("src", "./figure/pin.png");
        main_pin2.setAttribute("class", "bottomfun");
        main_pin2.setAttribute("id", "mainpin");
        main.appendChild(main_pin2);
        
        //p
        main_name = document.createElement("p");
        main_name.setAttribute("id", "main_name");
        main_name.setAttribute("class", "main_name");
        main_name.appendChild(document.createTextNode(user_name));
        main.appendChild(main_name);
        
        document.body.appendChild(main);
        document.body.appendChild(sidebar);
        listen();
    }
    } 
)

user5_selector = document.getElementById('user5-selector2');
user5_selector.addEventListener("click", 
    function(){
    if(pin){

        // change user figure
        main = document.getElementById('main_icon');
        main_photo = main.src; 

        user1 = document.getElementById('user5-icon'); 
        user_photo = user1.src;  

        main.setAttribute('src',user_photo);
        user1.setAttribute('src',main_photo);

        // change user name
        user_name = document.getElementById("user5_name").innerHTML;
        main_name = document.getElementById("main_name").innerHTML; 

        temp = user_name;

        document.getElementById("user5_name").innerHTML = main_name;
        main_name = document.getElementById("main_name").innerHTML = temp;
    }else{
        pin = true;

        console.log("else");

        user_photo = document.getElementById('user5-icon').src;
        user_name = document.getElementById("user5_name").innerHTML;

        //main = document.getElementById('main2');
        all_user = document.querySelectorAll('.User');

        //remove original child first
        document.body.removeChild(all_user[0]);
        document.body.removeChild(all_user[1]);
        document.body.removeChild(all_user[2]);
        document.body.removeChild(all_user[3]);
        document.body.removeChild(all_user[4]);
        document.body.removeChild(all_user[5]);

        //create sidebar div
        sidebar = document.createElement("div");
        sidebar.setAttribute("id", "Sidebar");
        sidebar.appendChild(all_user[0]);
        sidebar.appendChild(all_user[1]);
        sidebar.appendChild(all_user[2]);
        sidebar.appendChild(all_user[3]);
        sidebar.appendChild(all_user[5]);

        //create layout as main
        main = document.createElement("div");
        main.setAttribute("class", "Main");

        //mainmic
        main_pin = document.createElement("img");
        main_pin.setAttribute("src", "./figure/microphone.png");
        main_pin.setAttribute("class", "bottomfun")
        main_pin.setAttribute("id", "mainmic")
        main.appendChild(main_pin);

        //selector
        main_selector = document.createElement("div");
        main_selector.setAttribute("id", "Selector");
        main_selector.setAttribute("class", "selector");
        
            //
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/pin.png");
            main_pin.setAttribute("class", "selector_icon");
            
            //
            main_menu = document.createElement("img");
            main_menu.setAttribute("src", "./figure/menu.png");
            main_menu.setAttribute("class", "selector_icon");
            
            //
            main_minus = document.createElement("img");
            main_minus.setAttribute("src", "./figure/shrink.png");
            main_minus.setAttribute("class", "selector_icon");
        
        // 
        main_selector.appendChild(main_pin);
        main_selector.appendChild(main_menu);
        main_selector.appendChild(main_minus);
        main.appendChild(main_selector);
        
        //img
        main_img = document.createElement("img");
        main_img.setAttribute("src", user_photo);
        main_img.setAttribute("class", "Usericon_big");
        main_img.setAttribute("id", "main_icon");
        main.appendChild(main_img);
        
        //pin
        main_pin2 = document.createElement("img");
        main_pin2.setAttribute("src", "./figure/pin.png");
        main_pin2.setAttribute("class", "bottomfun");
        main_pin2.setAttribute("id", "mainpin");
        main.appendChild(main_pin2);
        
        //p
        main_name = document.createElement("p");
        main_name.setAttribute("id", "main_name");
        main_name.setAttribute("class", "main_name");
        main_name.appendChild(document.createTextNode(user_name));
        main.appendChild(main_name);
        
        document.body.appendChild(main);
        document.body.appendChild(sidebar);
        listen();
    }
    }
)

///////
// main-user
function listen() {
main2_selector = document.getElementById('Selector');
main2_selector.addEventListener("click", 
    function someFunc(){
    if(pin){

        console.log("remove main");
        console.log(pin);

        pin = false;
        //remove_number = 0;

        //unpin
        main_photo = document.getElementById('main_icon').src;
        main_name = document.getElementById("main_name").innerHTML;

        main = document.getElementById('Main');
        sidebar = document.getElementById('Sidebar');
        all_user = document.querySelectorAll('.User'); 

        //add back sidebar
        document.body.removeChild(sidebar);
        document.body.removeChild(main);
        for(i = 0; i < all_user.length; i++) {
            document.body.appendChild(all_user[i]);}
        /*
        document.body.appendChild(all_user[0]);
        document.body.appendChild(all_user[1]);
        document.body.appendChild(all_user[2]);
        document.body.appendChild(all_user[3]);
        document.body.appendChild(all_user[4]);
        */

        //add back main user
        //add cross, remove mic and pin 
        main2 = document.createElement("div");
        main2.setAttribute("id", "Main");
        main2.setAttribute("class", "User");

        //img
        main2_img = document.createElement("img");
        main2_img.setAttribute("src", main_photo);
        main2_img.setAttribute("class", "Usericon_small");
        main2_img.setAttribute("id", "main_icon");
        main2.appendChild(main2_img);

        //selector
        main_selector2 = document.createElement("div");
        main_selector2.setAttribute("class", "selector2");
        main_selector2.setAttribute("id", "Selector");

    //
    main2_pin = document.createElement("img");
    main2_pin.setAttribute("src", "./figure/pin.png");
    main2_pin.setAttribute("class", "selector_icon2");
    
    //
    main2_mute = document.createElement("img");
    main2_mute.setAttribute("src", "./figure/microphone_mute.png");
    main2_mute.setAttribute("class", "selector_icon2");
    
    //
    main2_minus = document.createElement("img");
    main2_minus.setAttribute("src", "./figure/minus.png");
    main2_minus.setAttribute("class", "selector_icon2");

    // 
    main_selector2.appendChild(main2_pin);
    main_selector2.appendChild(main2_mute);
    main_selector2.appendChild(main2_minus);
    main2.appendChild(main_selector2);

    //p
    main_name2 = document.createElement("p");
    main_name2.setAttribute("id", "main_name");
    main_name2.setAttribute("class", "sidebar_name")
    main_name2.appendChild(document.createTextNode(main_name)); //need to change
    main2.appendChild(main_name2);

    //phone
    main_mic2 = document.createElement("img");
    main_mic2.setAttribute("src", "./figure/microphone_mute3.png");
    main_mic2.setAttribute("class", "sidebar_mic");
    main2.appendChild(main_mic2);

    document.body.appendChild(main2);
    //listen();

    all_user = document.querySelectorAll(".User");
    for(i = 0; i < all_user.length; i++) {
        all_user[i].style.width = "32%";
        all_user[i].style.height = "35%";
        all_user[i].style.margin = "5px";

    }


    }else{
        //pin the user
        console.log(pin);

        pin = true;
        user_photo = document.getElementById('main_icon').src;
        user_name = document.getElementById("main_name").innerHTML;

        //main = document.getElementById('main2');
        all_user = document.querySelectorAll('.User');

        //remove original child first
        document.body.removeChild(all_user[0]);
        document.body.removeChild(all_user[1]);
        document.body.removeChild(all_user[2]);
        document.body.removeChild(all_user[3]);
        document.body.removeChild(all_user[4]);
        document.body.removeChild(all_user[5]);

        //create sidebar div
        sidebar = document.createElement("div");
        sidebar.setAttribute("id", "Sidebar");
        sidebar.appendChild(all_user[0]);
        sidebar.appendChild(all_user[1]);
        sidebar.appendChild(all_user[2]);
        sidebar.appendChild(all_user[3]);
        sidebar.appendChild(all_user[4]);

        //create layout as main
        main = document.createElement("div");
        main.setAttribute("id", "Main");
        main.setAttribute("class", "Main");

        //mainmic
        main_pin = document.createElement("img");
        main_pin.setAttribute("src", "./figure/microphone.png");
        main_pin.setAttribute("class", "bottomfun")
        main_pin.setAttribute("id", "mainmic")
        main.appendChild(main_pin);

        //selector
        main_selector = document.createElement("div");
        main_selector.setAttribute("id", "Selector");
        main_selector.setAttribute("Class", "selector");
        
            //
            main_pin = document.createElement("img");
            main_pin.setAttribute("src", "./figure/pin.png");
            main_pin.setAttribute("class", "selector_icon");
            
            //
            main_menu = document.createElement("img");
            main_menu.setAttribute("src", "./figure/menu.png");
            main_menu.setAttribute("class", "selector_icon");
            
            //
            main_minus = document.createElement("img");
            main_minus.setAttribute("src", "./figure/shrink.png");
            main_minus.setAttribute("class", "selector_icon");
        
        // 
        main_selector.appendChild(main_pin);
        main_selector.appendChild(main_menu);
        main_selector.appendChild(main_minus);
        main.appendChild(main_selector);
        
        //img
        main_img = document.createElement("img");

        main_img.setAttribute("src", user_photo);

        main_img.setAttribute("class", "Usericon_big");
        main_img.setAttribute("id", "main_icon");
        main.appendChild(main_img);
        
        //pin
        main_pin2 = document.createElement("img");
        main_pin2.setAttribute("src", "./figure/pin.png");
        main_pin2.setAttribute("class", "bottomfun");
        main_pin2.setAttribute("id", "mainpin");
        main.appendChild(main_pin2);
        
        //p
        main_name = document.createElement("p");
        main_name.setAttribute("id", "main_name");
        main_name.setAttribute("class", "main_name");
        main_name.appendChild(document.createTextNode(user_name));
        main.appendChild(main_name);
        
        document.body.appendChild(main);
        document.body.appendChild(sidebar);
        listen()
    }
    }
)
}

listen();