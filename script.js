function openWike(){
    
    wikeurl = "https://"+ document.getElementById("languageselect").value +".wikipedia.org/wiki/Special:Random";
    window.open(wikeurl,'_blank');
}
