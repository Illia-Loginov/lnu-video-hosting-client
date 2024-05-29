import { useState, useEffect } from 'react';
import { deleteFileById, getFileById } from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

export default () => {
  const { id } = useParams();

  const [file, setFile] = useState(undefined);

  useEffect(() => {
    const fetchFile = async () => {
      const result = await getFileById(id);

      setFile(result);
    };

    fetchFile();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    await deleteFileById(id);

    navigate('/');
  };

  return (
    <main>
      {file ? (
        <section>
          <h1>{file.title}</h1>
          <ReactPlayer url={file.url} controls />
          <p>{file.created_at}</p>
          <button onClick={handleDelete}>Delete</button>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
