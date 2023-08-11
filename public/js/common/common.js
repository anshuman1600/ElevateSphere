
    var owl = $('.niwax-logo-slider');
		owl.owlCarousel({
			loop: true,
			center: false,
			autoplay: true,
			margin: 20,
			nav: false,
			dots: false,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 3,
				},
				520: {
					items: 3
				},
				768: {
					items: 4
				},
				1200: {
					items: 4
				},
				1400: {
					items: 5
				},
				1600: {
					items: 6
				},
			}
		});
    
    

    var owl = $('.niwax-review-slider');
		owl.owlCarousel({
			items: 3,
			loop: true,
			center: false,
			autoplay: true,
			margin: 20,
			nav: false,
			dots: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			smartSpeed: 800,
			responsive: {
				0: {
					items: 1,
				},
				520: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 3
				},
				1400: {
					items: 3
				},
				1600: {
					items: 3
				},
			}
		});

        var owl = $('.niwax-client-slider');
		owl.owlCarousel({
			loop: true,
			center: false,
			autoplay: true,
			margin: 20,
			nav: false,
			dots: false,
			autoplayTimeout: 3500,
			autoplayHoverPause: true,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 3,
				},
				520: {
					items: 3
				},
				768: {
					items: 4
				},
				1200: {
					items: 4
				},
				1400: {
					items: 5
				},
				1600: {
					items: 6
				},
			}
		});


    let prevScrollPos = window.pageYOffset;

        

    window.addEventListener("scroll", function () {
        const currentScrollPos = window.pageYOffset;
        const timelineTraveler = document.querySelector(".timeline-traveler");

        if (currentScrollPos > prevScrollPos) {
            // Scrolling down
            timelineTraveler.classList.remove("scroll-up");
            timelineTraveler.classList.add("scroll-down");
        } else {
            // Scrolling up
            timelineTraveler.classList.remove("scroll-down");
            timelineTraveler.classList.add("scroll-up");
        }

        prevScrollPos = currentScrollPos;
    });


    function toggleBoxContent1() {
      var boxContent1 = $('.box-content1');
      var buttom_1 = $('#button_show_1');
      if (boxContent1.css('-webkit-line-clamp') === '5') {
        boxContent1.css('-webkit-line-clamp', 'unset');
        buttom_1.html('See Less <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>');
      } else {
        boxContent1.css('-webkit-line-clamp', '5');
        buttom_1.html('See More <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>');
      }
    }
    
    // Function to handle the click event for the second service card
    function toggleBoxContent2() {
      var boxContent2 = $('.box-content2');
        var buttom_2 = $('#button_show_2');
    
      if (boxContent2.css('-webkit-line-clamp') === '5') {
        boxContent2.css('-webkit-line-clamp', 'unset');
        buttom_2.html('See Less <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>');
      } else {
        boxContent2.css('-webkit-line-clamp', '5');
        buttom_2.html('See More <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>');
      }
    }
    
    // Attach the click event handlers to the respective service cards
    $('.col-lg-6.col-sm-6.mt30.wow.fadeInUp[data-wow-delay=".2s"]').click(toggleBoxContent1);
    $('.col-lg-6.col-sm-6.mt30.wow.fadeInUp[data-wow-delay=".4s"]').click(toggleBoxContent2);

		
		const form = document.getElementById('clientForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(form);

  try {
	const response = await fetch('http://localhost:3000/client_form', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(Object.fromEntries(formData))
	});

	if (!response.ok) {
	  throw new Error('Failed to submit form');
	}

	const data = await response.json();
	console.log('Form submitted successfully:', data);

	// Show success popup message here (you can use a library like Bootstrap modal, SweetAlert, etc.)
	Toastify({
          text: 'Thank You! We will contact you soon.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'green',
		  close: true,
        }).showToast();

	// Reset the form after successful submission
	form.reset();
  } catch (error) {
	Toastify({
        text: 'Error occurred during form submission.',
        duration: 1000, // 3 seconds
        gravity: 'top', // 'top', 'bottom', 'center'
        position: 'right', // 'left', 'center', 'right'
        backgroundColor: 'red',
		close: true,
      }).showToast();
  }
});

document.getElementById('trainingForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  console.log(formData);

  try {
    const response = await fetch('http://localhost:3000/training_form', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      // Handle the successful response data if needed
      console.log(data);
      // Show the success modal
	  Toastify({
          text: 'Thank You! We will contact you soon.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'green',
		  close: true,
        }).showToast();
		form.reset();
    } else {
       // Handle the error response if needed
	   console.error('Error submitting the form.');
        // Show the error toast notification
        Toastify({
          text: 'Error submitting the form.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'red',
		  close: true,
        }).showToast();
    }
  } catch (error) {
    console.error('Error occurred during form submission:', error);
    // Show the error modal
	Toastify({
        text: 'Error occurred during form submission.',
        duration: 1000, // 3 seconds
        gravity: 'top', // 'top', 'bottom', 'center'
        position: 'right', // 'left', 'center', 'right'
        backgroundColor: 'red',
		close: true,
      }).showToast();
  }
});

document.getElementById('contactUsClient').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
	console.log(form);
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phoneNo: form.phoneNo.value,
        address: form.address.value,
        message: form.message.value,
    };

    try {
        const response = await fetch('http://localhost:3000/contact_us_client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form.');
        }

        const data = await response.json();
        if (data.message === 'Contact Us Client Saved Successfully') {
            Toastify({
          text: 'Thank You! We will contact you soon.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'green',
		  close: true,
        }).showToast();
		form.reset();
        } else {
			Toastify({
          text: 'Error submitting the form.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'red',
		  close: true,
        }).showToast();
        }
    } catch (error) {
		Toastify({
        text: 'Error occurred during form submission.',
        duration: 1000, // 3 seconds
        gravity: 'top', // 'top', 'bottom', 'center'
        position: 'right', // 'left', 'center', 'right'
        backgroundColor: 'red',
		close: true,
      }).showToast();
    }
});

document.getElementById('contactUsTraining').addEventListener('submit', async (event) => {

    event.preventDefault();
    const form = event.target;
	console.log(form);
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phoneNo: form.phoneNo.value,
        qualification: form.qualification.value,
		address: form.address.value,
        message: form.message.value,
    };

    try {
        const response = await fetch('http://localhost:3000/contact_us_training', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form.');
        }
        const data = await response.json();
        if (data.message === 'Contact Us Client Saved Successfully'|| data.status === 'success') {
            Toastify({
          text: 'Thank You! We will contact you soon.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'green',
		  close: true,
        }).showToast();
		form.reset();

        } else {
			Toastify({
          text: 'Error submitting the form.',
          duration: 1000, // 3 seconds
          gravity: 'top', // 'top', 'bottom', 'center'
          position: 'right', // 'left', 'center', 'right'
          backgroundColor: 'red',
		  close: true,
        }).showToast();
        }
    } catch (error) {
		Toastify({
        text: 'Error occurred during form submission.',
        duration: 1000, // 3 seconds
        gravity: 'top', // 'top', 'bottom', 'center'
        position: 'right', // 'left', 'center', 'right'
        backgroundColor: 'red',
		close: true,
      }).showToast();
    }
});






