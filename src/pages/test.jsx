import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes[3]};
`

function Test() {
  return (
    <Text>最初のテストページ</Text>
  );
}

export default Test;
