import { deleteFileById, getFileById } from '../services/api.service';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  getLongDateTime,
  getShortDateTime
} from '../services/datetime.service';

export const playerLoader = async ({ params }) => {
  const { id } = params;

  return {
    id,
    file: await getFileById(id)
  };
};

export default () => {
  const { id, file } = useLoaderData();
  const navigate = useNavigate();

  const createdAt = new Date(file.created_at);

  const handleDelete = async (e) => {
    e.preventDefault();

    await deleteFileById(id);

    navigate('/');
  };

  return (
    <main className="main">
      <section className="section">
        <h1 className="heading">{file.title}</h1>
        <ReactPlayer
          className="player"
          url={file.url}
          controls
          width="100%"
          height="auto"
        />
        <div className="video-item__metadata">
          <p
            className="video-item__metadata-item"
            title={getLongDateTime(createdAt)}
          >
            {getShortDateTime(createdAt)}
          </p>
          <button
            className="input button button-warning"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </section>
    </main>
  );
};
