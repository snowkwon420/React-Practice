import React from 'react';
import { URL } from '../baseURL';

const IngredientsAPI = (id) => {
  const getIngredients = async () => {
    try {
      const res = await fetch(`${URL}/posts/forms/ingredients`, {
        method: 'GET',
      });
      const data = res.json();
      console.log('요청성공', data);
      return data;
    } catch (error) {
      console.error('ingredients 데이터 요청 실패', error);
    }
  };

  return getIngredients;
};

export default IngredientsAPI;
