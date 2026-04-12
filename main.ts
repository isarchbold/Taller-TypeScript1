import { series } from "./data.js";
import { Serie } from "./Serie.js";

const seriesTableBody: HTMLElement = document.getElementById("series-body")!;
const averageSeasonsElement: HTMLElement = document.getElementById("average-seasons")!;

renderSeries(series);
showAverageSeasons(series);

function renderSeries(seriesList: Serie[]): void {
    seriesList.forEach((serie: Serie) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        `;

        seriesTableBody.appendChild(row);
    });
    }

    function showAverageSeasons(seriesList: Serie[]): void {
    let totalSeasons: number = 0;

    seriesList.forEach((serie: Serie) => {
        totalSeasons += serie.seasons;
    });

    const average: number = totalSeasons / seriesList.length;
    averageSeasonsElement.innerHTML = `Seasons average: ${average}`;
}