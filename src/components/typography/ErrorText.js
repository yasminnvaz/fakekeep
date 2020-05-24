import styled from 'styled-components';
import {Text} from 'react-native';

export default styled(Text)`
  color: ${({theme}) => theme.ERROR_TEXT_COLOR};
  padding-left: 10px;
  font-size: 10px;
`;
