// Generated by CoffeeScript 1.9.3
describe("ajax test", function() {
  var SMCard, SMRequest, form, siriResponse, siriResponseXML;
  form = "<form class=\"form-horizontal\" id =\"stop-discovery\">\n<fieldset>\n  <legend>Requête</legend>\n    <div class=\"form-group\" id = \"siriVersionAPI\"\">\n        <label for=\"siriVersionAPI\" class=\"col-sm-2 control-label\">Version Chouette\n        </label>\n        <div class = \"col-sm-10\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI1\" value=\"1.3\" checked = \"checked\"> 1.3\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI2\" value=\"1.4\"> 1.4\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"siriVersionAPIOptions\" id=\"siriVersionAPI3\" value=\"2.0\"> 2.0\n          </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"stopId\" class=\"col-lg-2 control-label\">StopId</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"stopId\" placeholder=\"Nom de l'arrêt ou id\" value = \"toto\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lineId\" class=\"col-lg-2 control-label\">LineId</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lineId\" placeholder=\"id de la ligne\" value = \"tutu\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"start\" class=\"col-lg-2 control-label\">Heure</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"start\" placeholder=\"Heure de départ (HH:MM)\" value= \"23:30\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"operatorName\" class=\"col-lg-2 control-label\">Opérateur</label>\n        <div class=\"col-lg-10\">\n          <select class = \"form-control\" id = \"operatorName\">\n            <option>RATP</option>\n            <option>STIF</option>\n            <option>Batmobile</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"typeVisit\" class=\"col-lg-2 control-label\">Type d'arrêt</label>\n        <div class=\"col-lg-10\">\n          <select class = \"form-control\" id = \"typeVisit\" value = \"meow\">\n            <option>arrivals</option>\n            <option>departures</option>\n            <option>all</option>\n          </select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"preview\" class=\"col-lg-2 control-label\">Intervalle temporel (mn)</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"preview\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value = \"340\">\n          <datalist id=\"time-span-list\">\n            <option>0</option>\n            <option>5</option>\n            <option>10</option>\n            <option>15</option>\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </datalist>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"maxStop\" class=\"col-lg-2 control-label\">Limite de passages</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"maxStop\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value = \"graou\">\n          <datalist id=\"time-span-list\">\n            <option>0</option>\n            <option>5</option>\n            <option>10</option>\n            <option>15</option>\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </datalist>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"minStLine\" class=\"col-lg-2 control-label\">MinStLine</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" id=\"minStLine\" list=\"time-span-list\" placeholder=\"Intervalle temporel\" value=\"aloha\">\n          <datalist id=\"time-span-list\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </datalist>\n        </div>\n      </div>\n     <div class=\"form-group\">\n      <label for=\"onward\" class=\"col-lg-3 control-label\">Onward</label>\n        <div class=\"col-lg-2\">\n          <input type=\"text\" class=\"form-control\" id=\"onward\" list=\"time-span-list\" placeholder=\"nbs\" value=\"bibibobo\">\n          <datalist id=\"time-span-list\">\n            <option>1</option>\n            <option>2</option>\n            <option>3</option>\n            <option>4</option>\n            <option>5</option>\n          </datalist>\n        </div>\n        <p class=\"col-lg-7\">passages suivants\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-lg-8 col-lg-offset-4\">\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </div>\n    </div>\n  </fieldset>\n</form>";
  siriResponse = "<SOAP-ENV:Envelope\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <SOAP-ENV:Body>\n      <wsdl:GetStopMonitoringResponse\n          xmlns:wsdl=\"http://wsdl.siri.org.uk\">\n          <ServiceDeliveryInfo>\n              <siri:ResponseTimestamp\n                  xmlns:siri=\"http://www.siri.org.uk/siri\">2015-07-28T16:17:14.844+02:00\n              </siri:ResponseTimestamp>\n              <siri:ProducerRef\n                  xmlns:siri=\"http://www.siri.org.uk/siri\">DRYADE\n              </siri:ProducerRef>\n              <siri:Address\n                  xmlns:siri=\"http://www.siri.org.uk/siri\">http://chouette.cityway.fr/irys_server\n              </siri:Address>\n              <siri:ResponseMessageIdentifier\n                  xmlns:siri=\"http://www.siri.org.uk/siri\">DRYADE:StopMonitoring:48:LOC\n              </siri:ResponseMessageIdentifier>\n              <siri:RequestMessageRef\n                  xmlns:siri=\"http://www.siri.org.uk/siri\">StopMonitoring:Test:1\n              </siri:RequestMessageRef>\n          </ServiceDeliveryInfo>\n          <Answer>\n              <siri:StopMonitoringDelivery\n                  xmlns:siri=\"http://www.siri.org.uk/siri\" version=\"1.3\">\n                  <siri:ResponseTimestamp>2015-07-28T16:17:13.513+02:00</siri:ResponseTimestamp>\n                  <siri:Status>true</siri:Status>\n                  <siri:MonitoredStopVisit>\n                      <siri:RecordedAtTime>2015-07-28T03:00:17.173+02:00</siri:RecordedAtTime>\n                      <siri:ItemIdentifier>NINOXE:StopPoint:15574372-NINOXE:VehicleJourney:15574468</siri:ItemIdentifier>\n                      <siri:MonitoringRef>NINOXE:StopPoint:SP:15575499:LOC</siri:MonitoringRef>\n                      <siri:MonitoredVehicleJourney>\n                          <siri:LineRef>NINOXE:Line:15574334:LOC</siri:LineRef>\n                          <siri:FramedVehicleJourneyRef>\n                              <siri:DataFrameRef>Tatrobus:2010-02-17</siri:DataFrameRef>\n                              <siri:DatedVehicleJourneyRef>NINOXE:VehicleJourney:15574468:LOC</siri:DatedVehicleJourneyRef>\n                          </siri:FramedVehicleJourneyRef>\n                          <siri:JourneyPatternRef>NINOXE:JourneyPattern:15574388:LOC</siri:JourneyPatternRef>\n                          <siri:VehicleMode>bus</siri:VehicleMode>\n                          <siri:RouteRef>NINOXE:Route:15574337:LOC</siri:RouteRef>\n                          <siri:PublishedLineName xml:lang=\"FR\">Ligne 1 Bleue</siri:PublishedLineName>\n                          <siri:DirectionName xml:lang=\"FR\">Mairie-1 (R)</siri:DirectionName>\n                          <siri:OperatorRef>NINOXE:Company:13689687:LOC</siri:OperatorRef>\n                          <siri:OriginRef>NINOXE:StopPoint:BP:15574348:LOC</siri:OriginRef>\n                          <siri:OriginName xml:lang=\"FR\">Le Bucoliques (R)</siri:OriginName>\n                          <siri:DestinationRef>NINOXE:StopPoint:BP:15574356:LOC</siri:DestinationRef>\n                          <siri:DestinationName xml:lang=\"FR\">Mairie-1 (R)</siri:DestinationName>\n                          <siri:OriginAimedDepartureTime>2015-07-28T16:33:00.000+02:00</siri:OriginAimedDepartureTime>\n                          <siri:DestinationAimedArrivalTime>2015-07-28T18:18:00.000+02:00</siri:DestinationAimedArrivalTime>\n                          <siri:Monitored>false</siri:Monitored>\n                          <siri:MonitoredCall>\n                              <siri:StopPointRef>NINOXE:StopPoint:BP:15574348:LOC</siri:StopPointRef>\n                              <siri:Order>1</siri:Order>\n                              <siri:StopPointName xml:lang=\"FR\">Le Bucoliques (R)</siri:StopPointName>\n                              <siri:VehicleAtStop>false</siri:VehicleAtStop>\n                              <siri:PlatformTraversal>false</siri:PlatformTraversal>\n                              <siri:DestinationDisplay xml:lang=\"FR\">Mairie-1 (R)</siri:DestinationDisplay>\n                              <siri:AimedArrivalTime>2015-07-28T16:33:00.000+02:00</siri:AimedArrivalTime>\n                              <siri:ExpectedArrivalTime>2015-07-28T16:32:45.000+02:00</siri:ExpectedArrivalTime>\n                              <siri:ArrivalStatus>onTime</siri:ArrivalStatus>\n                              <siri:AimedDepartureTime>2015-07-28T16:35:00.000+02:00</siri:AimedDepartureTime>\n                              <siri:ExpectedDepartureTime>2015-07-28T16:34:45.000+02:00</siri:ExpectedDepartureTime>\n                              <siri:DepartureStatus>onTime</siri:DepartureStatus>\n                          </siri:MonitoredCall>\n                          <siri:OnwardCalls>\n                              <siri:OnwardCall>\n                                  <siri:StopPointRef>NINOXE:StopPoint:BP:15574349:LOC</siri:StopPointRef>\n                                  <siri:Order>2</siri:Order>\n                                  <siri:StopPointName xml:lang=\"FR\">Orques et Trolls (R)</siri:StopPointName>\n                                  <siri:VehicleAtStop>false</siri:VehicleAtStop>\n                                  <siri:AimedArrivalTime>2015-07-28T16:48:00.000+02:00</siri:AimedArrivalTime>\n                                  <siri:ExpectedArrivalTime>2015-07-28T16:47:45.000+02:00</siri:ExpectedArrivalTime>\n                                  <siri:ArrivalStatus>onTime</siri:ArrivalStatus>\n                                  <siri:AimedDepartureTime>2015-07-28T16:50:00.000+02:00</siri:AimedDepartureTime>\n                                  <siri:ExpectedDepartureTime>2015-07-28T16:49:45.000+02:00</siri:ExpectedDepartureTime>\n                                  <siri:DepartureStatus>onTime</siri:DepartureStatus>\n                              </siri:OnwardCall>\n                              <siri:OnwardCall>\n                                  <siri:StopPointRef>NINOXE:StopPoint:BP:15574350:LOC</siri:StopPointRef>\n                                  <siri:Order>3</siri:Order>\n                                  <siri:StopPointName xml:lang=\"FR\">Bill Boquet (R)</siri:StopPointName>\n                                  <siri:VehicleAtStop>false</siri:VehicleAtStop>\n                                  <siri:AimedArrivalTime>2015-07-28T17:03:00.000+02:00</siri:AimedArrivalTime>\n                                  <siri:ExpectedArrivalTime>2015-07-28T17:02:45.000+02:00</siri:ExpectedArrivalTime>\n                                  <siri:ArrivalStatus>onTime</siri:ArrivalStatus>\n                                  <siri:AimedDepartureTime>2015-07-28T17:05:00.000+02:00</siri:AimedDepartureTime>\n                                  <siri:ExpectedDepartureTime>2015-07-28T17:04:45.000+02:00</siri:ExpectedDepartureTime>\n                                  <siri:DepartureStatus>onTime</siri:DepartureStatus>\n                              </siri:OnwardCall>\n                          </siri:OnwardCalls>\n                      </siri:MonitoredVehicleJourney>\n                  </siri:MonitoredStopVisit>\n                </siri:StopMonitoringDelivery>\n          </Answer>\n          <AnswerExtension/>\n      </wsdl:GetStopMonitoringResponse>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>";
  SMRequest = new stopMonitoringRequest;
  SMCard = new stopMonitoringCard;
  siriResponseXML = $.parseXML(siriResponse);
  siriResponseXML = $(siriResponseXML);
  beforeEach(function() {
    jasmine.Ajax.install();
  });
  afterEach(function() {
    jasmine.Ajax.uninstall();
  });
  return it("deals right with the request", function() {
    var doneFn, expected, prop, ref, results, xmlRequest;
    doneFn = jasmine.createSpy("success");
    jasmine.Ajax.stubRequest('http://appli.chouette.mobi/irys_server').andReturn({
      "responseText": siriResponse
    });
    xmlRequest = SMRequest.getStopMonitoring('form');
    SMRequest.sendRequest(xmlRequest, SMRequest.handleStopMonitoringResponse, SMCard);
    ref = SMCard.stopMonitoredVisit;
    results = [];
    for (prop in ref) {
      expected = ref[prop];
      results.push(expect(siriResponseXML.find(prop)[0].innerHTML).toEqual(expected));
    }
    return results;
  });
});
