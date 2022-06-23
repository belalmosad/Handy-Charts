import BarPlot from "./bar-plot.js";
import DotMap from "./dot-map.js";
import ProgressBar from './progress-bar.js';
import ScatterPlot from './scatter-plot.js';

function deleteElement(element) {
    element.htmlDOMElement.parentNode.removeChild(element.htmlDOMElement);
}

export {BarPlot, DotMap, ProgressBar, ScatterPlot, deleteElement}