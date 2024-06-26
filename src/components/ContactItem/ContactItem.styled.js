import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactData = styled.span`
  margin-right: ${p => p.theme.spacing(5)};
`;

export const Button = styled.button`
  font-size: 14px;

  background-color: transparent;
  border-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.sm};
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
