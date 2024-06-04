function filterWater() {
    const contents = ["salt", "dirt", "calcite", "uranium", "rubber"];
    const filterOut = ["uranium", "dirt"];
    const filteredContents = contents.filter(item => !filterOut.includes(item));
    document.getElementById('result').innerHTML = filteredContents.join(', ');
}
