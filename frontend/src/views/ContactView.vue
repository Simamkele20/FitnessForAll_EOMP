<template>
  <div class="Cont1 ">
    <h6 class="ContHead  text-white mx-5  ">Contact Customer Service</h6>
  </div>
  <div class="d-block d-md-flex">
    <div class="paragraphs bg-black text-white  w-md-50  w-100 text-center">
      Our Customer Service team is available live Monday-Thursday 9AM-7PM EST, Friday 9AM-5PM EST, Saturday & Sunday
      12PM-5PM EST. If you reach us outside of our hours of operation, we'll respond as soon as possible the next day!
    </div>
    <div>
      <img src="https://i.ibb.co/vLDbdwq/istockphoto-670051268-612x612.jpg" alt="Pic" class="PicA  d-none d-md-inline">
    </div>
  </div>

  <div class="contact-wrapper mt-5">

    <!-- Left contact page -->

    <form id="contact-form" class="form-horizontal" action="https://formspree.io/f/xjvqlqny" method="post">

      <div class="form-group mt-5">
        <div class="col">
          <input type="text" class="form-control" id="name" placeholder="FULL NAME" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

      <button class="btn btn-dark send-button mb-5 mt-4 " id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="bi bi-send"></i><span class="send-text">SEND</span>
        </div>


      </button>

    </form>


    <!-- Right contact page -->

    <div class="direct-contact-container mt-5">

      <ul class="contact-list mb-5">
        <li class="list-item"><i class="bi bi-geo-alt"><span class="contact-text place">South Africa,Cape
              Town</span></i></li>

        <li class="list-item"><i class="bi bi-telephone-fill"><span class="contact-text phone"><a
                href="tel:+27 65 6013 640" title="Give me a call">(+27) 21 3701 640</a></span></i></li>

        <li class="list-item"><i class="bi bi-envelope"><span class="contact-text gmail"><a href="mailto:Princetancu"
                title="Send me an email">FitnessForAll@gmail.com</a></span></i></li>

      </ul>

      <hr>
      <ul class="social-media-list">

        <a href="https://github.com/Simamkele20" target="_blank" class="contact-icon">
          <i class="bi bi-github" aria-hidden="true"></i>
        </a>

        <a href="https://www.linkedin.com/in/simamkele-tancu-a74744262/" target="_blank" class="contact-icon">
          <i class="bi bi-linkedin" aria-hidden="true"></i>
        </a>


      </ul>
      <hr>
    </div>
  </div>
</template>
  



<style src="../assets/css/style.css"></style>