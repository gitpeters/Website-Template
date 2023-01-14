// ============= carousel ===============
$(".about_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed:1000,
  items : 3,
  loop: true,
  nav:true,
  navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
  margin: 30,
  dots: true,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:2
    },
    600:{
      items:2
    },
    1000:{
      items:3
    }
  }
  
});

// ============== ACCORDION SECTIOIN ===================

const accordionItem = document.querySelectorAll(".course-accordion-item")

  accordionItem.forEach((item)=>{
    const accordionHeader = item.querySelector(".course-accordion-header")

    accordionHeader.addEventListener('click', ()=>{

      const openItem = document.querySelector('.sylabus-open')
      toggleItem(item)

      if(openItem && openItem!== item){
        toggleItem(openItem)
      }

    })
  })

  const toggleItem = (item)=>{
    const accordionContent = item.querySelector(".course-accordion-content")

    if(item.classList.contains('sylabus-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('sylabus-open')
    }else{
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('sylabus-open')
    }
  }

  // =======================course accordion =======================
  const sylabusItem = document.querySelectorAll(".sylabus-accordion-item")

  sylabusItem.forEach((i)=>{
    const sylabusHeader = i.querySelector(".sylabus-accordion-header")

    sylabusHeader.addEventListener('click', ()=>{

      const openSylabus = document.querySelector('.accordion-open')
      toggleSylabus(i)

      if(openSylabus && openSylabus!== i){
        toggleSylabus(openSylabus)
      }

    })
  })

  const toggleSylabus = (i)=>{
    const sylabusContent = i.querySelector(".sylabus-accordion-content")

    if(i.classList.contains('accordion-open')){
      sylabusContent.removeAttribute('style')
        i.classList.remove('accordion-open')
    }else{
      sylabusContent.style.height = sylabusContent.scrollHeight + 'px'
    i.classList.add('accordion-open')
    }
  }

  //  ============================== Scrollup ==================================
  function scrollUp(){
    const scroll_up = document.getElementById('scroll-up');
    if(this.scrollY >=350){
      scroll_up.classList.add('show-scroll');
    }else{
      scroll_up.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollUp)