#!/bin/bash

nr build_test
cd dist
zip -r dist.zip *
open .
