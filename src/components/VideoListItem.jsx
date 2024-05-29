import { Link } from 'react-router-dom';

export default ({ file }) => {
  return (
    <Link to={`/videos/${file.id}`}>
      <li>
        <h2>{file.title}</h2>
        <p>{file.created_at}</p>
      </li>
    </Link>
  );
};
