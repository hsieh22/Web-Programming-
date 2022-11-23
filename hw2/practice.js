user1 = document.getElementById("user-cross1");
user2 = document.getElementById("user-cross2");
user3 = document.getElementById("user-cross3");
user4 = document.getElementById("user-cross4");
user5 = document.getElementById("user-cross5"); 
let sidebar_users = [user1, user2, user3, user4, user5];
let sidebar_username = ["user1", "user2", "user3", "user4", "user5"];
let id = 5;

// Remove user when cross is clicked
let removeNumber = 0;

removeUser = (user, username) => {
    user.style.display = 'none';
    user.parentNode.removeChild(user);
    removeNumber += 1;

    if(removeNumber === 5){
        console.log("remove number = 5 !!")

        //Pin the last user
        lastUser = document.getElementsByClassName("User")[0];
        const index = sidebar_users.indexOf(lastUser);
        if(pin === false){
            pinUser(lastUser, sidebar_username[index]);
        }

        //CSS排版調整
        document.body.style.width = "100vw";
        main_user = document.getElementById('Main'); 
        main_user.style.height = "90vh";
        main_user.style.width = "100vw";
        main_user.style.background = "black";
        main_user.removeAttribute("class"); 
    }
}

user1_cross = document.getElementById("cross1");
user1_cross.addEventListener("click", () => removeUser(sidebar_users[0], sidebar_username[0]));

user2_cross = document.getElementById("cross2");
user2_cross.addEventListener("click", () => removeUser(sidebar_users[1], sidebar_username[1]));

user3_cross = document.getElementById("cross3");
user3_cross.addEventListener("click", () => removeUser(sidebar_users[2], sidebar_username[2]));

user4_cross = document.getElementById("cross4");
user4_cross.addEventListener("click", () => removeUser(sidebar_users[3], sidebar_username[3]));

user5_cross = document.getElementById("cross5");
user5_cross.addEventListener("click", () => removeUser(sidebar_users[4], sidebar_username[4]));

// pin the user into main 
// onclick swap two element
// still need to fix size

let pin = true;

pinUser = (user, username) => {
    if(pin === true){
        
        console.log("sidebar users: ",sidebar_users);
        console.log("sidebar username: ",sidebar_username);
        users = document.getElementById("Sidebar");//////
        console.log(`Pin ${username}`);
        console.log(user);
        console.log(username);
        // switch photo
        main_photo = document.getElementById("main_icon");
        user_photo = document.getElementById(`${username}-icon`);
        let temp_photo = main_photo.src;
        main_photo.src = user_photo.src;
        user_photo.src = temp_photo;
        delete temp_photo;
    
        // switch username
        main_name = document.getElementById("main_name");
        user_name = document.getElementById(`${username}_name`);
        let temp_name = main_name.textContent;
        main_name.textContent = user_name.textContent;
        user_name.textContent = temp_name;
        delete temp_name;
    }
    else{
        pin = true
        console.log("Pin set to true")
        //Create main element
        /*
        <div id="Main">
            <img src="./figure/microphone.png" class="bottomfun" id="mainmic"> 
            <div id="Selector">
                <img src="./figure/unpin.png" class="selector_icon">
                <img src="./figure/menu.png" class="selector_icon">
                <img src="./figure/shrink.png" class="selector_icon"> 
            </div>
            <img src="./User/pikachu.png" class="Usericon_big" id="main_icon">
            <img src="./figure/pin.png" class="bottomfun" id="mainpin">
            <div>
                <p id="main_name">你</p>
            </div>
        </div>
        */
        const mainNode = document.createElement("div");
        const micNode = document.createElement("img");
        const selectorNode = document.createElement("div");
        const pinNode = document.createElement("img");
        const menuNode = document.createElement("img");
        const shrinkNode = document.createElement("img");
        const mainiconNode = document.createElement("img");
        const mainpinNode = document.createElement("img");
        const nameNodeParent = document.createElement("div");
        const mainnameNode = document.createElement("p");

        mainNode.appendChild(micNode);
        mainNode.appendChild(selectorNode);
        selectorNode.appendChild(pinNode);
        selectorNode.appendChild(menuNode);
        selectorNode.appendChild(shrinkNode);
        mainNode.appendChild(mainiconNode);
        mainNode.appendChild(mainpinNode);
        mainNode.appendChild(nameNodeParent);
        nameNodeParent.appendChild(mainnameNode);
    
        mainNode.id = "Main";
        micNode.src = "./figure/microphone.png";
        micNode.className = "bottomfun";
        micNode.id = "mainmic";
        selectorNode.id = "Selector";
        pinNode.src = "./figure/unpin.png";
        pinNode.className = "selector_icon";
        menuNode.src = "./figure/menu.png";
        menuNode.className = "selector_icon";
        shrinkNode.src = "./figure/shrink.png";
        shrinkNode.className = "selector_icon";
        user_photo = document.getElementById(`${username}-icon`);
        console.log("try to get username :",username); //////////
        users = document.getElementById("Sidebar");//////
        console.log("users",users); //////////
        console.log("userphoto",user_photo); //////////
        console.log("photosrc",user_photo.src); //////////
        mainiconNode.src = user_photo.src;
        mainiconNode.className = "Usericon_big";
        mainiconNode.id = "main_icon";
        mainpinNode.src = "./figure/pin.png";
        mainpinNode.className = "bottomfun";
        mainpinNode.id = "mainpin";
        user_name = document.getElementById(`${username}_name`);
        mainnameNode.textContent = user_name.textContent;
        mainnameNode.id = "main_name";

        
        //Add to body
        document.body.prepend(mainNode)
        unpin = document.getElementById("Selector").children[0];
        unpin.addEventListener("click", unpinAll);

        //delete from sidebar
        removeNumber -= 1;  //並沒有減少user數量
        removeUser(user)

        //CSS排版調整

        Sidebar = document.getElementById("Sidebar");
        Sidebar.style.width = "30vw";
        Sidebar.style.left = "auto";
        all_user = document.querySelectorAll(".User");
        for(i = 0; i < all_user.length; i++) {
            all_user[i].style.height = "23vh";
            all_user[i].style.margin = "3px";
        }  
    }
}

user1_pin = document.getElementById("user1-selector2").children[0];
user1_pin.addEventListener("click", () => pinUser(sidebar_users[0], sidebar_username[0]));

user2_pin = document.getElementById("user2-selector2").children[0];
user2_pin.addEventListener("click", () => pinUser(sidebar_users[1], sidebar_username[1]));

user3_pin = document.getElementById("user3-selector2").children[0];
user3_pin.addEventListener("click", () => pinUser(sidebar_users[2], sidebar_username[2]));

user4_pin = document.getElementById("user4-selector2").children[0];
user4_pin.addEventListener("click", () => pinUser(sidebar_users[3], sidebar_username[3]));

user5_pin = document.getElementById("user5-selector2").children[0];
user5_pin.addEventListener("click", () => pinUser(sidebar_users[4], sidebar_username[4]));



// Unpin all users

unpinAll = () => {
    pin = false;    //Set the state to unpin
    console.log("Unpin All");

    //Remove main elements

    mainmic = document.getElementById("mainmic");
    mainmic.remove();

    selector = document.getElementById("Selector");
    selector.remove();

    main_icon = document.getElementById("main_icon");
    main_icon_src = main_icon.src;
    main_icon.remove();

    mainpin = document.getElementById("mainpin");
    mainpin.remove();

    main_name = document.getElementById("main_name");
    main_name_text = main_name.textContent;
    main_name.parentElement.remove();

    //Create sidebar element 
    /*
    <div class="User" id="user-cross1">
        <img src="./figure/cross.png" class="sidebar_cross" id="cross1">
        <img src="./User/bullbasaur.png" class="Usericon_small" id="user1-icon">
        <div class="selector2" id="user1-selector2">
            <img src="./figure/pin.png" class="selector_icon2">
            <img src="./figure/microphone_mute.png" class="selector_icon2">
            <img src="./figure/minus.png" class="selector_icon2">    
        </div>
        <p class="sidebar_name" id="user1_name">Bullbasaur</p>
        <img src="./figure/microphone_mute3.png" class="sidebar_mic">
    </div>
    */

    id += 1

    const userNode = document.createElement("div");
    const crossNode = document.createElement("img");
    const iconNode = document.createElement("img");
    const selectorNode = document.createElement("div");
    const pinNode = document.createElement("img");
    const micNode = document.createElement("img");
    const minusNode = document.createElement("img");
    const sidebarnameNode = document.createElement("p");
    const micmuteNode = document.createElement("img");

    userNode.appendChild(crossNode);
    userNode.appendChild(iconNode);
    userNode.appendChild(selectorNode);
    selectorNode.appendChild(pinNode);
    selectorNode.appendChild(micNode);
    selectorNode.appendChild(minusNode);
    userNode.appendChild(sidebarnameNode);
    userNode.appendChild(micmuteNode);

    userNode.className = "User";
    userNode.id = `user-cross${id}`;
    crossNode.src = "./figure/cross.png";
    crossNode.className = "sidebar_cross";
    crossNode.id = `cross${id}`;
    iconNode.src = main_icon_src;
    iconNode.className = "Usericon_small";
    iconNode.id = `user${id}-icon`;
    selectorNode.className = "selector2";
    selectorNode.id = `user${id}-selector2`;
    pinNode.src = "./figure/pin.png";
    pinNode.className = "selector_icon2";
    micNode.src = "./figure/microphone_mute.png";
    micNode.className = "selector_icon2";
    minusNode.src = "./figure/minus.png";
    minusNode.className = "selector_icon2";
    sidebarnameNode.className = "sidebar_name";
    sidebarnameNode.id = `user${id}_name`;
    sidebarnameNode.textContent = main_name_text;
    micmuteNode.src = "./figure/microphone_mute3.png";
    micmuteNode.className = "sidebar_mic";

    //Add to sidebar
    sidebar = document.getElementById("Sidebar");
    sidebar.appendChild(userNode);

    sidebar_users.push(userNode)
    sidebar_username.push(`user${id}`)
    console.log(crossNode);//////////
    console.log(pinNode);//////////

    crossNode.addEventListener("click", () => removeUser(sidebar_users[id-1]));
    pinNode.addEventListener("click", () => pinUser(sidebar_users[id-1], sidebar_username[id-1]));

    //Rearrange sidebar
    main = document.getElementById("Main");
    main.remove();

    //CSS 排版調整
    Sidebar = document.getElementById("Sidebar");
    Sidebar.style.width = "90vw";
    Sidebar.style.left = "4%";
    all_user = document.querySelectorAll(".User");
    for(i = 0; i < all_user.length; i++) {
        all_user[i].style.width = "32%";
        all_user[i].style.height = "35%";
        all_user[i].style.margin = "5px";

    }  

    console.log(sidebar_users); //////
    console.log(sidebar_username);///////
}

unpin = document.getElementById("Selector").children[0];
unpin.addEventListener("click", unpinAll);



