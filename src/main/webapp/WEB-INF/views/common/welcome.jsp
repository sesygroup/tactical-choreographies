<%@include file="js-welcome.jsp"%>
<%--main content start--%>
<section id="main-content">
    <section class="wrapper">
        <div class="row mt">
            <div class="col-lg-3 col-md-3 col-sm-12"> 
                <section id="services" class="showback">
                    <span id="titleSectionSerivces">Services</span>
                    <div class="pull-right">
                        <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="allServices" style="display: none;"></button>
                    </div>
                    
                    <ul id="sortable" class="task-list ui-sortable">
                        <h5><i class="fa fa-angle-right"></i> Common</h5>
                        
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <span class=""><i class=" fa fa-ellipsis-v"></i> EnvironmentModel</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="EnvironmentModel"></button>
                                </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>Cryptography</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="Cryptography"></button>
                                </div>
                            </div>
                        </li>
                        <h5><i class="fa fa-angle-right"></i> for one Responder</h5>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>SensorManager</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="SensorManager"></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>SensorStatusReporter</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="SensorStatusReporter"></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>ResponderManager</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="ResponderManager"></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>ResponderGUI</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="ResponderGUI"></button>
                                </div>
                            </div>
                        </li>
                        <h5><i class="fa fa-angle-right"></i> for one TeamLeader</h5>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>TeamLeaderManager</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="TeamLeaderManager"></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>TeamLeaderGUI</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="TeamLeaderGUI"></button>
                                </div>
                            </div>
                        </li>
                        <h5><i class="fa fa-angle-right"></i> for one Headquarter</h5>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>HeadquarterManager</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="HeadquarterManager"></button>
                                </div>
                            </div>
                        </li>
                        <li class="list-danger" data-toggle="tooltip" data-placement="top" title="">
                            <i class=" fa fa-ellipsis-v"></i>
                            <div>
                                <span>HeadquarterGUI</span>
                                <div class="pull-right">
                                    <button class="service btn btn-round btn-default btn-xs fa fa-refresh" data-service-name="HeadquarterGUI"></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <div id="wrap-bpmn-canvas"class="col-lg-9 col-md-9 col-sm-12">
                <canvas id="bpmn-canvas" width="" height=""></canvas>
            </div>
        </div>
    </section>
</section>