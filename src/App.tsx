function App() {
  return (
    <main className="app">
      <div className="container">
        <header className="page-header">
          <div>
            <p className="eyebrow">Mina sidor</p>
            <h1>Mina försäkringar</h1>
          </div>

          <button className="filter-button" type="button">
            Filtrera
          </button>
        </header>

        <section className="content">
          <p>Här kommer försäkringarna att visas.</p>
        </section>
      </div>
    </main>
  );
}

export default App;