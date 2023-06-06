$(window).on("load",function(){

    let slideIndex  =$(".slide.active").index();
    const slideLength = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLength-1){
            slideIndex = 0;
        }else{
            slideIndex++;
        }
        
        setTimeout(slideShow,5000);
    }

    slideShow();  
});


// on scroll
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $(".header").addClass("sticky");
    }else{
        $(".header").removeClass("sticky");
    }
});
window.onload=function(){
   document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active1");

    document.getElementById("description").innerHTML =  "Thank you, " + document.getElementById("contname").value + " for your message.<br>We appreciate it.";
    document.getElementById("contname").value = "";
    document.getElementById("contemail").value = "";
    document.getElementById("contmessage").value = "";
      });

   document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active1");

   });
  }
    
   
  
/*google maps */
  