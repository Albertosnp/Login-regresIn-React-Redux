import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { usersToShow } from "reducers/usersReducer";

import "./user.css";
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

  return (
    <section>
      <button onClick={() => setPage(1)}>Página Anterior</button>
      <button onClick={() => setPage(2)}>Página Siguiente</button>
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
  );
};

const User = ({ id, avatar, email, first_name, last_name }) => {
  return (
    <section key={id}>
      <div className="content">
        <img src={avatar} alt="name" />
        <aside>
          <h1>
            {first_name} {last_name}
          </h1>
        </aside>
        <div className="gmail">
          <h1>Email</h1>
          <span>{email}</span>
        </div>
      </div>
    </section>
  );
};
