//
// Definitions for schema: http://reds.services.alexanderperucci.univaq.disim.it/
//  http://localhost:8080/sensormanager/sensormanager?xsd=1
//
//
// Constructor for XML Schema item {http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse () {
    this.typeMarker = 'reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse';
}

//
// Serialize {http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse.prototype.serialize = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_serialize;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserialize (cxfjsutils, element) {
    var newobject = new reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse
//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse () {
    this.typeMarker = 'reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse';
}

//
// Serialize {http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse
//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse.prototype.serialize = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_serialize;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserialize (cxfjsutils, element) {
    var newobject = new reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent
//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent () {
    this.typeMarker = 'reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent';
    this._arg0 = null;
}

//
// accessor is reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent.prototype.setArg0
//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_getArg0() { return this._arg0;}

reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent.prototype.getArg0 = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_getArg0;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_setArg0(value) { this._arg0 = value;}

reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent.prototype.setArg0 = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_setArg0;
//
// Serialize {http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent
//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent.prototype.serialize = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serialize;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_deserialize (cxfjsutils, element) {
    var newobject = new reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress () {
    this.typeMarker = 'reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = [];
}

//
// accessor is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg0
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg0() { return this._arg0;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg0 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg0;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg0(value) { this._arg0 = value;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg0 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg0;
//
// accessor is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg1
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg1() { return this._arg1;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg1 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg1;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg1(value) { this._arg1 = value;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg1 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg1;
//
// accessor is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for arg2
// setter function is is reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg2
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg2() { return this._arg2;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.getArg2 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_getArg2;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg2(value) { this._arg2 = value;}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.setArg2 = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_setArg2;
//
// Serialize {http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress
//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    // block for local variables
    {
     if (this._arg1 != null) {
      xml = xml + '<arg1>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
      xml = xml + '</arg1>';
     }
    }
    // block for local variables
    {
     if (this._arg2 != null) {
      for (var ax = 0;ax < this._arg2.length;ax ++) {
       if (this._arg2[ax] == null) {
        xml = xml + '<arg2/>';
       } else {
        xml = xml + '<arg2>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg2[ax]);
        xml = xml + '</arg2>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress.prototype.serialize = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serialize;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_deserialize (cxfjsutils, element) {
    var newobject = new reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg1')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg1(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg2');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2'));
     newobject.setArg2(item);
     var item = null;
    }
    return newobject;
}

//
// Definitions for schema: null
//  file:/Users/alexander/Downloads/wsdl2js-0.1.1/test/sensormanager.wsdl#types1
//
//
// Definitions for service: {http://reds.services.alexanderperucci.univaq.disim.it/}SensorManagerService
//

// Javascript for {http://reds.services.alexanderperucci.univaq.disim.it/}SensorManager

function reds_services_alexanderperucci_univaq_disim_it__SensorManager () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddressResponse'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEventResponse'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent'] = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_deserialize;
    this.globalElementSerializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serialize;
    this.globalElementDeserializers['{http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress'] = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_deserialize;
}

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserializeResponse');
     responseObject = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.detectEnvironmentEvent_onsuccess = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op_onsuccess;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.detectEnvironmentEvent_onerror = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op_onerror;

//
// Operation {http://reds.services.alexanderperucci.univaq.disim.it/}detectEnvironmentEvent
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.detectEnvironmentEvent_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.detectEnvironmentEvent_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.detectEnvironmentEvent_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.detectEnvironmentEvent = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_op;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serializeInput(cxfjsutils, args) {
    var wrapperObj = new reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://reds.services.alexanderperucci.univaq.disim.it/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:detectEnvironmentEvent', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.detectEnvironmentEvent_serializeInput = reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEvent_serializeInput;

function reds_services_alexanderperucci_univaq_disim_it__detectEnvironmentEventResponse_deserializeResponse(cxfjsutils, partElement) {
}
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserializeResponse');
     responseObject = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.setInvocationAddress_onsuccess = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op_onsuccess;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.setInvocationAddress_onerror = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op_onerror;

//
// Operation {http://reds.services.alexanderperucci.univaq.disim.it/}setInvocationAddress
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.setInvocationAddress_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setInvocationAddress_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setInvocationAddress_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.setInvocationAddress = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_op;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serializeInput(cxfjsutils, args) {
    var wrapperObj = new reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://reds.services.alexanderperucci.univaq.disim.it/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setInvocationAddress', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

reds_services_alexanderperucci_univaq_disim_it__SensorManager.prototype.setInvocationAddress_serializeInput = reds_services_alexanderperucci_univaq_disim_it__setInvocationAddress_serializeInput;

function reds_services_alexanderperucci_univaq_disim_it__setInvocationAddressResponse_deserializeResponse(cxfjsutils, partElement) {
}
function reds_services_alexanderperucci_univaq_disim_it__SensorManager_reds_services_alexanderperucci_univaq_disim_it__SensorManagerPort () {
  this.url = 'http://localhost:8080/sensormanager/sensormanager';
}
reds_services_alexanderperucci_univaq_disim_it__SensorManager_reds_services_alexanderperucci_univaq_disim_it__SensorManagerPort.prototype = new reds_services_alexanderperucci_univaq_disim_it__SensorManager;
