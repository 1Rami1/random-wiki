if(window.location.href == "https://1rami1.github.io/Random-Wikipedia-Article/"){
        window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B5ZJT0Q4LQ');
      } 
      
      function FindWiki(){
        var wikeurl = "https://"+ document.getElementById("languageselect").value +".wikipedia.org/wiki/Special:Random";
        console.log()
        var title = new URL(wikeurl);
        window.open(wikeurl,'_blank');
        //https://en.wikipedia.org/wiki/Special:Random
      }