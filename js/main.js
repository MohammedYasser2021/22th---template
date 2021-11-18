$(function () {
  $('.bars').each(function () {
    $(this).on('click', function () {
      $('.links').each(function () {
        $(this).slideToggle(500)
      })
    })
  })

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 70) {
      $('.fixed-nav').slideDown(500)
    } else {
      $('.fixed-nav').hide()
    }
  })
})

/* scroll to top */

let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  if (this.scrollY >= 200) {
    scrollBtn.style.right = '20px'
  } else {
    scrollBtn.style.right = '-60px'
  }
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
