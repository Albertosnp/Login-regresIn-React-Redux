import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { usersToShow } from "reducers/usersReducer";

import "./users.css";

export const Users = () => {
  //Saca las notas del store especificado
  const dispatch = useDispatch();
  const users = useSelector((state: RootStateOrAny) => state.users.usersToShow);
  const [page, setPage] = useState(1);

  //Efecto que se ejecuta cuando se carga la página y cuando cambie la página a mostrar
  //Hace rerenderizar el componente
  useEffect(() => {
    dispatch(usersToShow(page));
  }, [dispatch, page]);
  //TODO: mejorar paginacion --> el back manda total de paginas a mostrar

  return (
    <div className="container">
      <div className="paginacion">
        <button onClick={() => setPage(1)}>&lt;</button>
        <button onClick={() => setPage(2)}>&gt;</button>
      </div>
      <div className="row">
        <section className="content-section">
          {users?.map((user) => {
            const { id, avatar, email, first_name, last_name } = user;
            return (
              <User
                key={id}
                id={id}
                avatar={avatar}
                email={email}
                first_name={first_name}
                last_name={last_name}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

const User = ({ id, avatar, email, first_name, last_name }) => {
  return (
    <div key={id}>
      <div className="card">
        <img src={avatar} alt="name" />
        <aside>
          <h3>
            {first_name} {last_name}
          </h3>
        </aside>
        <div className="mail">
          <p>
            <strong>Email: </strong>
          </p>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};
