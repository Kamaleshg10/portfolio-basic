var typed =new Typed('#input',{
            strings:['a Kamalesh', 'a web developer', 'learn to more'],
            typeSpeed:80,
            backSpeed:80,
            loop:true
        })

            // Get the button
      let mybutton = document.getElementById("myBtn");

      //  show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      //  scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }