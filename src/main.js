import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// Sample job data (this would come from Warpcast API in the future)
const jobs = [
  {
    id: 1,
    title: 'Senior Solidity Developer',
    company: 'Web3DAO',
    location: 'Remote',
    type: 'Full-time',
    salary: '100-150K USD',
    description: 'Looking for an experienced Solidity developer to join our team...',
    postedBy: '0x123...abc',
    postedDate: '2024-03-20'
  },
  {
    id: 2,
    title: 'Frontend Developer (React)',
    company: 'CryptoStartup',
    location: 'Remote',
    type: 'Contract',
    salary: '80-100K USD',
    description: 'Join our team to build the next generation of Web3 applications...',
    postedBy: '0x456...def',
    postedDate: '2024-03-19'
  }
];

// Create the main app structure
function createApp() {
  const app = document.getElementById('app');
  
  // Header
  const header = document.createElement('header');
  header.className = 'bg-white shadow-md p-4';
  header.innerHTML = `
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold text-gray-800">WarpJobs</h1>
      <p class="text-gray-600">Web3 Job Board powered by Warpcast</p>
    </div>
  `;
  
  // Main content
  const main = document.createElement('main');
  main.className = 'container mx-auto p-4';
  
  // Job listings
  const jobListings = document.createElement('div');
  jobListings.className = 'space-y-4';
  
  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow';
    jobCard.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-800">${job.title}</h2>
      <div class="mt-2 text-gray-600">${job.company}</div>
      <div class="mt-2 flex gap-4 text-sm text-gray-500">
        <span>📍 ${job.location}</span>
        <span>⏱️ ${job.type}</span>
        <span>💰 ${job.salary}</span>
      </div>
      <p class="mt-4 text-gray-700">${job.description}</p>
      <div class="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>Posted by: ${job.postedBy}</span>
        <span>${job.postedDate}</span>
      </div>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Apply Now
      </button>
    `;
    jobListings.appendChild(jobCard);
  });
  
  main.appendChild(jobListings);
  
  // Footer
  const footer = document.createElement('footer');
  footer.className = 'bg-white shadow-inner p-4 mt-8';
  footer.innerHTML = `
    <div class="container mx-auto text-center text-gray-600">
      <p>Powered by Warpcast - Web3 Job Board</p>
    </div>
  `;
  
  // Append all sections
  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
}

// Initialize the app
createApp();
