$(document).ready(function () {
  $("nav a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top - 60
      }, 800);
    }
  });

  function fadeInOnScroll() {
    $("section").each(function () {
      const top_of_element = $(this).offset().top;
      const bottom_of_screen = $(window).scrollTop() + $(window).height();
      if (bottom_of_screen > top_of_element + 100) {
        $(this).animate({ opacity: 1, top: 0 }, 700);
      }
    });
  }
  $(window).on("scroll", fadeInOnScroll);
  fadeInOnScroll();

  const techInfo = {
    Python: {
      title: "Python - 2022",
      desc: "Built various automation scripts, data processing tools, and web backends.",
      link: "https://github.com/Talal-asif07?tab=projects"
    },
    ML: {
      title: "Machine Learning - 2023",
      desc: "Developed models for classification, prediction, and recommendation systems.",
      link: "https://github.com/Talal-asif07?tab=repositories"
    },
    WebDev: {
      title: "Web Development - 2021",
      desc: "Created responsive websites and full-stack web applications.",
      link: "https://github.com/Talal-asif07?tab=repositories"
    }
  };

  $('.tech-point').on('click', function () {
    const tech = $(this).data('tech');
    $('#tech-title').text(techInfo[tech].title);
    $('#tech-description').text(techInfo[tech].desc);
    $('#tech-link').attr('href', techInfo[tech].link);
    $('#tech-details').fadeIn();
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (name && email && message) {
      $('#formMessage').hide().text('Thanks for reaching out, ' + name + '!').slideDown();
      $(this).trigger('reset');
    } else {
      $('#formMessage').text('Please fill in all fields.');
    }
  });
});
