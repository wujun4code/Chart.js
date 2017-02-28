# Bar
A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

## Example Usage
```javascript
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
```

## Dataset Properties
The bar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of the bars is generally set this way.

Some properties can be specified as an array. If these are set to an array value, the first value applies to the first bar, the second value to the second bar, and so on.

| Name | Type | Description
| ---- | ---- | -----------
| `label` | `String` | The label for the dataset which appears in the legend and tooltips.
| `xAxisID` | `String` | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
| `yAxisID` | `String` | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
| `backgroundColor` | `Color/Color[]` | The fill color of the bar. See [Colors](../general/colors.md#colors)
| `borderColor` | `Color/Color[]` | The color of the bar border. See [Colors](../general/colors.md#colors)
| `borderWidth` | `Number/Number[]` | The stroke width of the bar in pixels.
| `borderSkipped` | `String` | Which edge to skip drawing the border for. See [below](#borderSkipped) for details.
| `hoverBackgroundColor` | `Color/Color[]` | The fill colour of the bars when hovered.
| `hoverBorderColor` | `Color/Color[]` | The stroke colour of the bars when hovered.
| `hoverBorderWidth` | `Number/Number[]` | The stroke width of the bars when hovered.

### borderSkipped
This setting is used to avoid drawing the bar stroke at the base of the fill. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

Options are:
* 'bottom'
* 'left'
* 'top'
* 'right'

## Configuration Options

The bar chart defines the following configuration options. These options are merged with the global chart configuration options, `Chart.defaults.global`, to form the options passed to the chart.

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `barPercentage` | `Number` | `0.9` | Percent (0-1) of the available width each bar should be within the category percentage. 1.0 will take the whole category width and put the bars right next to each other. [Read More](#bar-chart-barpercentage-vs-categorypercentage)
| `categoryPercentage` | `Number` | `0.8` | Percent (0-1) of the available width (the space between the gridlines for small datasets) for each data-point to use for the bars. [Read More](#bar-chart-barpercentage-vs-categorypercentage)
| `barThickness` | `Number` | | Manually set width of each bar in pixels. If not set, the bars are sized automatically using `barPercentage` and `categoryPercentage`;
| `gridLines.offsetGridLines` | `Boolean` | `true` | If true, the bars for a particular data point fall between the grid lines. If false, the grid line will go right down the middle of the bars. See [below](#offsetGridLines) for details.

### offsetGridLines
If true, the bars for a particular data point fall between the grid lines. If false, the grid line will go right down the middle of the bars. It is unlikely that this will ever need to be changed in practice. It exists more as a way to reuse the axis code by configuring the existing axis slightly differently.

This setting applies to the axis configuration for a bar chart. If axes are added to the chart, this setting will need to be set for each new axis.

```javascript
options = {
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
}
```

## Default Options

It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in `Chart.defaults.bar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

## barPercentage vs categoryPercentage

The following shows the relationship between the bar percentage option and the category percentage option.

```text
// categoryPercentage: 1.0
// barPercentage: 1.0
Bar:        | 1.0 | 1.0 |
Category:   |    1.0    |   
Sample:     |===========|

// categoryPercentage: 1.0
// barPercentage: 0.5
Bar:          |.5|  |.5|
Category:  |      1.0     |   
Sample:    |==============|

// categoryPercentage: 0.5
// barPercentage: 1.0
Bar:            |1.||1.|
Category:       |  .5  |   
Sample:     |==============|
```

## Data Structure

The `data` property of a dataset for a bar chart is specified as a an array of numbers. Each point in the data array corresponds to the label at the same index on the x axis. 

```javascript
data: [20, 10]
```

# Stacked Bar Chart

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

```javascript
var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
```

## Dataset Properties

The following dataset properties are specific to stacked bar charts.

| Name | Type | Description
| ---- | ---- | -----------
| `stack` | `String` | The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack)

# Horizontal Bar Chart
A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

## Example
```javascript
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: options
});
```

## Config Options
The configuration options for the horizontal bar chart are the same as for the [bar chart](../bar/config-options.md#config-options). However, any options specified on the x axis in a bar chart, are applied to the y axis in a horizontal bar chart.

The default horizontal bar configuration is specified in `Chart.defaults.horizontalBar`.