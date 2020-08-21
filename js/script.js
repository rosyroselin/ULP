$(document).ready(function () {
	//Data Table JS
	$('#example, #example-1').DataTable( {
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0]+' '+data[1];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'table'
				} )
			}
		}
	});
	
	//For Validation
	$('form').validate( {
	errorPlacement: function(){
            return false;
        },
	});
	
	//Custom Select
	$('.custom-select').select2({
		minimumResultsForSearch: Infinity,
	});
	
	
	
	function toggleIcon(e) {
		$(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-chevron-down fa-chevron-up');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	
	//$('[data-toggle="popover"]').popover({ trigger: 'hover' });
	$('.v-tab-head .v-tab-link').click(tabHandler);
	$('.v-tab-head.v-tab-link').click(tabHandler);
});

var tabHandler = function (e) {
	e.preventDefault();
	var target = $($(this).data('target')),
	tabLink = $('.v-tab-link[data-target="' + $(this).data('target') + '"]');
	tabPanelToShow(tabLink);
	tabLinkToActivate(target);
};

var tabPanelToShow = function (elem) {
	$('.v-tab-link').removeClass('active').parent().find(elem).addClass('active');
};

var tabLinkToActivate = function (elem) {
	$('.v-tab-pane').children('div').removeClass('in').parent().find(elem).addClass('in');
};


//Date Picker JS
$(function () {
	$(".date").datepicker({ 
		autoclose: true, 
		clearBtn: true,
		//multidate: true
		
	})//.datepicker('update', new Date());
});
//////////////////////////////////////////////Login Page JS///////////////////////////////////////////////////////////
//ToolTip
$('[data-toggle="tooltip"]').tooltip();

$("ul.nav-tabs a").click(function (e) {
	e.preventDefault();  
	$(this).tab('show');
});


//Form Switch Login Page JS
$($('input[name=group2]')).on('change', function (event) {
	if ($('input[name=group2]:checked').val() === "yes") {
		internetBank = "Y";
		} else {
		internetBank = "N";
	}
	setCustFlag();
});

function setCustFlag() {
	
	if (internetBank === "Y") {
		
		custFlag = "ERV";
		$("#existingDiv").show('slow');
		$("#existingDiv").attr("disabled", false);
		$("#notExistDiv").hide('slow');
		$(".idBtnClass").hide();
		$("#authenticateNetBank").show();
		$('#authorization').prop("checked", false);
		$("#captchaDebitDiv").show();
		generateCaptchadebit();
		//            generateCaptcha();
		} else if (internetBank === "N") {
		$('#authorization').prop("checked", false);
		custFlag = "ERV";
		$("#existingDiv").hide('slow');
		$("#notExistDiv").show('slow');
		$(".newCust").hide('slow');
		$(".existCust").show('slow');
		$("#ENTITY").val("");
		$("#ACCOUNTNUM").val("");
		//        $("#sendOTP").attr("disabled", true);
		$(".idBtnClass").hide();
		$("#applyExist").show();
		$("#captchaDiv").hide();
		} else if (currentAcc === "N") {
		custFlag = "NTB";
		$('#authorization').prop("checked", false);
		$("#existingDiv").hide('slow');
		$("#notExistDiv").show('slow');
		$(".existCust").hide();
		$(".newCust").show();
		$("#ENTITY").val("");
		//        $("#sendOTP").attr("disabled", true);
		$('input[name=group2]').removeAttr("checked");
		$(".idBtnClass").hide();
		$("#applyNew").show();
		$("#captchaDiv").hide();
		$("#ENTITY,#constitution,#EMAIL_ADD").hide();
		
		} else if (currentAcc === "Y" && internetBank === "") {
		$(".idBtnClass").hide();
		$('#authorization').prop("checked", false);
	}
}