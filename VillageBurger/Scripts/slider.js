//**** slider function ****// 
$('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  console.log($this);
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  console.log(currentIndex);
  var timeout;                              // Sets gap between auto-sliding

	//**** Function move for changing to next slide ****//
  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables
    
    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
      $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
      $group.css( {left: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }  //**** End of function move ****//
	
	//**** Function advance for setting and clearing timeout ****//
  function advance() {                     // Used to set 
  
    clearTimeout(timeout);              	// Clear previous timeout
	
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 4000);              	// Milliseconds timer will wait
	
  }  //**** End of function advamce ****//
	
	//**** Function for adding index buttons ****//
$.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === index) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });  //**** End of function for index buttons ****//
  
	//**** Function for previous and next buttons ****//
  $.each($group, function() {           // Create a next and prev button element for the group
	  
	  var $pbutton = $('<a class="prev" >&#10094;</a>');   // create prev button html
	  var $nbutton = $('<a class="next" >&#10095;</a>');   // create next button html
      
	  $pbutton.appendTo($(this));                           // append next button to slide group
	  $nbutton.appendTo($(this));                   // append next button to slide group
	  
    $pbutton.on('click', function() {  // Create event handler for the prev button
     if (currentIndex === 0) {             // If currentIndex is on first slide	  
        move(($slides.length - 1));        // move to last one
      } else {                             // Otherwise
        move(currentIndex - 1);            // Move to previous slide
      }
    }); 
    
	
	 $nbutton.on('click', function() { // Create event handler for the next button
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);                  // Move to next slide
      } else {                                   // Otherwise
        move(0);                                 // Move to the first slide
      }
    });
	  
  });  //**** End of function for previous and next buttons ****//

  advance();                          // Script is set up, advance() to move it

  
}); //**** End of slider function ****//

