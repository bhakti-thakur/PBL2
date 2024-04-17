/*let inputText= $("#search").value;
let inputTextLC = inputText.toLowerCase();
var input= inputTextLC.trim();

$(".search-button").click( search(input));
function search(key)
{
    switch (key) {
        case "bluenile" :
            location.replace("#bluenile") ;
            break;

        case "madhuban" :
            location.replace("#madhuban") ;
            break;

        case "fikarnot" :
            location.replace("#fikarnot");
            break;

        case "durga" :
            location.replace("#durga");
            break;

        case "pheonix" :
            location.replace("#pheonix");
            break;

        case "sgs" :
            location.replace("#sgs");
            break;

        case "camp" :
            location.replace("#camp");
            break;

        case "dagdusheth" :
            location.replace("#dagdusheth");
            break;

        case "osho" :
            location.replace("#osho");
            break;

        case "gamepalacio" :
            location.replace("#gamepalacio");
            break;

        case "skyjumper" :
            location.replace("#skyjumper");
            break;
        
    
        default:
            break;
    }
}*/

$(".nav-link").click(function(){
    $(".nav").classList.add("on-it");
})