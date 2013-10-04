$(document).ready(function(){

	// Datepicker

	$('.selectDate').datepicker({ dateFormat: 'DD, M dd'}).val($.datepicker.formatDate('DD, M dd', new Date()));

    // Form Actions

    $.fn.savedChanges = function(){
		$(this).html('<i class="icon-ok"></i> Changes Saved').addClass('active');
	}

    function btnOriginal(){
    	var btnOrig = $('.btn-save');
    	btnOrig.html('Save Changes').removeClass('active');
    }

	$('.btn-save').click(function(){
		$(this).savedChanges();
	});

	$('form').on('input', btnOriginal);
	$('select, checkbox, radio, .selectDate').change(btnOriginal);

});