function filterWater(contents, filterOut) {
    const filteredContents = contents.filter(item => !filterOut.includes(item));
    return filteredContents;
}

function displayFilteredWater() {
    const contents = ["salt", "dirt", "calcite", "uranium", "rubber"];
    const filterOut = ["uranium", "dirt"];
    const filteredContents = filterWater(contents, filterOut);
    document.getElementById('result').innerHTML = filteredContents.join(', ');
}
