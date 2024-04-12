console.log('hello world');

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

// SELECTING DOM ELEMENTS: Render facts in list
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

factsList.innerHTML = '';

// LOAD DATA FROM SUPABASE
loadFacts();
async function loadFacts() {
  const res = await fetch(
    'https://bojwovjuuzaylpwizvqy.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvandvdmp1dXpheWxwd2l6dnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzI3MjksImV4cCI6MjAyNzk0ODcyOX0.wPNrxkJoK1vqY5f4Mc5mSXKCNUGu0ikZ0MH6zzphpKo',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvandvdmp1dXpheWxwd2l6dnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzI3MjksImV4cCI6MjAyNzk0ODcyOX0.wPNrxkJoK1vqY5f4Mc5mSXKCNUGu0ikZ0MH6zzphpKo',
      },
    }
  );
  const data = await res.json();

  //   const filteredData = data.filter((fact) => fact.category === 'society');
  //   createFactsList(filteredData);

  createFactsList(data);
}

// createFactsList(intialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
          <p>
          ${fact.text}
              <a
                  class="source"
                  href="${fact.source}"
                  target="_blank"
              >(Source)</a>
          </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((cat) => cat.name === fact.category).color
          }">${fact.category}</span>
        </li>`
  );
  const html = htmlArr.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

// TOGGLE FORM VISIBLITY
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});
