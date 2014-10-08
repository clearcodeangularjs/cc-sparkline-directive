Clearcode sparkline directive
=========

Adds sparkline using highcharts.

Installation
--------------
TODO


Usage
------

Add ``` cc.sparkline.directive``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.sparkline.directive'
    ]);
```
and you are ready to go!

How to use :


```
    <sparkline data-input="data" />
```


And a little example, in controller:

```
  $scope.data ={
                'interval': 7200000,
                'data': [0.66, 0.69, 0.79, 0.35, 0.4, 0.78, 0.36, 0.03, 0.74, 0.02, 0.93, 0.99]
              };
```

and in view:

```
    <sparkline data-input="data" />
```

Result:

![alt text](http://i.imgur.com/xyn6p4T.png "Logo Title Text 1")



Author
------

Witold Galecki


License
----

LGPL

