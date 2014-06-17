/*
* jQuery Searchable - v0.1.1
* Search rows in a table.
* http://kylebjohnson.me
*
* Made by Kyle B. Johnson
* Under MIT License
*/
(function( $ ) {
  $.fn.searchable = function(options) {

    var settings = $.extend({}, {
      search_class: '',
      search_placeholder: "search",
    }, options);

    //Make jQuery :contains Case-Insensitive
    //http://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
  $.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

    return this.each(function() {
      
      var search_id = this.id + '_search';

      jQuery('<input/>', {
        id: search_id,
        class: settings.search_class,
        placeholder: settings.placeholder,
      }).insertBefore( $(this) );

      $( '#' + search_id ).keypress(function() {
        var search = $( this ).val();
        $('tbody tr').show();
        if(search) {
          $("tbody tr:not(:contains('" + search + "'))").hide();
        }
      });

    });

  };
}( jQuery ));