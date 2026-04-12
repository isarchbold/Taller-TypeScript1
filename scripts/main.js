import { series } from "./data.js";
import { Serie } from "./Serie.js";
var seriesTableBody = document.getElementById("series-body");
var averageSeasonsElement = document.getElementById("average-seasons");
renderSeries(series);
showAverageSeasons(series);
function renderSeries(seriesList) {
    seriesList.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n        ");
        seriesTableBody.appendChild(row);
    });
}
function showAverageSeasons(seriesList) {
    var totalSeasons = 0;
    seriesList.forEach(function (serie) {
        totalSeasons += serie.seasons;
    });
    var average = totalSeasons / seriesList.length;
    averageSeasonsElement.innerHTML = "Seasons average: ".concat(average);
}
//# sourceMappingURL=main.js.map