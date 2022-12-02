import './App.css';
<script crossorigin src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"></script>



function App() {
  return (
    <div className="App">
      <div className="row h-100 m-0">
        <div className="col-2 bg-brand h-100 p-2 text-dark">
          <div className="title mb-4 text-center">
            <h1 className='font-brand text-white'>Projects</h1>
          </div>
          <div className="project-dashboard">
            <div className='project-title selected'>Create Project Management Kit</div>
            <div className="project-title">Another Project</div>

          </div>
        </div>
        <div className="col-10 p-0">
          <div className="row h-100 m-0">
            <div className="col-4 border-right">
              <div className="title p-2 mt-2 mb-4"><h3>BACKLOG</h3></div>
              <div className="backlog">
                <div className="card">Develop create card functionality</div>
                <div className="card">Develop card moving functionality</div>
                <div className="card">Project selection funciontality</div>
                <div className="card">Persistent Data</div>



              </div>
            </div>
            <div className="col-4 border-right">
              <div className="title p-2 mt-2 mb-4"><h3>ACTIVE</h3></div>
              <div className="active">



              </div>
            </div>
            <div className="col-4">
              <div className="title p-2 mt-2 mb-4"><h3>COMPLETED</h3></div>
              <div className="completed">
                <div className='card'>Create UI</div> 


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
