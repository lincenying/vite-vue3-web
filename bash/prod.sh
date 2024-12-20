#!/bin/bash

nr build_prod
cd dist
zip -r dist.zip *
open .
