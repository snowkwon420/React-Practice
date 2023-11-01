import React, { useCallback, useState } from 'react';
import Input from '../input/Input';
import { MdAdd } from 'react-icons/md';
import { ReactComponent as PlusButton } from '../../assets/img/icon-plus.svg';
import { styled } from 'styled-components';

export const Ingredient = ({
  inData,
  formData,
  setFormData,
  setIngredientCount,
}) => {
  const [amout, setAmount] = useState('0');
  const [ingredient, setIngredient] = useState({});
  const [isButton, setIsButton] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

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
      setIngredientCount((prevCount) => prevCount + 1);
      setIsButton(false);
    },
    [amout, ingredient, setFormData, setIngredientCount]
  );

  return (
    <Wrapper>
      <form onSubmit={submitHandler} style={{ fontSize: '20px' }}>
        품목:
        <select
          value={ingredient.name}
          onChange={handleIngredientChange}
          disabled={!isButton}
          selected={!isButton}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            backgroundColor: '#f9f9f9',
            fontSize: '16px',
            marginLeft: '15px',
            marginRight: '15px',
          }}
        >
          <option disabled selected>
            재료선택
          </option>
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
          readOnly={!isButton}
          style={{
            height: '20px',
            width: '120px',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            backgroundColor: '#f9f9f9',
            fontSize: '16px',
            marginLeft: '15px',
            marginRight: '15px',
          }}
          value={amout}
          onChange={handleAmountChange}
        />
        {isButton && <StyledButton type='submit'>추가하기</StyledButton>}
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
  margin: 20px 0;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 100px;
  color: white;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: var(--main-color);
`;
