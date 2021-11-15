import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { ConditionType } from '../../pages/edit-questions';

interface IQuestionProps {
  condition: ConditionType
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;

  margin: 3rem auto 0;

  padding: 0 1rem 3rem;

  .without-questions {
    margin: 2rem 0;
    text-align: center;
  }
`;

export const Questions = styled.div`
  width: 100%;
`;

export const Question = styled.div<IQuestionProps>`
  background: ${({ theme, condition }) =>
    condition === 'CHECKED'
    ? theme.colors.success
    : condition === 'NOT-CHECKED'
    ? lighten(0.1, theme.colors.error)
    : theme.colors.white
  };
  transition: background-color 0.2s;

  height: 100%;
  min-height: 47px;
  max-height: 180px;
  padding: 0 1rem;

  border-radius: 0.5rem;

  margin: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    overflow-x: auto;
    padding: 4px 0;

    ::-webkit-scrollbar {
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.background};

      border-radius: 0.5rem;
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background: #888;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 0.25rem;
      cursor: pointer;

      border: none;
      background: none;

      padding: 0.5rem;

      transition: 0.2s;

      border-radius: 0.5rem;

      @media (max-width: 500px) {
        padding: 0.15rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};

        &.delete ,
        &.cancel {
          color: ${({ theme }) => theme.colors.error};
        }

        &.success {
          color: ${({ theme }) => darken(0.2, theme.colors.success)};
        }
      }

      &:last-child {
        margin-right: 0;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export const Percent = styled.div`
  margin: 4rem 0 2rem;

  .percent-wrapper {
    background: ${({ theme }) => theme.colors.white};
    transition: background-color 0.2s;

    height: 100%;
    min-height: 24px;
    max-height: 180px;

    border-radius: 0.5rem;

    margin: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: relative;

    .percent-bar {
      background: ${({ theme }) => theme.colors.success};
      height: 24px;

      border-radius: 0.5rem;

      transition: width 0.1s ease-in;
    }

    .percent {
      width: 48px;
      height: 24px;

      position: absolute;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      text-align: right;

      margin-right: 0.5rem;
    }
  }
`
