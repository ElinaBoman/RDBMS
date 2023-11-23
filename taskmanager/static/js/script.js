
document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);



  // datepicker initialization

  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  }); 

  // select
  let selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  let collapsibles = document.querySelectorAll('.collapsible');
  let options = {
    outDuration: 300,
    inDuration: 500
  }
  M.Collapsible.init(collapsibles, options);
});

// task collaps 


