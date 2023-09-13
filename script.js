document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetch-data");
    const dataContainer = document.getElementById("data-container");

    fetchDataButton.addEventListener("click", fetchData);

    async function fetchData() {
        try {
            const response = await fetch("https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH");
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response ;
            console.log(data)
            
            // Display data in the data container (customize this based on your data format).
            dataContainer.innerHTML = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error("Error fetching data:", error);
            dataContainer.innerHTML = "Error fetching data.";
        }
    }
});
