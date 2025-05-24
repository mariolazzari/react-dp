import type { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ weight?: number }>`
  flex: ${props => props.weight || 1};
`;

type Props = {
  children: {
    left: ReactNode;
    right: ReactNode;
  };
} & Partial<{
  leftWeight: number;
  rightWeight: number;
}>;

function SpliScreen({ children, leftWeight = 1, rightWeight = 1 }: Props) {
  return (
    <Container>
      <Pane weight={leftWeight}>{children.left}</Pane>
      <Pane weight={rightWeight}>{children.right}</Pane>
    </Container>
  );
}

export default SpliScreen;
