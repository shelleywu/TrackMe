var airtable_list_url = 'https://api.airtable.com/v0/appQ3KIrYyj9fUk3z/Applicants?api_key=keyCUEDL2QDeiT6a1'


// This is where we get the JSON data from Airtable!

$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      console.log(val.fields)
      items.push(`<h2>${val.fields['Name']}</h2>`);
    });
    $(".list-view").append(items.join(''));
  });