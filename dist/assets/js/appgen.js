$(function() {
  $('[id*=_xpl_]').hide();

  $('[id$=_idea]').on('input', function() {
    // Get base id to select appropriate datalist.
    if (event.target.id) {
      var baseName = event.target.id.replace("_idea", "");
      $('[id^='+baseName+'_xpl_]').fadeOut(); // Hide any previous links in section.
      // Match the value to the datalist to find the data attr to fadeIn.
      if (baseName) {
        var val = event.target.value;
        var fadeName = $('#'+baseName+'_list').find('option[value="' +val+ '"]').attr('data');
        // If there's a match fadein the link.
        if (fadeName) {
          $('#'+baseName+'_xpl_'+fadeName).fadeIn();
        }
      }
    }
  });
});
// ---------
// from https://stackoverflow.com/questions/13418963/jquery-onchange-function-not-triggering-for-dynamically-created-inputs
// $('input').on('change', function() {
  // Does some stuff and logs the event to the console
// });

// ---------
// from https://stackoverflow.com/questions/1368591/jquery-partial-selectors
// This will select any tds with Node somewhere in their class name.

// $('td[class*=Node]').css('display','inline');
// This will select any tds with Node at the end of their class name.

// $('td[class$=Node]').css('display','inline');
