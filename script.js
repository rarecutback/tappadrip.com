function append(createdElement) {
    document.body.append(createdElement);
}
const navbar = document.createElement("div");
navbar.id = "navbar"
append(navbar);

const navbar1 = document.createElement("div");
navbar1.id = "navbar1"
append(navbar1);

const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./sysImg/logo.png"
navbar.appendChild(logo)
logo.onclick = () => {
    window.location.reload();
}

const jamFlag = document.createElement("img");
jamFlag.id = "jamFlag";
jamFlag.src = "./sysImg/jamaica-flag-png-6752.png";
navbar.appendChild(jamFlag);

const homeBtn = document.createElement("button");
homeBtn.id = "homeBtn";
homeBtn.innerHTML = "HOME";
homeBtn.onclick = () => {
    window.location.reload();
};
navbar.appendChild(homeBtn);

const accountCenter = document.createElement("img");
accountCenter.id = "accountCenter";
accountCenter.src = "./sysImg/user.png"
navbar.appendChild(accountCenter);
accountCenter.onclick = () => {
    //window.open("./views/account.html", "_self");

}

const searchBar = document.createElement("input");
searchBar.id = "searchBar";
searchBar.placeholder = "Search";
searchBar.onclick = () => {
    searchBar.style.borderStyle = "solid";
    searchBar.style.borderColor = "red";
}
navbar.appendChild(searchBar);

const searchBtn = document.createElement("img");
searchBtn.id = "searchBtn";
navbar.appendChild(searchBtn);

const chart = document.createElement("img");
chart.id = "chart";
chart.src = "./sysImg/Empty1.png";
navbar.appendChild(chart);
chart.onclick = () => {
    //window.open("./views/cashout.html", "_self");

}

//////////////////////////////////////////////////
var shoes = ["airmax", "airforce1", "desertClarks", "trekClarks", "adidasShoes"];
var shorts = ["fuji", "nike", "adidasShorts", "levi", "driFit"];
var shirts = ["polo", "adidas", "shortSleeve", "nautica", "longSleeve"];
var underWear = ["americanEagle", "americanEagleUs"];


shoes.forEach(create);
shorts.forEach(create);
shirts.forEach(create);
underWear.forEach(create);

function create(item) {
    var top = 100;
    var left = 0;
    na = item;
    na = document.createElement("div");
    na.innerHTML = item.toUpperCase();
    na.id = item;
    append(na);

    na.style.width = "200px";
    na.style.height = "200px";
    na.style.backgroundColor = "white";
    na.style.color = "black"
    na.style.margin = "10px";
    na.style.zIndex = "1";
    window.onload = () => {
        adidasShoes.innerHTML = "ADIDAS SHOES";
        adidasShorts.innerHTML = "ADIDAS SHORTS";
        trekClarks.innerHTML = "TREK CLARKS";
        desertClarks.innerHTML = "DESERT CLARKS";
        shortSleeve.innerHTML = "SHORT SLEEVE";
        longSleeve.innerHTML = "LONG SLEEVE";
        driFit.innerHTML = "DRI FIT";
        americanEagle.innerHTML = "AMERICAN EAGLE";
        americanEagleUs.innerHTML = "AMERICAN EAGLE US EDITION";
        airforce1.innerHTML = "AIR FORCE 1";
        airmax.innerHTML = "AIR MAX";
        var amount = 0;

        function added() {
            chart.style.top = "-34.3px";
            chart.style.left = "932.6px";
            chart.src = "./sysImg/Added.png";
        }

        airmax.addEventListener("click", function () {
            added()
        });
        airforce1.addEventListener("click", function () {
            added()
        });
        polo.addEventListener("click", function () {
            added()
        });
        nautica.addEventListener("click", function () {
            added()
        });
        nike.addEventListener("click", function () {
            added()
        });
        fuji.addEventListener("click", function () {
            added()
        });
        adidasShoes.addEventListener("click", function () {
            added()
        });
        adidasShorts.addEventListener("click", function () {
            added()
        });
        adidas.addEventListener("click", function () {
            added()
        });
        levi.addEventListener("click", function () {
            added()
        });
        trekClarks.addEventListener("click", function () {
            added()
        });
        desertClarks.addEventListener("click", function () {
            added()
        });
        americanEagle.addEventListener("click", function () {
            added()
        });
        americanEagleUs.addEventListener("click", function () {
            added()
        });
        driFit.addEventListener("click", function () {
            added()
        });
        shortSleeve.addEventListener("click", function () {
            added()
        });
        longSleeve.addEventListener("click", function () {
            added()
        });
    }
}
//////////////////////////////////////////////////
searchBar.onkeydown = (event) => {
    if (event.keyCode == 13) {
        //search();
    }
}
