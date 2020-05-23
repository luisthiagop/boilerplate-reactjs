import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Title, Error } from './styles-dashboard';

interface User {
  id: string;
  name: string;
}

interface LogedUser {
  user: User;
}

const Dashboard: React.FC = () => {
  const [logedUser, setLogedUser] = useState<User>();
  const [inputError, setInputError] = useState('');

  // função de exemplo: inicializa o usuario logado
  async function handleLogedUser(): Promise<void> {
    try {
      const response = await api.get<LogedUser>(`loged_user`);
      setLogedUser(response.data.user);
    } catch (erro) {
      setInputError(`Mensagem de erro padrão: ${erro}`);
    }
  }

  // inicia os estados
  useEffect(() => {
    handleLogedUser();
  }, []);

  return (
    <>
      <Title>Dashboard</Title>
      <p>
        olá
        {logedUser?.name}
      </p>

      {inputError && <Error>{inputError}</Error>}
    </>
  );
};

export default Dashboard;
