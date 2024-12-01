document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const tableBody = document.querySelector("#books-table tbody");

  // Fetch data from the server
  fetch("fetch_books.php")
    .then((response) => response.json())
    .then((books) => {
      displayBooks(books);

      // Add search functionality
      searchBar.addEventListener("input", () => {
        const filter = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(
          (book) =>
            book.title.toLowerCase().includes(filter) ||
            book.author.toLowerCase().includes(filter)
        );
        displayBooks(filteredBooks);
      });
    });

  // Function to display books in the table
  function displayBooks(books) {
    tableBody.innerHTML = "";
    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td>${book.year}</td>
          `;
      tableBody.appendChild(row);
    });
  }
});
