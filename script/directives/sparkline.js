/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-sparkline-directive.

    cc-sparkline-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-sparkline-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-sparkline-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
(function (angular) {

  'use strict';

  angular.module('cc.sparkline.directive', [])
    .directive('sparkline', function () {
      return {
        template: '<div class="sparkline"><chart data-config="chartConfig" data-input="chartData" /></div>',
        replace: true,
        restrict: 'E',
        scope: {
          chartData: '=input'
        },
        link: function (scope) {
          scope.chartConfig = {
            tooltip: {
              enabled: false
            },
            chart: {
              margin: [2, 2, 2, 2],
              backgroundColor: 'transparent',
              type: 'spline',
              height: 30
            },
            plotOptions: {
              series: {
                color: '#2ab2de'
              },
              spline: {
                lineWidth: 1,
                states: {
                  hover: {
                    enabled: false
                  }
                },
                marker: {
                  radius: 2
                }
              }
            },
            legend: false,
            xAxis: {
              title: '',
              lineWidth: 0,
              lineColor: 'transparent',
              labels: {
                enabled: false
              },
              minorTickLength: 0,
              tickLength: 0
            },
            yAxis: {
              title: '',
              lineWidth: 0,
              lineColor: 'transparent',
              labels: {
                enabled: false
              },
              gridLineWidth: 0
            }
          };
        }
      };
    });

})(window.angular);
