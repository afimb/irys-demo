// Generated by CoffeeScript 1.9.3
var stopMonitoringCard;

stopMonitoringCard = (function() {
  function stopMonitoringCard() {}

  stopMonitoringCard.prototype.stopMonitoredVisit = {};

  stopMonitoringCard.prototype.onwardsCall = [];

  stopMonitoringCard.prototype.monitoredCall = {};

  stopMonitoringCard.prototype.generalMessage = {};

  stopMonitoringCard.prototype.stopDiscovery = {};

  stopMonitoringCard.prototype.lineDiscovery = {};

  stopMonitoringCard.prototype.monitoredVehicleJourney = {};

  stopMonitoringCard.prototype.stopDiscoveryLines = [];

  stopMonitoringCard.prototype.lineDirections = [];

  stopMonitoringCard.prototype.mustacheStopMonitoredVisit = [];

  stopMonitoringCard.prototype.mustacheOnwards = [];

  stopMonitoringCard.prototype.mustacheStopDiscoveries = [];

  stopMonitoringCard.prototype.mustacheMonitoredCall = [];

  stopMonitoringCard.prototype.mustacheGeneralMessage = [];

  stopMonitoringCard.prototype.mustacheStopLines = [];

  stopMonitoringCard.prototype.mustacheLineDiscovery = [];

  stopMonitoringCard.prototype.mustacheLineDirections = [];

  stopMonitoringCard.prototype.stopMonitoringTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{monitoredCall.StopPointName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheStopMonitoredVisit}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheStopMonitoredVisit}}\n    {{#monitoredCall}}\n      <h4>Monitored Call</h4>\n      {{#mustacheMonitoredCall}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/mustacheMonitoredCall}}\n    {{/monitoredCall}}\n    {{#mustacheOnwards}}\n      <h4>OnWards</h4>\n      {{#onWard}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/onWard}}\n    {{/mustacheOnwards}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.generalMessageTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>General Message</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#generalMessage}}\n      <h4>General Message</h4>\n      {{#mustacheGeneralMessage}}\n        <div>{{key}} : {{value}}</div>\n      {{/mustacheGeneralMessage}}\n    {{/generalMessage}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.stopDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{stopDiscovery.StopName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheStopDiscoveries}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheStopDiscoveries}}\n    <h4>Lines</h4>\n    {{#mustacheStopLines}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheStopLines}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.lineDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{lineDiscovery.LineName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheLineDiscovery}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheLineDiscovery}}\n    <h4>Lines</h4>\n    {{#mustacheLineDirections}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheLineDirections}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.parseSiriResponse = function(node) {
    var child, i, len, ref;
    this.stopMonitoredVisit = {};
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      this.buildResponseJSON(child);
    }
  };

  stopMonitoringCard.prototype.buildResponseJSON = function(node) {
    var child, i, len, ref;
    if (node.nodeName === 'siri:FramedVehicleJourneyRef' || node.nodeName === 'siri:MonitoredVehicleJourney') {
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        this.buildResponseJSON(child);
      }
    } else if (node.nodeName === 'siri:MonitoredCall') {
      this.addMonitoredCall(node);
    } else if (node.nodeName === 'siri:OnwardCalls') {
      this.addOnwards(node);
    } else {
      this.stopMonitoredVisit[this.unSiried(node.nodeName)] = node.innerHTML;
    }
  };

  stopMonitoringCard.prototype.buildGeneralMessageJSON = function(node) {
    var child, i, len, ref;
    if (node.nodeName === 'siri:Content' || node.nodeName === 'siri:Message' || node.nodeName === 'siri:GeneralMessage') {
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        this.buildGeneralMessageJSON(child);
      }
    } else {
      this.generalMessage[this.unSiried(node.nodeName)] = node.innerHTML;
    }
  };

  stopMonitoringCard.prototype.buildStopDiscoveryJSON = function(node) {
    var child, i, len, ref;
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      if (child.nodeName === 'siri:Lines') {
        this.addStopLine(child);
      } else {
        this.stopDiscovery[this.unSiried(child.nodeName)] = child.innerHTML;
      }
    }
  };

  stopMonitoringCard.prototype.buildLineDiscoveryJSON = function(node) {
    var child, i, len, ref;
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      if (child.nodeName === 'siri:Destinations') {
        this.addLineDirection(child);
      } else {
        this.lineDiscovery[this.unSiried(child.nodeName)] = child.innerHTML;
      }
    }
  };

  stopMonitoringCard.prototype.addLineDirection = function(node) {
    var child, grandChild, i, j, len, len1, lineDirection, ref, ref1;
    this.lineDirections = [];
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      lineDirection = {};
      ref1 = child.children;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        grandChild = ref1[j];
        lineDirection[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML;
      }
      this.lineDirections.push(lineDirection);
    }
  };

  stopMonitoringCard.prototype.addOnwards = function(node) {
    var child, grandChild, i, j, len, len1, onward, ref, ref1;
    this.onwardsCall = [];
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      onward = {};
      ref1 = child.children;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        grandChild = ref1[j];
        onward[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML;
      }
      this.onwardsCall.push(onward);
    }
  };

  stopMonitoringCard.prototype.addStopLine = function(node) {
    var child, i, len, line, ref;
    this.stopDiscoveryLines = [];
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      line = {};
      line[this.unSiried(child.nodeName)] = child.innerHTML;
      this.stopDiscoveryLines.push(line);
    }
  };

  stopMonitoringCard.prototype.addMonitoredCall = function(node) {
    var child, i, len, ref;
    this.monitoredCall = {};
    ref = node.children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      this.monitoredCall[this.unSiried(child.nodeName)] = child.innerHTML;
    }
  };

  stopMonitoringCard.prototype.unSiried = function(node) {
    return node.replace('siri:', '');
  };

  stopMonitoringCard.prototype.checkSiriObject = function(object) {
    if (jQuery.isEmptyObject(object)) {
      object = null;
    } else {
      object;
    }
    return object;
  };

  stopMonitoringCard.prototype.buildMustacheStopCard = function() {
    var k, ref, v;
    ref = this.stopMonitoredVisit;
    for (k in ref) {
      v = ref[k];
      if (this.stopMonitoredVisit.hasOwnProperty(k)) {
        this.mustacheStopMonitoredVisit.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheMonitoredCall = function() {
    var k, ref, v;
    this.monitoredCall = this.checkSiriObject(this.monitoredCall);
    ref = this.monitoredCall;
    for (k in ref) {
      v = ref[k];
      if (this.monitoredCall.hasOwnProperty(k)) {
        this.mustacheMonitoredCall.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheOnwards = function() {
    var i, k, len, onward, ref, tempOnward, v;
    ref = this.onwardsCall;
    for (i = 0, len = ref.length; i < len; i++) {
      onward = ref[i];
      tempOnward = {
        'onWard': []
      };
      for (k in onward) {
        v = onward[k];
        if (onward.hasOwnProperty(k)) {
          tempOnward.onWard.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheOnwards.push(tempOnward);
    }
  };

  stopMonitoringCard.prototype.buildMustacheStopDiscovery = function() {
    var k, ref, v;
    ref = this.stopDiscovery;
    for (k in ref) {
      v = ref[k];
      if (this.stopDiscovery.hasOwnProperty(k)) {
        this.mustacheStopDiscoveries.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheStopLines = function() {
    var i, k, len, line, ref, tempLine, v;
    ref = this.stopDiscoveryLines;
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
      tempLine = {
        'line': []
      };
      for (k in line) {
        v = line[k];
        if (line.hasOwnProperty(k)) {
          tempLine.line.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheStopLines.push(tempLine);
    }
  };

  stopMonitoringCard.prototype.buildMustacheLineDiscovery = function() {
    var k, ref, v;
    ref = this.lineDiscovery;
    for (k in ref) {
      v = ref[k];
      if (this.lineDiscovery.hasOwnProperty(k)) {
        this.mustacheLineDiscovery.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheLineDirections = function() {
    var i, k, len, line, ref, tempLine, v;
    ref = this.lineDirections;
    for (i = 0, len = ref.length; i < len; i++) {
      line = ref[i];
      tempLine = {
        'line': []
      };
      for (k in line) {
        v = line[k];
        if (line.hasOwnProperty(k)) {
          tempLine.line.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheLineDirections.push(tempLine);
    }
  };

  stopMonitoringCard.prototype.buildMustacheGeneralMessage = function() {
    var k, ref, v;
    this.generalMessage = this.checkSiriObject(this.generalMessage);
    ref = this.generalMessage;
    for (k in ref) {
      v = ref[k];
      if (this.generalMessage.hasOwnProperty(k)) {
        this.mustacheGeneralMessage.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildStopMonitoring = function() {
    this.mustacheStopMonitoredVisit = [];
    this.mustacheOnwards = [];
    this.mustacheMonitoredCall = [];
    this.buildMustacheStopCard();
    this.buildMustacheOnwards();
    this.buildMustacheMonitoredCall();
    return this.renderCard(this.stopMonitoringTemplate);
  };

  stopMonitoringCard.prototype.buildGeneralMessage = function() {
    this.mustacheGeneralMessage = [];
    this.buildMustacheGeneralMessage();
    return this.renderCard(this.generalMessageTemplate);
  };

  stopMonitoringCard.prototype.buildStopDiscovery = function() {
    this.mustacheStopDiscoveries = [];
    this.mustacheStopLines = [];
    this.buildMustacheStopDiscovery();
    this.buildMustacheStopLines();
    return this.renderCard(this.stopDiscoveryTemplate);
  };

  stopMonitoringCard.prototype.buildLineDiscovery = function() {
    this.mustacheLineDiscovery = [];
    this.mustacheLineDirections = [];
    this.buildMustacheLineDiscovery();
    this.buildMustacheLineDirections();
    return this.renderCard(this.lineDiscoveryTemplate);
  };

  stopMonitoringCard.prototype.renderCard = function(template) {
    var rendered;
    Mustache.parse(template);
    rendered = Mustache.render(template, this);
    $("#response").append(rendered);
  };

  return stopMonitoringCard;

})();
