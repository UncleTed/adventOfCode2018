import {ReadFile} from './readFile'

let totalWidth = 1000;
let totalHeight = 1000;



let canvas: number[][];
let swatches : Rectangle[];



class Rectangle {
    id: string;
    x: number;
    y: number;
    length: number;
    width: number;

    constructor(line: string) {
        let splitLine = line.split(' ');

        this.id=splitLine[0].substring(1);
        let xy = splitLine[2];
        this.x= parseInt(xy.split(',')[0]);
        this.y=parseInt(xy.split(',')[1].split(':')[0]);
        
        this.length = parseInt(splitLine[3].split('x')[0]);
        this.width = parseInt(splitLine[3].split('x')[1]);

    }

    updateCanvas() {
        for(var x = this.x+1; x < this.x+1 + this.length; x++) {
            for (var y = this.y+1; y < this.y+1+this.width; y++) {
                if(canvas[x][y]) {
                    canvas[x][y] += 1;
                }
                else {
                    canvas[x][y] = 1;
                }
            }
        }
    }

}


function onLine(line: string) {
    let rectangle = new Rectangle(line);
    swatches.push(rectangle);
    rectangle.updateCanvas();
} 
function onClose() {
    checkForOverlaps();
    checkForLoneSwatch();
}

function checkForOverlaps() {
    let moreThanTwoOverlaps = 0;
    for (var w = 0; w < totalWidth; w++) {
        for (var h = 0; h < totalHeight; h++) {
            if (canvas[w][h] >= 2) {
                moreThanTwoOverlaps++;
            }
        }
    }
    console.log('overlaps: ', moreThanTwoOverlaps);
}

function checkForLoneSwatch() {
    swatches.forEach((rectangle) => {
        let area = 0;
        for(var x = rectangle.x+1; x < rectangle.x+1 + rectangle.length; x++) {
            for (var y = rectangle.y+1; y < rectangle.y+1+rectangle.width; y++) {
                area += canvas[x][y];
            };
        };
        if(area == rectangle.length * rectangle.width) {
            console.log('the lone swatch is ', rectangle.id);
        }

    });
}

canvas = [];
swatches = [];


for(var w =0; w < totalWidth; w++) {
    canvas[w] = [];
    for(var h=0; h< totalHeight; h++) {
        canvas[w][h] = 0;
    }
}


new ReadFile().readInputFile(onLine, onClose);


