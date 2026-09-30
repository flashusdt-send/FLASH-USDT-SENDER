'use strict';

// All contact links work without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
