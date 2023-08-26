import styled from "styled-components";

export function TimeText(props: {
  time: string;
  left: number;
  height: number;
}) {
  return (
    <TimeTextDiv $left={props.left} $height={props.height}>
      <div style={{ marginLeft: "2px" }}>{props.time}</div>
    </TimeTextDiv>
  );
}

const TimeTextDiv = styled.div.attrs<{
  $left: number;
  $height: number;
}>((props) => ({
  style: {
    left: props.$left,
    height: props.$height,
  },
}))<{ $left: number; $height: number }>`
  position: absolute;
  touch-action: none;
  pointer-events: none;
  height: 20px;
  border-left: 1px solid lightgray;
`;
