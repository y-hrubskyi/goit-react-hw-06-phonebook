import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(3)};

  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
`;

export const Field = styled(FormikField)`
  font: inherit;

  border-radius: ${p => p.theme.radii.sm};
  outline-color: ${p => p.theme.colors.accent};
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 16px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};

  border-radius: ${p => p.theme.radii.md};
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
