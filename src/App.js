import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import tour from "./Tour";
import List from "./List.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <React.Fragment>
      <section>
        <main>
          <div className="title">
            <h3>Our Tours</h3>
            <div className="underline"></div>
          </div>

          {tour.map((data) => {
            return <List Key={data.id} {...data}></List>;
          })}
        </main>
      </section>
    </React.Fragment>
  );
}

export default App;
