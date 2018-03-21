<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<form class="form-login" action="${pageContext.request.contextPath}/j_spring_security_check" method="post">
	<h2 class="form-login-heading">sign in now</h2>
	<div class="login-wrap">
		<input type="text" name="j_username"  class="form-control" placeholder="<spring:message code='common.username'/>" autofocus> <br> 
		<input type="password" name="j_password"  class="form-control" placeholder="<spring:message code='common.password'/>"> 
		<label class="checkbox"> <span class="pull-right"> <a data-toggle="modal" href="login.html#myModal"><spring:message code='common.forgotpassword'/></a>
		</label>

		<button class="btn btn-theme btn-block" type="submit"> <i class="fa fa-lock"></i> <spring:message code="common.signin"/> </button>

	</div>
</form>

	<%-- Modal --%>
	<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"
		tabindex="-1" id="myModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title"><spring:message code='common.forgotpassword'/></h4>
				</div>
				<div class="modal-body">
					<p><strong>username:</strong> admin</p>
  					<p><strong>password:</strong> admin</p>
				</div>
				<div class="modal-footer">
					<button data-dismiss="modal" class="btn btn-default" type="button"><spring:message code='common.cancel'/></button>
				</div>
			</div>
		</div>
	</div>
	<%-- modal --%>

