import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { usersToShow } from "reducers/usersReducer";
import styled from "styled-components";

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
    <StylidContainer>
      <div>
        <StyleButtonPagination onClick={() => setPage(1)}>
          &lt;
        </StyleButtonPagination>
        <StyleButtonPagination onClick={() => setPage(2)}>
          &gt;
        </StyleButtonPagination>
      </div>
      <StyledRow>
        <StyledSection>
          {users?.map((user) => {
            const { id, avatar, email, first_name, last_name } = user;
            return (
              <User
                key={id}
                avatar={avatar}
                email={email}
                first_name={first_name}
                last_name={last_name}
              />
            );
          })}
        </StyledSection>
      </StyledRow>
    </StylidContainer>
  );
};

export const User = ({ avatar, email, first_name, last_name }) => {
  return (
    <StyledCard>
      <StyledAvatar src={avatar} alt="name" />
      <aside>
        <StyledH3>
          {first_name} {last_name}
        </StyledH3>
      </aside>
      <StyledEmail>
        <p>
          <strong>Email: </strong>
        </p>
        <span>{email}</span>
      </StyledEmail>
    </StyledCard>
  );
};

const StylidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyleButtonPagination = styled.button`
  margin: 15px 10px;
  border-radius: 40px;
  cursor: pointer;
  outline: 0;
  background: #e4e4e4;
  max-width: 360px;
  border: 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  &:hover,
  &:active,
  &:focus {
    background: #d3d2d2;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex: 1;
  margin: 40px 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 15px;
  min-width: 200px;
  max-width: 200px;
  height: 300px;
`;

const StyledAvatar = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const StyledH3 = styled.h3`
  margin-top: 20px;
  font-size: 20px;
`;

const StyledEmail = styled.div`
  font-size: 16px;
  color: #3d3d3d;
`;
