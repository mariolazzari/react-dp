import type { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

type Props = {
  left: ReactNode;
  right: ReactNode;
};

function SpliScreen({ left, right }: Props) {
  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  );
}

export default SpliScreen;
