var airtable_list_url = 'https://api.airtable.com/v0/appT2loD1k3FTMUYx/Table%201?api_key=keyCUEDL2QDeiT6a1';


// This is where we get the JSON data from Airtable!

//TOOO: Do the entire list view of your items here
var itemList = function(name, attachments) {
  return `
  <div class="col-sm-4">
              <img class="img-responsive" src="${attachments}" class="img-circle" alt="${name}">
              <h2>${name}</h2>
  </div>`;
  }
  
  // This is where we get the JSON data from Airtable!
  $.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      // console.log(val.fields)
      var name = val.fields['Name'];
      var attachments = val.fields['Attachments'][0] ? val.fields['Attachments'][0].url : null;
      var html = itemList(name, attachments);
      items.push(html);
    });
    $(".list-view").append(items.join(''));
  });

