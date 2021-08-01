import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { initUsersToShow } from "reducers/usersReducer";

export const Users = () => {
  //Saca las notas del store especificado
  const dispatch = useDispatch();
  const users = useSelector((state: RootStateOrAny) => state.users.usersToShow);

  useEffect(() => {
    dispatch(initUsersToShow());
  }, [dispatch]);

  return (
    <section>
      {users?.map((user) => {
        const { id, avatar, email, first_name, last_name } = user;
        return (
          <article className="tarjeta-usuario" key={id}>
            <img src={avatar} alt={`Avatar de ${first_name} ${last_name}`} />
            <h2>{`${first_name} ${last_name}`}</h2>
            <p>{email}</p>
          </article>
        );
      })}
    </section>
  );
};
