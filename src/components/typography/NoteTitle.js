import styled from 'styled-components';
import {Text} from 'react-native';

export default styled(Text)`
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
`;
