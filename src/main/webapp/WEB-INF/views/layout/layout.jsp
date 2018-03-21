<%@taglib uri="http://www.springframework.org/security/tags" prefix="security"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<tiles:importAttribute scope="request" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="description">
        <meta name="author" content="Alexander Perucci">

        <title>R.E.D.S. Manager</title>

        <%-- Bootstrap core CSS --%>
        <link href="${pageContext.request.contextPath}/resources/css/bootstrap.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/bootstrap-slider.css" rel="stylesheet">
        <%--external css--%>
        <link href="${pageContext.request.contextPath}/resources/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/zabuto_calendar.css">
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/js/gritter/css/jquery.gritter.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/lineicons/style.css">    

        <%-- Custom styles for this template --%>
        <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/style-responsive.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/custom.css" rel="stylesheet">

        <%-- js --%>
        <%--<script src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>--%>
        <script src="${pageContext.request.contextPath}/resources/js/jquery-1.8.3.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/jquery.dcjqaccordion.2.7.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/jquery.scrollTo.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/jquery.nicescroll.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/jquery.sparkline.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/jquery-ui-1.9.2.custom.min"></script>    
        <script src="${pageContext.request.contextPath}/resources/js/chart-master/Chart.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/bootstrap-slider.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/task.js"></script>

        <script src="${pageContext.request.contextPath}/resources/js/websocket/sockjs/sockjs.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/websocket/stomp/lib/stomp.min.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/websocket/knockout/knockout.js"></script>

        
        <script src="${pageContext.request.contextPath}/resources/js/cxf-utils.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/SensorManagerService.js"></script>


        <%-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries --%>
        <%--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]--%>


    </head>
    <body>
        <section id="container" >
            <tiles:insertAttribute name="header" />
            <tiles:insertAttribute name="menu" />
            <tiles:insertAttribute name="body" />
        </section>

        <!--common script for all pages-->
        <script src="${pageContext.request.contextPath}/resources/js/common-scripts.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/gritter/js/jquery.gritter.js"></script>
        <script src="${pageContext.request.contextPath}/resources/js/gritter-conf.js"></script>

    </body>

</html>
