<%@taglib  uri="http://www.springframework.org/tags" prefix="spring"%>

<script type="text/javascript" charset="utf-8">
    var bpmn_canvas;
    var bpmn_image;
    var services = new Map();

    function ping(url, service) {
        $.ajax("http://" + url)
                .done(function () {
                    $(service).parents("li").removeClass("list-danger").addClass("list-success");
                })
                .fail(function () {
                    $(service).parents("li").removeClass("list-success").addClass("list-danger");
                });
    }

    $(document).ready(function () {
        //load image and set in canvas
        bpmn_image = new Image();
        bpmn_image.src = "${pageContext.request.contextPath}/resources/img/bpmn/bpmn.jpg";
        bpmn_image.onload = function () {

            if (bpmn_image.width >= $("#wrap-bpmn-canvas").innerWidth()) {
                $("#bpmn-canvas").attr("width", bpmn_image.width);
            } else {
                $("#bpmn-canvas").attr("width", $("#wrap-bpmn-canvas").innerWidth());
            }
            $("#bpmn-canvas").attr("height", bpmn_image.height);

            bpmn_canvas = document.getElementById('bpmn-canvas').getContext('2d');
            bpmn_canvas.drawImage(bpmn_image, 0, 0);
        };

        // all button in list have display:none, if mouse enter in "li" the button is show else is hide
        $("ul.task-list li").hover(function (event) {
            $(event.currentTarget).find(":button").show();
        }, function (event) {
            $(event.currentTarget).find(":button").hide();
        });

        $("#services").hover(function () {
            $("#services").find(":button").first().show();
        }, function () {
            $("#services").find(":button").first().hide();
        });

        //add all service url        
        services.set("EnvironmentModel", "localhost:8080/environmentmodel");
        services.set("Cryptography", "localhost:8080/cryptography");
        services.set("SensorManager", "localhost:8080/sensormanager");
        services.set("SensorStatusReporter", "localhost:8080/sensorstatusreporter");
        services.set("ResponderManager", "localhost:8080/respondermanager");
        services.set("ResponderGUI", "localhost:8080/respondergui");
        services.set("TeamLeaderManager", "localhost:8080/teamleadermanager");
        services.set("TeamLeaderGUI", "localhost:8080/teamleadergui");
        services.set("HeadquarterManager", "localhost:8080/headquartermanager");
        services.set("HeadquarterGUI", "localhost:8080/headquartergui");

        // when click button test response server
        $("button.service").click(function () {
            if ($(this).data("serviceName") == "allServices") {
                //check all services 
                services.forEach(function (val, key) {
                    ping(val, $('[data-service-name="' + key + '"]'));
                    return;
                });
            }
            ping(services.get($(this).data("serviceName")), this);
        });
        
        //set all tooltip
        services.forEach(function (val, key) {
            $('[data-service-name="' + key + '"]').parents("li").attr( "title", val );
        });
        $('[data-toggle="tooltip"]').tooltip();

    });// end ready()


</script>
