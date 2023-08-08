import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export default function FiveStarRating({ rating }) {
  const stars = [];
  let starCount = rating;

  for (let i = 0; i < 5; i++) {
    if (starCount >= 1) {
      stars.push(<StarFill key={"star-fill" + i}></StarFill>);
    } else if (starCount <= 0) {
      stars.push(<StarEmpty key={"star-empty" + i}></StarEmpty>);
    } else {
      stars.push(<StarHalf key={"star-half" + i}></StarHalf>);
    }
    starCount--;
  }

  return (
    <div>
      <div>{stars}</div>
    </div>
  );
}
