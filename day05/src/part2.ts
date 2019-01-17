import {ReadFile} from './readFile';
import {ReducePolymer} from './reducePolymerPush'

let polymer: string;
let lengthOfShortestPolymer: number;
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];

function online(input: string) {
    polymer = input;
}

function onclose() {
    lengthOfShortestPolymer = 1000000;
    alphabet.forEach(alpha => {
        var regex = new RegExp(alpha, "gi")
        let shorter = polymer.replace(regex, '');
       // console.log(shorter, ': ', new ReducePolymer().reduceUnits(shorter));
        
        lengthOfShortestPolymer = Math.min( new ReducePolymer().reduceUnits(shorter).length,lengthOfShortestPolymer);
    });
   
    console.log('shortest is: ', lengthOfShortestPolymer);
}


new ReadFile().readInputFile(online, onclose);