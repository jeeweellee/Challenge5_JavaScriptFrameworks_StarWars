import "./styles.css";

function Gender({ gender }) {
  return <sup>Gender: {gender === "n/a" ? "not specified" : gender}</sup>;
}

function HairColor({ hair_color }) {
  return <sup>Hair Color: {hair_color === "n/a" ? "none" : hair_color}</sup>;
}

function Character({ character }) {
  return (
    <details>
      <summary>{character.name}</summary>
      <p>
        <Gender gender={character.gender} />
        <sup>Birth Year: {character.birth_year}</sup>
        <sup>Height: {character.height}</sup>
        <sup>Mass: {character.mass}</sup>
        <HairColor hair_color={character.hair_color} />
      </p>
    </details>
  );
}

export default function App({ characters }) {
  return (
    <div className="People">
      <h1 className="Title">Characters in Star Wars</h1>
      {characters.results.map((c, i) => (
        <Character key={i} character={c} />
      ))}
    </div>
  );
}
