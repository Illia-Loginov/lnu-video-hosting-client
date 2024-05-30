import { Link } from 'react-router-dom';
import {
  getLongDateTime,
  getShortDateTime
} from '../services/datetime.service';

export default ({ file }) => {
  const createdAt = new Date(file.created_at);

  return (
    <Link to={`/videos/${file.id}`} className="video-item_link-wrapper">
      <li className="video-item">
        <h3 className="video-item__title">{file.title}</h3>
        <div className="video-item__metadata">
          <p
            className="video-item__metadata-item"
            title={getLongDateTime(createdAt)}
          >
            {getShortDateTime(createdAt)}
          </p>
        </div>
      </li>
    </Link>
  );
};
