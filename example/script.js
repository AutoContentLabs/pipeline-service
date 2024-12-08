// script.js

const apiUrl = 'http://localhost:50000/api/pipelines';  // Write your API URL here

// Create Pipeline
const createPipelineForm = document.getElementById('createPipelineForm');
createPipelineForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const pipelineName = document.getElementById('pipelineName').value;
  const pipelineDescription = document.getElementById('pipelineDescription').value;

  const pipeline = {
    name: pipelineName,
    description: pipelineDescription,
    status: 'IDLE',  // Default status
    dependencies: []
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pipeline),
    });

    const data = await response.json();
    console.log('Pipeline Created:', data);
    alert('Pipeline Created!');
  } catch (error) {
    console.error('Error creating pipeline:', error);
    alert('Error creating pipeline');
  }
});

// Get all pipelines
const getPipelinesBtn = document.getElementById('getPipelinesBtn');
getPipelinesBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(apiUrl);
    const pipelines = await response.json();
    const pipelineList = document.getElementById('pipelineList');
    pipelineList.innerHTML = ''; // Clear

    pipelines.forEach(pipeline => {
      const listItem = document.createElement('li');
      listItem.textContent = `${pipeline.name} - Status: ${pipeline.status}`;
      pipelineList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching pipelines:', error);
    alert('Error fetching pipelines');
  }
});

// Update Pipeline
const updatePipelineForm = document.getElementById('updatePipelineForm');
updatePipelineForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const pipelineId = document.getElementById('updatePipelineId').value;
  const newStatus = document.getElementById('updatePipelineStatus').value;

  const updatedPipeline = {
    status: newStatus
  };

  try {
    const response = await fetch(`${apiUrl}/${pipelineId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPipeline),
    });

    const data = await response.json();
    console.log('Pipeline Updated:', data);
    alert('Pipeline Updated!');
  } catch (error) {
    console.error('Error updating pipeline:', error);
    alert('Error updating pipeline');
  }
});

// Delete Pipeline
const deletePipelineForm = document.getElementById('deletePipelineForm');
deletePipelineForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const pipelineId = document.getElementById('deletePipelineId').value;

  try {
    const response = await fetch(`${apiUrl}/${pipelineId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Pipeline Deleted!');
    } else {
      alert('Failed to delete pipeline');
    }
  } catch (error) {
    console.error('Error deleting pipeline:', error);
    alert('Error deleting pipeline');
  }
});
