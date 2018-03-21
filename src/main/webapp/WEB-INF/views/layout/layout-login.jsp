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
    <%--external css--%>
    <link href="${pageContext.request.contextPath}/resources/font-awesome/css/font-awesome.css" rel="stylesheet" />
        
    <%-- Custom styles for this template --%>
    <link href="${pageContext.request.contextPath}/resources/css/style.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/resources/css/style-responsive.css" rel="stylesheet">

    <%-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries --%>
    <%--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]--%>
	
	</head>
	<body>
		 <div id="login-page">
		 	<div class="container">
		 		<tiles:insertAttribute name="body" />
		 	</div>
		 </div>
	<%-- js placed at the end of the document so the pages load faster --%>
    <script src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.backstretch.min.js"></script>
    <script>
    <%-- You can use an image of whatever size. This script will stretch to fit in any screen size.--%>
        $.backstretch("${pageContext.request.contextPath}/resources/img/login-bg2.jpg", {speed: 600});
    </script>
	</body>	
	
</html>
