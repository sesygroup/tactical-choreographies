<%@taglib uri="http://www.springframework.org/security/tags" prefix="security"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<header class="header black-bg">
	<div class="sidebar-toggle-box">
    	<div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
	</div>
	<a class="logo"><b>R.E.D.S. Manager</b></a>
    <div class="top-menu">
		<ul class="nav pull-right top-menu">
			<li><a class="logout" href="${pageContext.request.contextPath}/j_spring_security_logout">Logout</a></li>
		</ul>
	</div>
</header>
