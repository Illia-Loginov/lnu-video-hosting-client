import { useState, useEffect } from 'react';
import { getFileById } from '../services/api.service';
import { useParams } from 'react-router-dom';
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

  return (
    <main>
      {file ? (
        <section>
          <h1>{file.title}</h1>
          <ReactPlayer url={file.url} controls />
          <p>{file.created_at}</p>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
