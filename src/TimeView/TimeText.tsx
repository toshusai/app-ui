import styled from "styled-components";

export function TimeText(props: {
  time: number;
  left: number;
  height: number;
}) {
  let viewTime = props.time.toFixed(2);
  if (viewTime.endsWith(".00")) {
    viewTime = viewTime.slice(0, -3);
  } else if (viewTime.endsWith("0")) {
    viewTime = viewTime.slice(0, -1);
  }
  if (viewTime === "-0") {
    viewTime = "0";
  }

  return (
    <TimeTextDiv $left={props.left} $height={props.height}>
      <div style={{ marginLeft: "2px" }}>{viewTime}</div>
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
