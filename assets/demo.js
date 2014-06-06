$(document).ready(function () {

	$.ajax({
		url: 'http://api.randomuser.me/?results=100&seed=foobar',
		dataType: 'json',
		success: function (data) {
		  for ( var i = 0; i < data.results.length; i++ ) {
		    //console.log(data.results[i].user.name.first);
		    $('#example tbody').append("<tr></tr>");
		    $('#example tbody tr:last-of-type')
		    .append("<td>" + data.results[i].user.name.first + " " + data.results[i].user.name.last + "</td>")
		    .append("<td>" + data.results[i].user.email + "</td>")
		    .append("<td>" + data.results[i].user.cell + "</td>");
		  }
		}
	});

	$( "#example" ).searchable({
		placeholder: "Search Table",
	});
});