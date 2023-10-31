import React, { useCallback, useState } from 'react';
import Input from '../input/Input';
import { MdAdd } from 'react-icons/md';
import { ReactComponent as PlusButton } from '../../assets/img/icon-plus.svg';
import { styled } from 'styled-components';

export const Ingredient = ({ inData, formData, setFormData }) => {
  const [amout, setAmount] = useState('0');
  const [ingredient, setIngredient] = useState({});
  const [isButton, setIsButton] = useState(true);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleIngredientChange = (event) => {
    const selectedIngredient = inData.ingredients.find(
      (item) => item.name === event.target.value
    );
    setIngredient(selectedIngredient);
  };

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault(); // 기본 동작 막기

      const newIngredient = {
        id: ingredient.id, // Use the id of the selected ingredient
        quantity: amout, // Change this with the actual quantity
        price: ingredient.price, // Use the price of the selected ingredient
        unit: ingredient.unit, // Use the unit of the selected ingredient
      };

      setFormData((prevFormData) => ({
        ...prevFormData,
        ingredients: [...prevFormData.ingredients, newIngredient],
      }));

      setIsButton(false);
    },
    [amout, ingredient, setFormData]
  );

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        품목:
        <select value={ingredient.name} onChange={handleIngredientChange}>
          {inData && inData.ingredients && inData.ingredients.length > 0 ? (
            inData.ingredients.map((res, i) => (
              <option key={i}>{res.name}</option>
            ))
          ) : (
            <option>선택지 없음</option>
          )}
        </select>
        수량:
        <input
          type='number'
          min='0'
          style={{ height: '15px', width: '120px' }}
          value={amout}
          onChange={handleAmountChange}
        />
        {isButton && (
          <button type='submit'>
            <PlusButton />
          </button>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 30px;
  align-items: center;
`;
