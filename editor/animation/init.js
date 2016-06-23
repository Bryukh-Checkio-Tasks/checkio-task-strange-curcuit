//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {

        var $tryit;

        var io = new extIO({
            functions: {
                js: 'findDistance',
                python: 'find_distance'
            },
            animation: function($expl, data){
                var checkioInput = data.in;
                if (!checkioInput) {
                    return;
                }
                if (checkioInput[0] < 99 && checkioInput[1] < 99) {
                    var canvas = new DestinationSpiralCanvas(checkioInput);
                    canvas.createCanvas($expl[0]);
                }
            },
            tryit:function (this_e) {
                $tryit = this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')).find(".tryit-content");
                tcanvas = new DestinationSpiralCanvas([9, 1]);
                tcanvas.createCanvas($tryit.find(".tryit-canvas")[0]);
                tcanvas.createFeedback(function(data, e){
                    this_e.extSendToConsoleCheckiO(data[0], data[1]);
                    e.stopPropagation();
                    return false;
                });
                $tryit.find(".tryit-canvas").mouseenter(function (e) {
                    if (tooltip) {
                        return false;
                    }
                    var $tooltip = $tryit.find(".tryit-canvas .tooltip");
                    $tooltip.fadeIn(1000);
                    setTimeout(function () {
                        $tooltip.fadeOut(1000);
                    }, 2000);
                    tooltip = true;
                    return false;
                });

            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result-in").html(ret);
            }
        });
        io.start();


    }
);
