<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Invasioni Barbariche</title>
        
        <script type="text/javascript" src="resources/scripts/jquery-1.8.3.min.js" ></script>
        <script type="text/javascript" src="resources/scripts/buzz.js" ></script>
        <script type="text/javascript" src="resources/scripts/raphael-min.js" ></script>
        <script type="text/javascript" src="resources/scripts/arrows.raphael.js" ></script>
        <script>

            window.onload = function () {
                var canvas = Raphael( 10, 10, 500, 500 );
                var pathstr =  "M0,0 Q50,50,100,30 Q25,80,100,100 Q150,150,200,50";
                var path = drawline_withArrow( canvas, pathstr, 4000, 
                    { stroke: 'blue', 'stroke-width': 8, 'fill-opacity': 0 } );
                //canvas.arrow(30,30,50,50,{ stroke: 'black', 'stroke-width': 8, 'fill-opacity': 0 });
            }
        </script>
    </head>
    <body>
        <div></div>
        <div><img src="resources/images/map.png" height="60%" width="40%"/></div>
    </body>
</html>
