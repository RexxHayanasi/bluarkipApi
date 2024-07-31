document.getElementById('fetch-data').addEventListener('click', async () => {
    const container = document.getElementById('data-container');
    container.innerHTML = 'Loading...';

    try {
        const response = await fetch('https://api.example.com/data'); // Ganti dengan URL API yang sebenarnya
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        container.innerHTML = JSON.stringify(data, null, 2); // Menampilkan data dalam format JSON
    } catch (error) {
        container.innerHTML = `Error: ${error.message}`;
    }
});
