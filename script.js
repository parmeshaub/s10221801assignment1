window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "2px 5px";
        document.getElementById("logo").style.width = "7%";
      } else {
        document.getElementById("navbar").style.padding = "13px 10px";
        document.getElementById("logo").style.width = "10%";
      }
    }


    