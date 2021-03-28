import React, { useEffect, useMemo, useReducer } from "react";

import { Reducer, initialState } from "./UserCard-reducer";
import { fetchUser } from "./UserCard-actions";
import { parseUsername } from "../User/User-utils";
function UserCardviewContainer(props) {
  const username = useMemo(
    () => props?.match?.params?.username ?? "victorfernandesraton2",
    [props]
  );
  const [{ loading, called, error, user }, dispatch] = useReducer(
    Reducer,
    initialState
  );
  useEffect(() => {
    if (username) {
      fetchUser(dispatch, { username });
    }
  }, [username]);

  if (loading) {
    return <h1>Carregando</h1>;
  }

  if (error?.status === 404) {
    return <h1>Usuário {username} não encontrado</h1>;
  } else if (error?.status) {
    return <h1>Erro na requisição</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#efefef",
        padding: "16px; 8px",
        margin: "16px; 8px",
      }}
    >
      <img
        src={user?.avatar_url}
        style={{
          height: 120,
          padding: 16,
          verticalAlign: "middle",
          justifyContent: "center",
          alignContent: "center",
          justifySelf: "baseline",
        }}
        alt={user?.login ?? "avatar"}
      />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h1>
          {parseUsername({
            first_name: user?.name?.split(" ")?.[0],
            last_name: user?.name?.split(" ")?.[1],
            username: user?.login,
          })}
        </h1>
      </div>
    </div>
  );
}

export default UserCardviewContainer;
