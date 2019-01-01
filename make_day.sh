#!/bin/bash

mkdir $1
mkdir $1/src
mkdir $1/dist
cp day03/src/readFile.ts $1/src
cp day03/package.json $1
cp day03/tsconfig.json $1

