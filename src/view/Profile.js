import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "view/layout/MasterLayout";

function Profil() {
  return (
    <AppLayout>
      <h1>Profil Page</h1>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/profil/pevita",
              state: {
                name: "Pevita Cleo Eileen Pearce",
                born: "1992-10-06",
              },
            }}
          >
            Pevita
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/profil/raline",
              state: {
                name: "Raline Rahmat Shah",
                born: "1985-03-04",
              },
            }}
          >
            Raline
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/profil/maudy",
              state: {
                name: "Ayunda Faza Maudya",
                born: "1994-12-19",
              },
            }}
          >
            Maudy
          </Link>
        </li>
      </ul>
      <hr />
      <Link to="/">Home</Link>
    </AppLayout>
  );
}

export default Profil;
