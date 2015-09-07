// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
	$(function() {
    var stopDSC = new stopMonitoringRequest;
    var stopDscRequest = stopDSC.getStopDiscovery();
    var lineDscRequest = stopDSC.getLineDiscovery();
    var stopDSCResponse = new stopDiscoveryResponse;


    var availableStations;
    stopDSC.sendRequest(stopDscRequest, stopDSC.handleStopDiscoveryResponse, stopDSCResponse);

    stopDSC.sendRequest(lineDscRequest, stopDSC.handleLineDiscoveryResponse, stopDSCResponse);

    $( "#lineName" ).on('focusout', function() {
      var regEx = /\d{8}/;

      if ( regEx.exec( $(this).val() ) ) {
        $( "#lineId" ).val("NINOXE:Line:SPOR:" + $(this).val() + ":LOC")
      }
    });

    $( "#inputEndintgPoint" ).autocomplete({
      source: availableStations
    });
    $( "#inputDayDate" ).datepicker();
    $( "#Start" ).timepicker({
    	controlType: 'select'
    });
  });

  $('#siriVersionAPI3, #siriGeneralVersionAPI3').on('click', function() {
    var hiddenFields = []
    hiddenFields = $(this).parentsUntil('.form-horizontal').find('.hidden')
    hiddenFields.each(function(index, elt) {
      $(elt).removeClass('hidden');
    });
  });

  $('#siriVersionAPI2, #siriVersionAPI1, #siriGeneralVersionAPI2, #siriGeneralVersionAPI1').on('click', function() {

    var nodeName = $(this).parentsUntil('.form-horizontal').find('#requestorNameWrapper')
    var nodeVersion = $(this).parentsUntil('.form-horizontal').find('#requestorVersionWrapper')
    var hiddenArray = [nodeName, nodeVersion];

    if ($(this).prop('id') == "siriGeneralVersionAPI1" || $(this).prop('id') == "siriGeneralVersionAPI2") {
      var nodeDestinationRef =  $(this).parentsUntil('.form-horizontal').find('#destinationRefWrapper')
      var nodeGroupDestination = $(this).parentsUntil('.form-horizontal').find('#groupOfLinesRefWrapper')
      hiddenArray = hiddenArray.concat([nodeDestinationRef, nodeGroupDestination]);
    } else {
      var nodeMinimumStopVisitPerLine = $(this).parentsUntil('.form-horizontal').find('#minimumStopVisitPerLineViaWrapper')
      hiddenArray = hiddenArray.concat([nodeMinimumStopVisitPerLine]);
    };

    hiddenArray.forEach(function(elt) {
      if (elt.hasClass('hidden') == false) {
        elt.addClass('hidden');
      }
    });

  });
  function superToggle(el) {
    if ($(el).hasClass('i-m-there')) {
      $(el).removeClass('i-m-there');
    }
    else {
      $(el).addClass('i-m-there');
    }

    $(el).toggle();
  }

  $('.navbar-nav > li > ul > li > a, #stop-monitoring-main').on('click', function() {
    var target = this.getAttribute('href');
    $('.i-m-there').each(function(index, el) {
      $(el).toggle();
      $(el).removeClass('i-m-there');
    });
    superToggle(target);

    if ($('#response-panel-wrapper').hasClass('i-m-there')) {
      $('#response-panel-wrapper').removeClass('i-m-there');
      $('#response-panel-wrapper').hide();
    };



  });

  $('#stop-monitoring-trigger, #stop-monitoring-main').on('click', function() {
    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there') != true) {
      $('#stop-monitoring-form-wrapper').toggle();
      $('#stop-monitoring-form-wrapper').addClass('i-m-there');
      $('#stop-monitoring-from-response').attr("href", "#service-discovery-form-wrapper");
    }

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there')) {
      $('#service-discovery-form-wrapper').toggle();
      $('#service-discovery-form-wrapper').removeClass('i-m-there');
    }

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there')) {
      $('#get-general-message-form-wrapper').toggle();
      $('#get-general-message-form-wrapper').removeClass('i-m-there');
    }


  });

  $('#get-general-message-trigger').on('click', function() {
    if ($('#get-general-message-form-wrapper').hasClass('i-m-there') != true) {
      $('#get-general-message-form-wrapper').toggle();
      $('#get-general-message-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#get-general-message-form-wrapper");
    }

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there')) {
      $('#service-discovery-form-wrapper').toggle();
      $('#service-discovery-form-wrapper').removeClass('i-m-there');
    }

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there')) {
      $('#stop-monitoring-form-wrapper').toggle();
      $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    }


  });

  $('#service-discovery-trigger').on('click', function() {
    if ($('#service-discovery-form-wrapper').hasClass('i-m-there') != true) {
      $('#service-discovery-form-wrapper').toggle();
      $('#service-discovery-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#service-discovery-form-wrapper");
    }

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there') == true) {
      $('#get-general-message-form-wrapper').toggle();
      $('#get-general-message-form-wrapper').removeClass('i-m-there');
    }

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there') == true) {
      $('#stop-monitoring-form-wrapper').toggle();
      $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    }


  });

  $('.backlinking a').on('click', function() {
    var target = this.getAttribute('href');
    $('#right-panel-wrapper').find('.i-m-there').each(function(index, el) {
      $(el).toggle();
      $(el).removeClass('i-m-there');
    });

    superToggle(target);

  });

  $('.pannel-trigger').on('click', function() {
    $('#right-panel-wrapper').toggleClass('right-panel-wrapper');
    $('#right-panel-wrapper, #explaination-texts').toggleClass('col-xs-12 col-sm-6');
    $('.pannel-trigger').toggleClass('open');

    $('.explaination-text').each(function(i, elt) {
      $(elt).toggleClass('container');
    })

  })


});