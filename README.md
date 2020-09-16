# mongoose-me #
A mongoose wrapper function that allows you to use mongoose as an API.

## Description ## 
This function was wrote a use as a group of API endpoints to run on serverless functions, i.e. not to write many smaller endpoints for each query and have a single one instead.

## Caveat ##
This is part of a different project and I would only to add some functionality to that, instead of writing a completely standalone solution.

You should set up the connection to the database yourself and also send the client to the models' `buildmodel` functions.

## Stack ##
1. Mongoose
2. NodeJS

