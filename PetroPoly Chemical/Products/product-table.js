// Data
const products = [
	{product: 'HDPE', grade: 'HF4760 (BL3)', brand: 'JAM', mfi: 1.2},
	{product: 'HDPE', grade: 'HM8355 (BL4)', brand: 'JAM', mfi: 0.35},
	{product: 'HDPE', grade: 'HM5010T2N (EX3)', brand: 'JAM', mfi: 0.45},
    {product: 'HDPE', grade: 'HMCRP100N (PE100)', brand: 'JAM', mfi: 0.22},
    {product: 'HDPE', grade: 'HMCRP100B (Black)', brand: 'JAM', mfi: 0.22},
    {product: 'HDPE', grade: 'HM9450F (EX5)', brand: 'JAM', mfi: 0.28},
    {product: 'LLDPE', grade: 'LL235F6', brand: 'JAM', mfi: 0.6},
    {product: 'LLDPE', grade: 'LL235F7', brand: 'JAM', mfi: 0.7},
    {product: 'LLDPE', grade: '22502AA / 22502KJ', brand: 'JAM', mfi: 1.8},
    {product: 'LLDPE', grade: '22501AA / 22501KJ', brand: 'JAM', mfi: 0.95},
    {product: 'LLDPE', grade: '18XF5 N', brand: 'JAM', mfi: 0.5},
    {product: 'LLDPE', grade: 'Jamlene HD - 5000s', brand: 'JAM', mfi: 0.8},
    {product: 'LLDPE', grade: '60505 / 60505UV', brand: 'JAM', mfi: 5.5},
    {product: 'LLDPE', grade: '60507 / 60507UV', brand: 'JAM', mfi: 7.5},
    {product: 'LLDPE', grade: '60511 / 60511UV', brand: 'JAM', mfi: 11},
    {product: 'LLDPE', grade: 'CC 52501', brand: 'JAM', mfi: 1},
    {product: 'LLDPE', grade: 'CC 52502', brand: 'JAM', mfi: 2.1},
    {product: 'LLDPE', grade: 'CC 52502SU', brand: 'JAM', mfi: 2.1},
    {product: 'LLDPE', grade: 'HD52505 / HD52505UV', brand: 'JAM', mfi: 5},
    {product: 'LLDPE', grade: 'HD52511 / HD52611UV', brand: 'JAM', mfi: 11},
    {product: 'LLDPE', grade: 'HD52518', brand: 'JAM', mfi: 18},
    {product: 'LLDPE', grade: 'LL32604 / LL32604UV', brand: 'JAM', mfi: 4},
    {product: 'LLDPE', grade: 'MD38504UV', brand: 'JAM', mfi: 4},
    {product: 'LLDPE', grade: 'MD35504', brand: 'JAM', mfi: 4},
    {product: 'LLDPE', grade: 'MD3510', brand: 'JAM', mfi: 0.4},
    {product: 'LLDPE', grade: 'MD3520', brand: 'JAM', mfi: 0.6},
    {product: 'Homopolymers', grade: 'Jampilene HP525J', brand: 'JAM', mfi: 3},
    {product: 'Homopolymers', grade: 'Jampilene HP550J', brand: 'JAM', mfi: 3.2},
    {product: 'Homopolymers', grade: 'Jampilene HP150L', brand: 'JAM', mfi: 6},
    {product: 'Homopolymers', grade: 'Jampilene HP552R', brand: 'JAM', mfi: 25},
    {product: 'Homopolymers', grade: 'Jampilene HP564S', brand: 'JAM', mfi: 42},
    {product: 'Random Copolymer', grade: 'Jampilene RP345S', brand: 'JAM', mfi: 40},
    {product: 'Impact Copolymer', grade: 'Jampilene EP440L', brand: 'JAM', mfi: 6},
    {product: 'Impact Copolymer', grade: 'Jampilene EP3130UV', brand: 'JAM', mfi: 10},
    {product: 'Impact Copolymer', grade: 'Jampilene EP548R', brand: 'JAM', mfi: 21},
    {product: 'Impact Copolymer', grade: 'Jampilene EP548T', brand: 'JAM', mfi: 50},
    {product: 'Impact Copolymer', grade: 'Jampilene EP440G', brand: 'JAM', mfi: 1.3},
    {product: 'Terpolymer', grade: 'Jampilene RP120L', brand: 'JAM', mfi: 6},
    {product: 'HDPE', grade: 'B1054', brand: 'SABIC', mfi: 0.45},
    {product: 'HDPE', grade: 'B1054M', brand: 'SABIC', mfi: 0.43},
    {product: 'HDPE', grade: 'B4660', brand: 'SABIC', mfi: 2.8},
    {product: 'HDPE', grade: 'B4660AB', brand: 'SABIC', mfi: 2.8},
    {product: 'HDPE', grade: 'B5206', brand: 'SABIC', mfi:  6.5},
    {product: 'HDPE', grade: 'B5210', brand: 'SABIC', mfi: 0.35},
    {product: 'HDPE', grade: 'B5308', brand: 'SABIC', mfi: 0.32},
    {product: 'HDPE', grade: 'B5403', brand: 'SABIC', mfi:  2.6},
    {product: 'HDPE', grade: 'B5403M', brand: 'SABIC', mfi: 2.7},
    {product: 'HDPE', grade: 'B5411', brand: 'SABIC', mfi: 0.4},
    {product: 'HDPE', grade: 'B5421', brand: 'SABIC', mfi: 0.89},
    {product: 'HDPE', grade: 'B5428', brand: 'SABIC', mfi: 28},
    {product: 'HDPE', grade: 'B5429', brand: 'SABIC', mfi: 29},
    {product: 'HDPE', grade: 'B5822', brand: 'SABIC', mfi: 1.2},
    {product: 'HDPE', grade: 'B5822M', brand: 'SABIC', mfi: 1.2},
    {product: 'HDPE', grade: 'B5823', brand: 'SABIC', mfi: 0.89},
    {product: 'HDPE', grade: 'M80063', brand: 'SABIC', mfi: 8},
    {product: 'HDPE', grade: 'M80064', brand: 'SABIC', mfi: 8},
    {product: 'HDPE', grade: 'M80064S', brand: 'SABIC', mfi: 8},
    {product: 'HDPE', grade: '6006', brand: 'SABIC', mfi: 0.23},
    {product: 'HDPE', grade: '6006AD', brand: 'SABIC', mfi: 0.23},
    {product: 'HDPE', grade: '6006NA', brand: 'SABIC', mfi: 0.23},
    {product: 'LDPE', grade: '4024WN', brand: 'SABIC', mfi: 4},
    {product: 'PP', grade: 'H25FBF', brand: 'SABIC', mfi: 25},
    {product: 'LLDPE', grade: '218WJ', brand: 'SABIC', mfi: 2},
    {product: 'HDPE', grade: 'DMDH-6400', brand: 'DOW', mfi: 0.8},
    {product: 'HDPE', grade: 'KT10000', brand: 'DOW', mfi: 8},
    {product: 'HDPE', grade: '3490', brand: 'Borouge', mfi: 0.25},
    {product: 'HDPE', grade: '3488', brand: 'Borouge', mfi: 0.27},
    {product: 'PP', grade: '961MO', brand: 'Borouge', mfi: 12},
    {product: 'PP', grade: '6021N', brand: 'Braskem', mfi: 2},
    {product: 'PP', grade: '6021N', brand: 'Braskem', mfi: 2},
    {product: 'LLDPE', grade: 'Q2018H', brand: 'Muntajat', mfi: 2},
    {product: 'PP', grade: 'SP179', brand: 'Bora', mfi: 9},
    {product: 'PP', grade: 'SP179', brand: 'Zhenhai', mfi: 9},
];


// Pagination variables
const itemsPerPage = 10;
let currentPage = 1;
let filteredProducts = [];

// Function to create the table rows based on the current page and search query
function createTableRows(currentPage, query) {
  // Clear the existing table rows
  const tableBody = document.querySelector('#table-body');
  tableBody.innerHTML = '';

  // Filter the products based on the search query
  filteredProducts = products.filter(prod => {
    const { product, brand, grade, mfi } = prod;
    return (
      product.toLowerCase().includes(query.toLowerCase()) || 
      brand.toLowerCase().includes(query.toLowerCase()) || 
      grade.toLowerCase().includes(query.toLowerCase()) || 
      mfi.toString().toLowerCase().includes(query.toLowerCase())
    );
  });

  // Calculate the start and end indices of the products to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products to show on the current page
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  // Create table rows for each product and append them to the table body
  productsToShow.forEach(prod => {
    const { product, brand, grade, mfi } = prod;
    const row = document.createElement('tr');
    row.innerHTML = `<td>${product}</td><td>${brand}</td><td>${grade}</td><td>${mfi}</td>`;
    tableBody.appendChild(row);
  });
}

// Function to handle the previous page button click
function handlePrevPage() {
  if (currentPage > 1) {
    currentPage--;
    createTableRows(currentPage, searchInput.value);
  }
}

// Function to handle the next page button click
function handleNextPage() {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    createTableRows(currentPage, searchInput.value);
  }
}

// Function to handle the search query input and update the table rows
function handleSearch() {
  currentPage = 1;
  createTableRows(currentPage, searchInput.value);
}

// Add event listener to the search input field
const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', handleSearch);

// Add event listener to the previous page button
const prevButton = document.querySelector('#prev-button');
prevButton.addEventListener('click', handlePrevPage);

// Add event listener to the next page button
const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', handleNextPage);

// Call the createTableRows function to initially create the table rows
createTableRows(currentPage, '');