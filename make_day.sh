#!/bin/bash

mkdir $1
mkdir $1/dist
mkdir $1/src
cp skeleton/src/readFile.ts $1/src
cp skeleton/src/day.ts $1/src
cp skeleton/package.json $1
cp skeleton/tsconfig.json $1

