export default function SocialMedia({ list }) {
  const mediaList = list.map((ele, index) => {
    return (
      <a key={index}>
        <i className={ele}></i>
      </a>
    );
  });

  return <>{mediaList}</>;
}
