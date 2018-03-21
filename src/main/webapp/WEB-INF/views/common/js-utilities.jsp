<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<script type="text/javascript" charset="utf-8">
   
    function initView(form_element, isDeleteAction) {
        // Disables the sending of the Form if you press the ENTER key
        form_element.bind("keyup keypress keydown", function(e) {
            var code = e.keyCode || e.which;
            if ((code == 13 && e.target.localName != "textarea") || (code == 8 && e.target.localName != "input" && e.target.localName != "textarea")) {
                e.preventDefault();
                return false;
            }
        });


        // Used to change the value of checkBox when they are selected
        $('[type=checkbox]').click(function() {
            if ($(this).prop('checked')) {
                $(this).attr('checked', true);
            } else {
                $(this).attr('checked', false);
            }
        });
        
     	// IF delete disable all object
		if (isDeleteAction) {
			$(":input[type='text'], :input[type='password'], textarea").each(function() {
				$(this).attr('disabled', 'disabled');
			});
			$("input:checkbox").attr('disabled', true);
			
			$(".select").select2("enable", false);
		}

    }
    
        
    function isRequired(object) {
        return !isEmptyValue(object.val());
    }
    
    function isEmptyValue(value){
    	return /^\s*$/.test(value);
    }
    


</script>