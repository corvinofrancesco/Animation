var DemoSA = {
    pathstra1: [
        ["M",678,76], ["L",654,60],["L",641,57],["L", 587,43],["L", 560,43],[ 533,46],
        [491,61],[ 464,76 ],[446,94 ],[435,113],[ 425,139],[ 418,163 ],
        [413,196],[ 408,223 ],[407,257],[ 409,278],[ 411,296],[ 414,316],
        [424,345],[ 435,378],[ 442,384]],
    pathstra2: [
        ["M",330,123],[319,122],[295,129],[282,141],[253,153],[233,171],
        [221,202],[225,245],[246,291],[263,315],[283,331],[309,339],[339,348],
        [353,377],[366,387],[371,391],[397,400],[410,414],[421,431],[430,453],
        [449,463]],
    pathstra3: [
        ["M",60,437],[62,434],[72,423],[82,412],[95,397],[117,383],[130,379],[160,375],[207,377],
        [312,393],[342,399],[361,408],[379,422],[405,439],[413,453],[419,466],[423,474]],
    pathstr1: 
        "M533,46 " + 
        " 491,61 464,76 446,94 435,113 425,139 418,163 " +
        " 413,196 408,223 407,257 409,278 411,296 414,316"+
        " 424,345 435,378 442,384",
    pathstr2: 
        "M330,123 319,122 295,129 282,141 253,153 233,171 " +
        "221,202 225,245 246,291 263,315 283,331 309,339 339,348 " +
        "353,377 366,387 371,391 397,400 410,414 421,431 430,453 449,463",
    pathstr3: 
        "M60,437 62,434 72,423 82,412 95,397 117,383 130,379 160,375 207,377 "+
        "312,393 342,399 361,408 379,422 405,439 413,453 419,466 423,474"
};
    
var actions = [
    {
        title: "395 - Morte di Teodosio ",
        description: "Mentre l'Impero Romano si divide tra occidente e oriente, arrivano gli Unni dalle steppe orientali.",
        play: function(){}
    },
    {
        title: "Fine IV ",
        description: "Diverse popolazioni si spingono verso l'Impero Romano, da oriente arrivano Visigoti e Unni.",
        play: function(){
            SAguilar.arrow(DemoSA.pathstr1,{ stroke: 'black', 'stroke-width': 4, 'fill-opacity': 0 });
        }

    },
    {
        description: "Azione 2: Freccia casuale;",
        elements : {
            freccia1:{type:"arrow", params:{path:DemoSA.pathstr2,attr:{ stroke: 'blue', 'stroke-width': 8, 'fill-opacity': 0 }}}
        }
    },
    {
        description: "Azione 3: Freccia casuale;",
        play: function(){
            SAguilar.arrow(DemoSA.pathstr3,{ stroke: 'red', 'stroke-width': 8, 'fill-opacity': 0 });
        }

    },
    {
        description: "Azione 5: ",
        play: function(){
            var pathstr =  "M350,150 L50,80 150,330";
            SAguilar.area(pathstr,{ fill: 'red' });
        }

    }

];
