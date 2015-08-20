// Generated by CoffeeScript 1.9.3
describe("request test", function() {
  var dataObject, dateIso, form, formPrefixSirir13, formPrefixSirir20, formTest1, request, requestCheck, xmlRequest;
  dateIso = new Date;
  dateIso = dateIso.toISOString();
  dataObject = {
    "stopId": "NINOXE:StopPoint:SP:15625830:LOC",
    "lineId": "NINOXE:Line:15625451:LOC",
    "start": "18:30",
    "preview": "PT5H40M",
    "typeVisit": "arrivals",
    "maxStop": "5",
    "minStLine": "2",
    "onward": "2",
    "siriVersionAPI": "1.3"
  };
  requestCheck = {
    "MonitoringRef": "NINOXE:StopPoint:SP:15625830:LOC",
    "LineRef": "NINOXE:Line:15625451:LOC",
    "PreviewInterval": "PT5H40M",
    "StopVisitTypes": "arrivals",
    "MaximumStopVisits": "5",
    "MinimumStopVisitsPerLine": "2",
    "Onwards": "2"
  };
  formPrefixSirir13 = "<form class=\"form-horizontal\" id =\"stop-discovery\">\n<fieldset>\n  <legend>Requête</legend>\n    <div class=\"form-group\" id = \"siriVersionAPI\"\">\n        <label for=\"siriVersionAPI\" class=\"col-sm-2 control-label\">Version Chouette\n        </label>\n        <div class = \"col-sm-10\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI1\" value=\"1.3\" checked = \"checked\"> 1.3\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI2\" value=\"1.4\"> 1.4\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI3\" value=\"2.0\" > 2.0\n          </label>\n      </div>\n    </div>";
  formPrefixSirir20 = "<form class=\"form-horizontal\" id =\"stop-discovery\">\n<fieldset>\n  <legend>Requête</legend>\n    <div class=\"form-group\" id = \"siriVersionAPI\"\">\n        <label for=\"siriVersionAPI\" class=\"col-sm-2 control-label\">Version Chouette\n        </label>\n        <div class = \"col-sm-10\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI1\" value=\"1.3\" > 1.3\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI2\" value=\"1.4\"> 1.4\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI3\" value=\"2.0\" checked = \"checked\"> 2.0\n          </label>\n      </div>\n    </div>";
  form = "    <div class=\"form-group hidden\" id = \"requestorNameWrapper\">\n        <label for=\"requestorName\" class=\"col-lg-2 control-label\">Identifiant</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"requestorName\" placeholder=\"Nom du demandeur\" value=\"FR-IDF\">\n        </div>\n    </div>\n    <div class=\"form-group hidden\" id = \"requestorVersionWrapper\">\n        <label for=\"requestorVersion\" class=\"col-lg-2 control-label\">Version</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"requestorVersion\" placeholder=\"Nom du demandeur\" value=\"2.2\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"stopId\" class=\"col-lg-2 control-label\">StopId</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"stopId\" placeholder=\"Nom de l'arrêt ou id\" value = \"NINOXE:StopPoint:SP:15625830:LOC\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lineId\" class=\"col-lg-2 control-label\">LineId</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lineId\" placeholder=\"id de la ligne\" value = \"NINOXE:Line:15625451:LOC\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"start\" class=\"col-lg-2 control-label\">Heure</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"start\" placeholder=\"Heure de départ (HH:MM)\" value= \"18:30\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"operatorName\" class=\"col-lg-2 control-label\">Opérateur</label>\n        <div class=\"col-lg-10\">\n          <select class = \"form-control\" id = \"operatorName\">\n            <option>RATP</option>\n            <option>STIF</option>\n            <option>Batmobile</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"typeVisit\" class=\"col-lg-2 control-label\">Type d'arrêt</label>\n        <div class=\"col-lg-10\">\n          <select class = \"form-control\" id = \"typeVisit\" value = \"arrivals\">\n            <option>arrivals</option>\n            <option>departures</option>\n            <option>all</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"preview\" class=\"col-lg-2 control-label\">Intervalle temporel (mn)</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"preview\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value = \"340\">\n          <datalist id=\"time-span-list\">\n            <option>0</option>\n            <option>5</option>\n            <option>10</option>\n            <option>15</option>\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </datalist>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"maxStop\" class=\"col-lg-2 control-label\">Limite de passages</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"maxStop\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value = \"5\">\n          <datalist id=\"time-span-list\">\n            <option>0</option>\n            <option>5</option>\n            <option>10</option>\n            <option>15</option>\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </datalist>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"minStLine\" class=\"col-lg-2 control-label\">MinStLine</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"minStLine\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value=\"2\">\n          <datalist id=\"time-span-list\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </datalist>\n        </div>\n      </div>\n     <div class=\"form-group\">\n      <label for=\"onward\" class=\"col-lg-3 control-label\">Onward</label>\n        <div class=\"col-lg-2\">\n          <input type=\"text\" class=\"form-control\" id=\"onward\" list=\"time-span-list\" placeholder=\"nbs\" value=\"2\">\n          <datalist id=\"time-span-list\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </datalist>\n        </div>\n        <p class=\"col-lg-7\">passages suivants\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-lg-8 col-lg-offset-4\">\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </div>\n    </div>\n  </fieldset>\n</form>";
  request = new stopMonitoringRequest;
  formTest1 = formPrefixSirir13 + form;
  xmlRequest = request.getStopMonitoring(formTest1);
  it("checks the form is parsed correctly", function() {
    var expected, prop, results;
    results = [];
    for (prop in dataObject) {
      expected = dataObject[prop];
      results.push(expect(request[prop]).toEqual(expected));
    }
    return results;
  });
  it("checks the request is right", function() {
    var expected, prop, results;
    results = [];
    for (prop in requestCheck) {
      expected = requestCheck[prop];
      results.push(expect($.parseXML(xmlRequest).getElementsByTagName(prop)[0].innerHTML).toEqual(expected));
    }
    return results;
  });
  it("checks the API version is right", function() {
    var requestVersion;
    requestVersion = $.parseXML(xmlRequest).getElementsByTagName('Request')[0].getAttribute("version");
    return expect(requestVersion).toEqual(dataObject.siriVersionAPI);
  });
  return it("checks the API version is right when set to 2", function() {
    var formTest2, requestVersion;
    formTest2 = formPrefixSirir20 + form;
    xmlRequest = request.getStopMonitoring(formTest2);
    requestVersion = $.parseXML(xmlRequest).getElementsByTagName('Request')[0].getAttribute("version");
    return expect(requestVersion).toEqual("2.0:FR-IDF-2.2");
  });
});
