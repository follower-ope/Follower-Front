import api from './api';
import { errorMessage, successMessage } from './Messages';

export const SaveProfile = async profile => {
  try {
    await api.post(`/profile`, profile, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    successMessage('Perfil criado com sucesso');
    return true;
  } catch ({ response }) {
    errorMessage(response ? response.data.error : 'Ocorreu um erro');
    return false;
  }
};

export const GetProfiles = async () => {
  try {
    const response = await api.get('/profile', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return [];
  }
};

export const GetProfile = async profileId => {
  try {
    const response = await api.get(`/profile/${profileId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (err) {
    errorMessage('Ocorreu um erro ao carregar usuarios');
    return null;
  }
};
