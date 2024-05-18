$('.hamburger-menu').click(function() {
  $('aside').toggleClass('close')
})

$('.menu-add').click(function() {
  $('main').addClass('form-active')
})

$('.teamlid').click(function() {
$('main').addClass('teamlid-active')
})

$('.all').click(function() {
  $('main').addClass('all-active')
  })

$('.verstka').click(function() {
$('main').addClass('verstka-active')
})

$('.developer').click(function() {
$('main').addClass('developer-active')
})

$('.disigner').click(function() {
$('main').addClass('disigner-active')
})

$('.tester').click(function() {
$('main').addClass('tester-active')
})

$('.menu').click(function() {
  $(this).siblings('.menu').removeClass('active')
  $(this).addClass('active')

  $(this).next().siblings('.menu-dropdown').children('.sub-menu').slideUp()
  $(this).next('.menu-dropdown').children('.sub-menu').slideToggle()

  $(this).next().siblings('.menu-dropdown').children('.sub-menu').children('.menu').removeClass('active')

  if (!$(this).hasClass('menu-add')) {
      $('main').removeClass('form-active')
  }

  if (!$(this).hasClass('teamlid')) {
      $('main').removeClass('teamlid-active')
  }

  if (!$(this).hasClass('verstka')) {
      $('main').removeClass('verstka-active')
  }

  if (!$(this).hasClass('developer')) {
      $('main').removeClass('developer-active')
  }

  if (!$(this).hasClass('disigner')) {
      $('main').removeClass('disigner-active')
  }

  if (!$(this).hasClass('tester')) {
      $('main').removeClass('tester-active')
  }

  if (!$(this).hasClass('all')) {
    $('main').removeClass('all-active')
  }

})